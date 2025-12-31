import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="nav-logo">SHWETA KUMARI</div>

      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className={active === "experience" ? "active" : ""}
            onClick={() => setActive("experience")}
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#activities"
            className={active === "activities" ? "active" : ""}
            onClick={() => setActive("activities")}
          >
            Activities
          </a>
        </li>
      </ul>
    </nav>
  );
}
