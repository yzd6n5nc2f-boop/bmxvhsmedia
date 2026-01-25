import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          {/* Alternate hero options:
          "Retro soul. Future tools. Instant media."
          "BMX VHS Media: bold ideas built fast."
          */}
          <p className="eyebrow">Big bang for a small budget</p>
          <h1>VHS energy. AI speed. Small budget, big impact.</h1>
          <p className="subheadline">
            BMX VHS Media is a retro-future studio that turns ideas into ads,
            reels, and brand films fast—powered by AI workflows and sharp human
            taste.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/studio">
              Create with AI
            </Link>
            <Link className="ghost-button" to="/work">
              See work
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <h3>24-72h</h3>
              <span>Typical turnarounds</span>
            </div>
            <div>
              <h3>120+</h3>
              <span>Assets shipped monthly</span>
            </div>
            <div>
              <h3>AI-first</h3>
              <span>Scripts, shots, edits</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="cassette">
            <div className="cassette-top">
              <span className="cassette-label">BMX VHS</span>
              <span className="cassette-label small">MEDIA</span>
            </div>
            <div className="cassette-window">
              <div className="reel"></div>
              <div className="reel"></div>
            </div>
            <div className="cassette-bottom">
              <span>AI-first production</span>
              <div className="streak-diagonal"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
