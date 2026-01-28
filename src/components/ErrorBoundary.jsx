import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("BMX Media app crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section">
          <div className="container">
            <div className="card">
              <h2>We hit a snag loading this page.</h2>
              <p className="muted">
                Please refresh or try again later. If the issue persists, let the
                team know and we will take a look.
              </p>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
