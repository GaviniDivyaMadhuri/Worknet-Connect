import axios from "axios";

/**
 * Mirrors lib/api_service.dart 1:1, so every screen that used to call
 * ApiService.xxx() in Flutter calls apiService.xxx() here instead.
 *
 * In dev, requests go to "/api/..." and Vite's proxy (vite.config.js)
 * forwards them to http://localhost:5000. In production, build the app
 * and serve it from Express directly (see README) so no base URL is needed.
 */
const client = axios.create({
  baseURL: "/api",
});

// Attach the saved token (if any) to every request once you add auth.
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function unwrap(promise) {
  return promise.then((res) => res.data).catch((err) => {
    // Normalize errors the way the Dart version implicitly did by
    // just returning whatever JSON the server sent back.
    if (err.response) return Promise.reject(err.response.data);
    return Promise.reject({ message: err.message });
  });
}

export const apiService = {
  register(workerData) {
    return unwrap(client.post("/register", workerData));
  },

  login(phone, password) {
    return unwrap(
      client.post("/login", {
        phone: phone.trim(),
        password: password.trim(),
      })
    );
  },

  uploadPost(workerId, text, imageFile) {
    const form = new FormData();
    form.append("workerId", workerId);
    form.append("text", text);
    if (imageFile) {
      form.append("image", imageFile); // browser File object from <input type="file">
    }
    return unwrap(
      client.post("/upload-post", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    );
  },

  getPosts(workerId) {
    return unwrap(client.get(`/get-posts/${workerId}`));
  },

  updateAvailability(workerId, isAvailable) {
    return unwrap(
      client.post("/worker/availability", { workerId, isAvailable })
    );
  },

  findWorkersByLocation({ category, latitude, longitude, radius }) {
    return unwrap(
      client.get("/workers/search", {
        params: {
          category: category.trim(),
          latitude,
          longitude,
          radius,
        },
      })
    );
  },

  deletePost(postId, workerId) {
    return unwrap(client.delete(`/delete-post/${postId}/${workerId}`));
  },
};
