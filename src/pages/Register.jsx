import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiService } from "../api/apiService";

const initialForm = {
  name: "",
  phone: "",
  password: "",
  category: "",
  latitude: "",
  longitude: "",
};

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function useMyLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      setForm((f) => ({
        ...f,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await apiService.register({
        ...form,
        latitude: Number(form.latitude) || undefined,
        longitude: Number(form.longitude) || undefined,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-card">
      <h1>Create your worker profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input value={form.name} onChange={update("name")} required />
        </label>
        <label>
          Phone
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={update("password")}
            required
          />
        </label>
        <label>
          Category (e.g. electrician, plumber)
          <input value={form.category} onChange={update("category")} />
        </label>
        <div className="location-row">
          <label>
            Latitude
            <input value={form.latitude} onChange={update("latitude")} />
          </label>
          <label>
            Longitude
            <input value={form.longitude} onChange={update("longitude")} />
          </label>
        </div>
        <button type="button" onClick={useMyLocation}>
          Use my current location
        </button>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Creating account…" : "Register"}
        </button>
      </form>
      <p>
        Already registered? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
