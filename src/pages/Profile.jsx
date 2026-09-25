import { useEffect, useState } from "react";
import { apiService } from "../api/apiService";

export default function Profile() {
  const workerId = localStorage.getItem("workerId");
  const [posts, setPosts] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!workerId) return;
    apiService
      .getPosts(workerId)
      .then((data) => setPosts(data.posts || data.results || []))
      .catch((err) => setError(err.message || "Couldn't load posts."));
  }, [workerId]);

  async function toggleAvailability() {
    const next = !isAvailable;
    setIsAvailable(next); // optimistic
    try {
      await apiService.updateAvailability(workerId, next);
    } catch (err) {
      setIsAvailable(!next); // revert on failure
      setError(err.message || "Couldn't update availability.");
    }
  }

  async function handleDelete(postId) {
    try {
      await apiService.deletePost(postId, workerId);
      setPosts((p) => p.filter((post) => (post._id || post.id) !== postId));
    } catch (err) {
      setError(err.message || "Couldn't delete post.");
    }
  }

  if (!workerId) {
    return <p className="page">Log in to see your profile.</p>;
  }

  return (
    <div className="page">
      <h1>My profile</h1>
      <label className="availability-toggle">
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={toggleAvailability}
        />
        Available for work
      </label>

      {error && <p className="error">{error}</p>}

      <h2>My posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post._id || post.id} className="post-card">
            {post.imageUrl && <img src={post.imageUrl} alt="" />}
            <p>{post.text}</p>
            <button onClick={() => handleDelete(post._id || post.id)}>
              Delete
            </button>
          </li>
        ))}
        {posts.length === 0 && <p>No posts yet.</p>}
      </ul>
    </div>
  );
}
