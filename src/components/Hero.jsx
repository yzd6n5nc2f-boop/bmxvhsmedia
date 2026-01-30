import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">BIG BANG FOR A SMALL BUDGET</p>
          <h1 className="hero-title">
            <span>RETRO ENERGY. AI</span>
            <span>SPEED, SMALL BUDGET,</span>
            <span>BIG IMPACT.</span>
          </h1>
          <p className="subheadline">
            BMX VHS Media is a retro-future studio that merges 80s/90s
            creativity with AI-powered workflows to produce ads, reels, and
            brand films fast — without big budgets.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/studio">
              CREATE WITH AI
            </Link>
            <Link className="ghost-button" to="/work">
              SEE WORK
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
      </div>
    </section>
  );
}
