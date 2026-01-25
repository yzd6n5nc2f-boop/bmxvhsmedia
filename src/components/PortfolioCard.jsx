import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioCard({ slug, title, category, outcome, summary }) {
  return (
    <Link className="card portfolio-card" to={`/work/${slug}`}>
      <div className="portfolio-meta">
        <span className="badge outline">{category}</span>
        <span className="outcome">{outcome}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <span className="link-arrow">View case study →</span>
    </Link>
  );
}
