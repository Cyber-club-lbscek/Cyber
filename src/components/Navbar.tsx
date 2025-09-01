import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Upcoming", path: "#upcoming" },
  { name: "Events", path: "#events" },
  { name: "Contact", path: "#contact" }
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav
      style={{
        background: "var(--background)",
        boxShadow: "0 2px 12px #3F72AF22",
        padding: "0.5rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "background 0.4s cubic-bezier(0.4,0,0.2,1)"
      }}
    >
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {navLinks.map(link => (
          <li key={link.path}>
            {link.path.startsWith("#") ? (
              <a
                href={link.path}
                style={{
                  color: "#3F72AF",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: "transparent",
                  boxShadow: "none",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.path}
                style={{
                  color: location.pathname === link.path ? "#112D4E" : "#3F72AF",
                  fontWeight: location.pathname === link.path ? 700 : 500,
                  fontSize: "1.1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: location.pathname === link.path ? "#DBE2EF" : "transparent",
                  boxShadow: location.pathname === link.path ? "0 2px 8px #3F72AF22" : "none",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
                }}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
