import React from "react";
import { Link } from "react-router-dom";

const heroCards = [
  {
    title: "Advert Launch Engine",
    copy: "Turn one brief into scripts, scenes, cut lists, and platform-ready advert variants.",
    tag: "Campaign Ads",
    tone: "sun",
  },
  {
    title: "Brand Story Systems",
    copy: "Blend analog craft with AI execution to build brand films, reels, and full identity campaigns.",
    tag: "Branding",
    tone: "aurora",
  },
  {
    title: "Media for the AI Age",
    copy: "Create high-impact advertising for any industry with one connected creative workflow.",
    tag: "Creative Ops",
    tone: "flare",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-brand-shell">
            <div className="hero-logo-mark" aria-hidden="true">
              <span>BMX</span>
              <small>VHS</small>
            </div>
            <div>
              <p className="eyebrow">Analog Craft. AI Firepower.</p>
              <h1 className="hero-title">
                <span>BMX VHS MEDIA</span>
              </h1>
              <p className="subheadline hero-brand-lead">Analog imagination. AI execution.</p>
            </div>
          </div>
          <p className="hero-brand-copy">
            We are a media company built for modern advertising. We combine classic visual craft with AI systems to
            produce adverts, brand assets, and campaigns for companies that need standout creative fast.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/studio">
              CREATE WITH AI
            </Link>
            <Link className="ghost-button" to="/work">
              SEE WORK
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <h3>24-72h</h3>
              <span>Typical campaign sprint</span>
            </div>
            <div>
              <h3>Ad-first</h3>
              <span>Built for advertising outcomes</span>
            </div>
            <div>
              <h3>Analog + AI</h3>
              <span>Creative direction plus automation</span>
            </div>
          </div>
          <div className="hero-service-grid">
            {heroCards.map((card) => (
              <article className={`hero-service-card tone-${card.tone}`} key={card.title}>
                <div className="hero-service-content">
                  <span className="badge outline">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
