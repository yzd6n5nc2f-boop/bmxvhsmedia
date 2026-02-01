import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="BMX VHS Media home">
          <span className="brand-stack">
            <span className="brand-mark">
              <img
                className="brand-mark-img"
                src="/images/bmxvhs-logo.png"
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className="brand-sub">
              <span className="brand-media">MEDIA</span>
              <span className="brand-tagline">
                music • video • memories • AI
              </span>
            </span>
          </span>
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
