import React from "react";
import StudioStepper from "../components/StudioStepper.jsx";
import { studioSteps } from "../data/content.js";

export default function Studio() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Studio</p>
            <h2>Self-serve AI media studio.</h2>
            <p className="muted">
              Generate scripts, storyboards, and export packs in minutes. This
              is a lightweight app shell ready for real AI APIs.
            </p>
          </div>
          <button className="primary-button">Connect workspace</button>
        </div>
        <StudioStepper steps={studioSteps} />
        <div className="studio-footer card">
          <h3>Export pack preview</h3>
          <div className="chip-grid">
            <span className="chip">/scripts</span>
            <span className="chip">/storyboards</span>
            <span className="chip">/shot-lists</span>
            <span className="chip">/captions</span>
            <span className="chip">/voiceover</span>
            <span className="chip">/music-beds</span>
          </div>
          <button className="ghost-button">Download sample pack</button>
        </div>
      </div>
    </section>
  );
}
