import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindWorkers from "./pages/FindWorkers";
import Profile from "./pages/Profile";
import UploadPost from "./pages/UploadPost";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/find-workers" element={<FindWorkers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload-post" element={<UploadPost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
