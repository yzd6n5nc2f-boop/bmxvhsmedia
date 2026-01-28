import React from "react";
import PortfolioCard from "../components/PortfolioCard.jsx";
import { portfolio, workGalleryImages } from "../data/content.js";

export default function Work() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR 80s INSPIRED WORK</p>
            <h2>BRAND FILMS & ADS WITH RETRO-FUTURE VIBES</h2>
            <p className="muted">
              Built for launch moments, social momentum, and bold brand stories.
            </p>
          </div>
        </div>
        <div className="work-gallery">
          {workGalleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`work-gallery-item${index === 0 ? " featured" : ""}`}
            >
              <div
                className="work-gallery-image"
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(255, 78, 78, 0.2), rgba(68, 217, 255, 0.2), rgba(52, 226, 122, 0.2)), url('${image.src}')`,
                }}
                role="img"
                aria-label={image.alt}
              />
            </figure>
          ))}
        </div>
        <div className="work-case-studies" id="case-studies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Case studies</p>
              <h3>Explore the full portfolio</h3>
            </div>
          </div>
          <div className="card-grid">
            {portfolio.map((project) => (
              <PortfolioCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
