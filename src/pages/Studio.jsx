import React from "react";
import { Link } from "react-router-dom";
import StudioStepper from "../components/StudioStepper.jsx";
import { studioSteps } from "../data/content.js";

export default function Studio() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Studio</p>
            <h2>AI advert studio gateway.</h2>
            <p className="muted">
              This page is the public demo runway. Enter the workspace to build
              full campaign plans with OpenAI-first tooling and optional third-party APIs.
            </p>
          </div>
          <div className="studio-entry-actions">
            <Link className="primary-button" to="/studio/workbench">
              Launch workspace
            </Link>
            <Link className="ghost-button" to="/pricing">
              View plans
            </Link>
          </div>
        </div>

        <div className="card-grid studio-entry-grid">
          <article className="card studio-entry-card">
            <p className="eyebrow">Step 1 - Demo</p>
            <h3>Preview the creation flow.</h3>
            <p className="muted">
              Walk through brief capture, provider selection, and output packaging before connecting your live APIs.
            </p>
            <ul className="output-list">
              <li>No account required</li>
              <li>Sample export pack</li>
              <li>Blueprint generation preview</li>
            </ul>
          </article>
          <article className="card studio-entry-card studio-entry-card-highlight">
            <p className="eyebrow">Step 2 - Platform</p>
            <h3>Open the agentic advert workspace.</h3>
            <p className="muted">
              Activate the full app to orchestrate video, images, voice, and music providers in one pipeline.
            </p>
            <div className="chip-grid">
              <span className="chip">OpenAI / Sora</span>
              <span className="chip">Suno-ready slot</span>
              <span className="chip">Provider API keys</span>
              <span className="chip">Checkout-ready flow</span>
            </div>
            <Link className="primary-button" to="/studio/workbench">
              Enter platform
            </Link>
          </article>
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
          <Link className="ghost-button" to="/studio/workbench">
            Open workspace demo
          </Link>
        </div>
      </div>
    </section>
  );
}
