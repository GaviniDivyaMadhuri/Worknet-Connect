import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page hero">
      <h1>Find trusted local workers, fast.</h1>
      <p>
        WorkNet Connect links you with nearby electricians, plumbers,
        carpenters, painters, cleaners, and more.
      </p>
      <div className="hero-actions">
        <Link to="/find-workers" className="btn primary">
          Find a worker
        </Link>
        <Link to="/register" className="btn">
          Register as a worker
        </Link>
      </div>
    </div>
  );
}
