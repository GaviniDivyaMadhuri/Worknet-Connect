import { useState } from "react";
import { apiService } from "../api/apiService";

export default function FindWorkers() {
  const [category, setCategory] = useState("");
  const [radius, setRadius] = useState(5);
  const [coords, setCoords] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function locate() {
    if (!navigator.geolocation) {
      setError("Geolocation isn't available in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCoords({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      () => setError("Couldn't get your location. Enter it manually or allow location access.")
    );
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!coords) {
      setError("Share your location first so we can search nearby.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await apiService.findWorkersByLocation({
        category,
        latitude: coords.latitude,
        longitude: coords.longitude,
        radius,
      });
      // Adjust to match your API's actual response shape (e.g. data.workers).
      setResults(data.workers || data.results || []);
    } catch (err) {
      setError(err.message || "Search failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <h1>Find a worker</h1>
      <form onSubmit={handleSearch} className="search-row">
        <input
          placeholder="Category (e.g. plumber)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <span className="unit">km</span>
        <button type="button" onClick={locate}>
          {coords ? "Location set ✓" : "Use my location"}
        </button>
        <button type="submit" disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}

      <ul className="worker-list">
        {results.map((w) => (
          <li key={w._id || w.id} className="worker-card">
            <strong>{w.name}</strong>
            <span>{w.category}</span>
            <span>{w.isAvailable ? "Available" : "Unavailable"}</span>
          </li>
        ))}
        {!loading && results.length === 0 && <p>No results yet — search above.</p>}
      </ul>
    </div>
  );
}
