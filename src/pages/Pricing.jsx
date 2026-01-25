import React from "react";
import PricingCard from "../components/PricingCard.jsx";
import { pricingTiers } from "../data/content.js";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2>Pick your sprint size.</h2>
            <p className="muted">
              Transparent tiers built for small teams, big ideas, and fast
              launches.
            </p>
          </div>
          <Link className="ghost-button" to="/contact">
            Custom request
          </Link>
        </div>
        <div className="card-grid pricing-grid">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <div className="pricing-note card">
          <h3>Custom for agencies + brands</h3>
          <p>
            Need a higher volume or ongoing partnership? We build custom
            retainer stacks with dedicated AI pipelines and creative leads.
          </p>
          <Link className="primary-button" to="/contact">
            Build a custom plan
          </Link>
        </div>
      </div>
    </section>
  );
}
