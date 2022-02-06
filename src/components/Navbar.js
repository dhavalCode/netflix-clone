import React, { useEffect, useState } from "react";
import "../components/css/Navbar.css";

function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${showBackground ? "nav_black" : ""}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix"
      />
      <ul className="nav_menu">
        <li>
          <a
            className="nan_link"
            target="_blank"
            rel="noreferrer"
            href="https://www.netflix.com/"
          >
            About
          </a>{" "}
        </li>
        <li>
          <a
            className="nan_link"
            target="_blank"
            rel="noreferrer"
            href="https://www.netflix.com/"
          >
            TV Shows
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
