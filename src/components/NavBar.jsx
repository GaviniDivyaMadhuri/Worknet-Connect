import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("workerId");
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        WorkNet Connect
      </Link>
      <div className="links">
        <Link to="/find-workers">Find Workers</Link>
        <Link to="/upload-post">Upload Post</Link>
        <Link to="/profile">Profile</Link>
        {isLoggedIn ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </nav>
  );
}
