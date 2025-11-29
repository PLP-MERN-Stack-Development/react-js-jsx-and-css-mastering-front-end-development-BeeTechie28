import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>React App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </div>
    </div>
  );
}
