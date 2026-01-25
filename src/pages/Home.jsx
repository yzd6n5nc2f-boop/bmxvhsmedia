import React from "react";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import PricingCard from "../components/PricingCard.jsx";
import { services, portfolio, pricingTiers } from "../data/content.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="section dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services</p>
              <h2>AI-first production built for small budgets.</h2>
              <p className="muted">
                We create ads, reels, promos, and sound with a rapid AI workflow
                and a premium eye for detail.
              </p>
            </div>
            <Link className="ghost-button" to="/services">
              View all services
            </Link>
          </div>
          <div className="card-grid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Work</p>
              <h2>Retro texture, modern performance.</h2>
              <p className="muted">
                Campaigns built for conversions, views, and fan energy.
              </p>
            </div>
            <Link className="ghost-button" to="/work">
              Explore portfolio
            </Link>
          </div>
          <div className="card-grid">
            {portfolio.slice(0, 3).map((project) => (
              <PortfolioCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2>Simple tiers, big output.</h2>
              <p className="muted">
                Choose a sprint size or ask for a custom stack.
              </p>
            </div>
            <Link className="ghost-button" to="/pricing">
              See pricing
            </Link>
          </div>
          <div className="card-grid pricing-grid">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
