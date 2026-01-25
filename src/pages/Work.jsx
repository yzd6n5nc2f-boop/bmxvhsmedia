import React from "react";
import PortfolioCard from "../components/PortfolioCard.jsx";
import { portfolio } from "../data/content.js";

export default function Work() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Work</p>
            <h2>Portfolio built on bold hooks.</h2>
            <p className="muted">
              Quick sprints, polished deliverables, real performance outcomes.
            </p>
          </div>
        </div>
        <div className="card-grid">
          {portfolio.map((project) => (
            <PortfolioCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
