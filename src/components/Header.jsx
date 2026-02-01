import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/">
          <span className="logo-badge">BMX</span>
          <div>
            <span className="logo-title">BMX VHS Media</span>
            <span className="logo-tag">music • video • memories • AI</span>
          </div>
        </Link>
        <nav className="nav-links">
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
        <div className="header-actions">
          <Link className="primary-button" to="/studio">
            CREATE WITH AI
          </Link>
          <details className="header-menu">
            <summary>More</summary>
            <div className="header-menu-panel">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
