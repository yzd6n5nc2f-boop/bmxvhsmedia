import React from "react";

export default function StudioStepper({ steps }) {
  return (
    <div className="studio-stepper">
      {steps.map((step, index) => (
        <article className="card step-card" key={step.title}>
          <div className="step-header">
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
          </div>
          <p className="muted">{step.description}</p>
          {step.options ? (
            <div className="chip-grid">
              {step.options.map((option) => (
                <span className="chip" key={option}>
                  {option}
                </span>
              ))}
            </div>
          ) : null}
          {step.fields ? (
            <div className="form-grid">
              {step.fields.map((field) => (
                <label key={field}>
                  <span>{field}</span>
                  <input placeholder={field} />
                </label>
              ))}
            </div>
          ) : null}
          {step.sliders ? (
            <div className="slider-stack">
              {step.sliders.map((slider) => (
                <label key={slider}>
                  <span>{slider}</span>
                  <input type="range" min="0" max="100" defaultValue="65" />
                </label>
              ))}
            </div>
          ) : null}
          {step.outputs ? (
            <ul className="output-list">
              {step.outputs.map((output) => (
                <li key={output}>{output}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
