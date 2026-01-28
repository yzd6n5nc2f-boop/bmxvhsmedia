import React from "react";

export default function FeatureCard({ title, body, imageSrc }) {
  return (
    <article className="card feature-card">
      <div
        className="feature-card-image"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(255, 78, 78, 0.2), rgba(68, 217, 255, 0.25), rgba(52, 226, 122, 0.2)), url('${imageSrc}')`,
        }}
        role="img"
        aria-label={title}
      />
      <div className="feature-card-body">
        <h3>{title}</h3>
        <p className="muted">{body}</p>
      </div>
    </article>
  );
}
