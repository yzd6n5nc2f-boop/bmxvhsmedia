import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-links footer-links-right">
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
