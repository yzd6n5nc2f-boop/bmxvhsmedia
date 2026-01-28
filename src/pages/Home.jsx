import React from "react";
import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <section className="home-links">
        <div className="container">
          <p className="eyebrow">Explore</p>
          <div className="home-link-grid">
            <Link className="ghost-button" to="/services">
              Services
            </Link>
            <Link className="ghost-button" to="/work">
              Work
            </Link>
            <Link className="ghost-button" to="/pricing">
              Pricing
            </Link>
            <Link className="ghost-button" to="/studio">
              Studio
            </Link>
            <Link className="ghost-button" to="/about">
              About
            </Link>
            <Link className="ghost-button" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
