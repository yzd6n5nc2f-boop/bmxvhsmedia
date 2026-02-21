import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy hero-copy-clean">
          <div className="hero-brand-shell">
            <div className="hero-logo-mark">
              <img
                className="hero-logo-img"
                src="/images/bmxvhs-logo.png"
                alt="BMX VHS logo"
              />
            </div>
            <div>
              <p className="eyebrow">Analog Creativity. AI Advertising.</p>
              <h1 className="hero-title">
                <span>BMX VHS MEDIA</span>
              </h1>
              <p className="subheadline hero-brand-lead">
                Analog advert launcher for the AI age.
              </p>
            </div>
          </div>
          <p className="hero-brand-copy">
            We build adverts, brand assets, and campaign media with analog-style creative direction and AI-powered
            production systems. Operated from London, UK.
          </p>
          <div className="hero-actions hero-actions-single">
            <Link className="primary-button" to="/studio">
              Launch Analog Advert Launcher
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
