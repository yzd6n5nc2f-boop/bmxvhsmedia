import React from "react";
import { values } from "../data/content.js";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">About</p>
            <h2>Built on retro creativity, driven by AI.</h2>
            <p className="muted">
              A creative studio blending 80s/90s energy with modern, AI-first
              production.
            </p>
          </div>
        </div>
        <div className="about-grid">
          <div className="card">
            <h3>Our story</h3>
            <p>
              We grew up on arcade-era design, neon-lit cityscapes, and
              late-night edit sessions. Now we use AI to amplify creativity,
              making ambitious video and sound possible on budgets that would
              normally say no.
            </p>
            <p>
              Every project is a mix of human taste, rapid iteration, CRT glow,
              scanlines, and an obsession with what makes a hook stick.
            </p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <ul>
              {values.map((value) => (
                <li key={value.title}>
                  <strong>{value.title}:</strong> {value.body}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>AI-first workflow</h3>
            <ul>
              <li>Rapid ideation, scripts, and storyboards in hours.</li>
              <li>Shot lists and asset generation synced to your budget.</li>
              <li>Versioned edits, captions, and exports in minutes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
