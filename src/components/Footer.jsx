import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>BMX VHS Media</h3>
          <p>
            Retro soul, future tools. We turn tight budgets into bold media with
            AI-first production.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/studio">Studio</Link>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="footer-note">
          <div className="streak-bar" aria-hidden="true"></div>
          <span>© 2025 BMX VHS Media. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
