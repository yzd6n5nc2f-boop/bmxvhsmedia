import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner header-inner-clean">
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <span className="header-location">London, UK</span>
      </div>
    </header>
  );
}
