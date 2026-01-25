import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/studio");
  };

  return (
    <section className="section login">
      <div className="container">
        <div className="login-panel card">
          <p className="eyebrow">Welcome back</p>
          <h2>Log into the studio.</h2>
          <p className="muted">
            This is a lightweight placeholder. Connect your real auth flow
            later.
          </p>
          <form onSubmit={handleSubmit} className="form">
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@brand.com" required />
            </label>
            <label>
              <span>Password</span>
              <input type="password" placeholder="••••••••" required />
            </label>
            <button className="primary-button" type="submit">
              Continue
            </button>
            <button className="ghost-button" type="button">
              Continue with workspace link
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
