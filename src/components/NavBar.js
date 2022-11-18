import { Link } from "react-router-dom";
import { useProvider } from "../hooks/useProvider";

//* style
import "./NavBar.css";

function NavBar() {
  const { color, changeColor } = useProvider();
  return (
    <div className="nav-bar">
      <nav className="nav-item" style={{ background: color }}>
        <div className="left-nav">
          <h1 className="nav-logo">BROWNSCRIPT</h1>
        </div>

        <div className="right-nav">
          <Link to="/" onClick={() => changeColor("#000")}>
            Home
          </Link>
          <Link to="/about" onClick={() => changeColor("#ff595e")}>
            About
          </Link>
          <Link to="/contact" onClick={() => changeColor("#f86624")}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
