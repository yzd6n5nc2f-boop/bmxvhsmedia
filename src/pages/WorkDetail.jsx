import React from "react";
import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/content.js";

export default function WorkDetail() {
  const { slug } = useParams();
  const project = portfolio.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Case study not found.</h2>
          <Link className="ghost-button" to="/work">
            Back to work
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Case study</p>
            <h2>{project.title}</h2>
            <p className="muted">{project.summary}</p>
          </div>
          <span className="badge outline">{project.category}</span>
        </div>
        <div className="detail-grid">
          <div className="card">
            <h3>Outcome</h3>
            <p className="detail-highlight">{project.outcome}</p>
            <p>
              We leaned into VHS artifacts, bold typography, and AI-generated
              environments to deliver a fast-moving narrative that felt both
              nostalgic and premium.
            </p>
          </div>
          <div className="card">
            <h3>What we delivered</h3>
            <ul>
              <li>Hero launch video + 3 cutdowns</li>
              <li>Storyboard + shot list in 24 hours</li>
              <li>Sound bed, VO, and motion graphics package</li>
              <li>Social exports in every major ratio</li>
            </ul>
          </div>
          <div className="card">
            <h3>Workflow</h3>
            <ol>
              <li>AI-assisted ideation + script hooks</li>
              <li>Rapid storyboard with style frames</li>
              <li>Hybrid AI + practical edit sprint</li>
              <li>Final polish with human color grading</li>
            </ol>
          </div>
        </div>
        <Link className="ghost-button" to="/work">
          ← Back to all work
        </Link>
      </div>
    </section>
  );
}
