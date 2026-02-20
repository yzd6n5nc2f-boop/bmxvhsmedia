import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something bold.</h2>
            <p className="muted">
              Tell us what you’re launching and we’ll map the fastest path to
              impact.
            </p>
          </div>
        </div>
        <div className="contact-grid">
          <form className="card form">
            <label>
              <span>Name</span>
              <input placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@brand.com" required />
            </label>
            <label>
              <span>Project summary</span>
              <textarea placeholder="Tell us about your campaign." rows="4" />
            </label>
            <div className="form-row">
              <label>
                <span>Project budget</span>
                <select>
                  <option>£1k-£3k</option>
                  <option>£3k-£7k</option>
                  <option>£7k-£15k</option>
                  <option>£15k+</option>
                </select>
              </label>
              <label>
                <span>Deadline</span>
                <input type="date" />
              </label>
            </div>
            <button className="primary-button" type="submit">
              Send request
            </button>
          </form>
          <div className="card contact-info">
            <h3>Studio contact</h3>
            <p>hi@bmxvhsmedia.com</p>
            <p>London, UK · Remote worldwide</p>
            <div className="social-links">
              <a href="https://example.com">Instagram</a>
              <a href="https://example.com">YouTube</a>
              <a href="https://example.com">TikTok</a>
              <a href="https://example.com">Behance</a>
            </div>
            <div className="streak-panel">
              <h4>We reply fast.</h4>
              <p>
                Expect a response within 24 hours. We’ll include a suggested
                sprint plan and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
