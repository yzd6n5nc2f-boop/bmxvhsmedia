import React from "react";

export default function ServiceCard({ title, bestFor, deliverables, turnaround }) {
  return (
    <article className="card service-card">
      <h3>{title}</h3>
      <p className="card-label">Best for</p>
      <p>{bestFor}</p>
      <p className="card-label">Deliverables</p>
      <p>{deliverables}</p>
      <p className="card-label">Typical turnaround</p>
      <p>{turnaround}</p>
    </article>
  );
}
