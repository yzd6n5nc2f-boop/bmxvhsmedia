import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Production, packaged for speed.</h2>
            <p className="muted">
              We specialize in rapid ideation and execution across video, motion,
              sound, and brand systems.
            </p>
          </div>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
