import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../api/apiService";

export default function UploadPost() {
  const workerId = localStorage.getItem("workerId");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file || null);
    setPreview(file ? URL.createObjectURL(file) : null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await apiService.uploadPost(workerId, text, image);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!workerId) {
    return <p className="page">Log in to upload a post.</p>;
  }

  return (
    <div className="page">
      <h1>Upload a service post</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label>
          Description
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>
        <label>
          Photo (optional)
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {preview && <img src={preview} alt="preview" className="preview" />}
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Uploading…" : "Post"}
        </button>
      </form>
    </div>
  );
}
