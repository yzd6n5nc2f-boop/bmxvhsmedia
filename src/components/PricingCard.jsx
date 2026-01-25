import React from "react";

export default function PricingCard({ name, price, tagline, includes, featured }) {
  return (
    <article className={featured ? "card pricing-card featured" : "card pricing-card"}>
      {featured ? <span className="badge">Most popular</span> : null}
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <p className="muted">{tagline}</p>
      <ul>
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="primary-button">Book a sprint</button>
    </article>
  );
}
