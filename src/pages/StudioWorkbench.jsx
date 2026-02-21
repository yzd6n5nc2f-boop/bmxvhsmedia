import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const objectiveOptions = ["Awareness", "Leads", "Sales", "App installs"];
const durationOptions = ["15s", "30s", "45s", "60s"];
const budgetOptions = ["Test (< £1k)", "Growth (£1k-£5k)", "Scale (£5k+)"];
const channelOptions = [
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
  "Meta Ads",
  "Landing Page",
];
const toneOptions = ["Bold", "Retro", "Cinematic", "Clean", "Playful"];
const sceneCountOptions = ["4", "6", "8", "10"];

const openAiModelOptions = {
  script: ["gpt-5", "gpt-4.1"],
  images: ["gpt-image-1", "gpt-image-1-high"],
  sora: ["sora-prototype", "sora-production"],
};

const workflowSteps = [
  {
    id: "brief",
    title: "Campaign Brief",
    tool: "OpenAI Responses",
    description: "Lock objective, audience, channels, and conversion goal.",
  },
  {
    id: "storyboard",
    title: "Storyboard Draft",
    tool: "OpenAI Responses",
    description: "Build scene-by-scene narrative and camera intent.",
  },
  {
    id: "frames",
    title: "Scene Images",
    tool: "OpenAI Images",
    description: "Generate visual frames from storyboard and references.",
  },
  {
    id: "prototype",
    title: "Sora Prototype",
    tool: "OpenAI Sora",
    description: "Create a fast prototype cut to review pacing and look.",
  },
  {
    id: "final",
    title: "Final Production",
    tool: "OpenAI + Human Review",
    description: "Promote approved prototype into final advert outputs.",
  },
];

const checkoutPlans = [
  {
    id: "creator",
    name: "Creator",
    price: "£49/mo",
    summary: "Solo workflows and limited credits.",
    features: ["3 active campaigns", "30 AI generations / month", "Single workspace"],
  },
  {
    id: "studio",
    name: "Studio",
    price: "£149/mo",
    summary: "Full advert pipeline for teams.",
    features: ["Unlimited campaigns", "Sora prototype workflow", "Priority generation queue"],
  },
  {
    id: "agency",
    name: "Agency",
    price: "Custom",
    summary: "White-label and managed deployment.",
    features: ["Multi-client dashboards", "Dedicated onboarding", "Custom integrations"],
  },
];

const initialBrief = {
  campaignName: "Spring Launch Promo",
  brand: "BMX VHS Media",
  offer: "Analog + AI advert workflow",
  audience: "Indie brands and creators",
  goal: "Sales",
  duration: "30s",
  budget: "Growth (£1k-£5k)",
  channels: ["TikTok", "Instagram Reels"],
  tones: ["Bold", "Retro"],
};

const initialStoryboard = {
  arc: "Open with product tension, reveal transformation, end on clear CTA.",
  sceneCount: "6",
  visualStyle: "Cinematic analog texture with modern typography overlays.",
  referenceImage: "",
};

const initialModels = {
  script: "gpt-5",
  images: "gpt-image-1",
  sora: "sora-prototype",
};

function toggleChoice(list, item) {
  if (list.includes(item)) {
    if (list.length === 1) {
      return list;
    }

    return list.filter((entry) => entry !== item);
  }

  return [...list, item];
}

function buildProductionPlan(brief, storyboard, models) {
  const campaignName = brief.campaignName || "Untitled campaign";
  const brand = brief.brand || "Your brand";
  const offer = brief.offer || "your offer";
  const audience = brief.audience || "your audience";
  const goal = brief.goal || "Awareness";
  const duration = brief.duration || "30s";
  const channel = brief.channels[0] || "Instagram Reels";
  const tones = brief.tones.join(", ").toLowerCase();
  const sceneCount = Math.max(Number(storyboard.sceneCount) || 4, 1);
  const referenceLabel = storyboard.referenceImage || "No reference image uploaded";

  const sceneFrames = Array.from({ length: sceneCount }, (_, index) => {
    const sceneNumber = index + 1;
    return `Scene ${sceneNumber}: ${brand} ${sceneNumber === 1 ? "intro" : "beat"} in ${tones} style.`;
  });

  return {
    hook: `${brand} introduces ${offer}. Build a ${duration} advert focused on ${goal.toLowerCase()} for ${audience}.`,
    storyboardPrompt: `${storyboard.arc} Use ${storyboard.visualStyle} with ${sceneCount} scenes and a clear final CTA on ${channel}.`,
    sceneFrames,
    prototypePlan: `Generate low-latency Sora prototype (${models.sora}) from storyboard frames, then mark edit notes before final render.`,
    finalPlan: `After prototype approval, run final pass with ${models.script} + ${models.images} for production-ready deliverables.`,
    referenceLabel,
    deliverables: [
      `${campaignName} storyboard pack`,
      `Frame set (${sceneCount} scenes)`,
      `${duration} Sora prototype`,
      "Final advert exports: 9:16 | 1:1 | 16:9",
      "CTA and caption variants",
    ],
  };
}

function formatGeneratedAt(date) {
  if (!date) {
    return "Not generated yet";
  }

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getStepStatus(generatedAt, stepIndex) {
  if (!generatedAt) {
    if (stepIndex === 0) {
      return { tone: "ready", label: "Ready" };
    }

    return { tone: "queued", label: "Queued" };
  }

  return { tone: "done", label: "Done" };
}

export default function StudioWorkbench() {
  const [brief, setBrief] = useState(initialBrief);
  const [storyboard, setStoryboard] = useState(initialStoryboard);
  const [models, setModels] = useState(initialModels);
  const [selectedPlan, setSelectedPlan] = useState("studio");
  const [generatedAt, setGeneratedAt] = useState(null);
  const [checkoutNote, setCheckoutNote] = useState("");

  const plan = useMemo(
    () => buildProductionPlan(brief, storyboard, models),
    [brief, storyboard, models],
  );

  const handleBriefChange = (event) => {
    const { name, value } = event.target;
    setBrief((current) => ({ ...current, [name]: value }));
  };

  const handleStoryboardChange = (event) => {
    const { name, value } = event.target;
    setStoryboard((current) => ({ ...current, [name]: value }));
  };

  const handleModelChange = (event) => {
    const { name, value } = event.target;
    setModels((current) => ({ ...current, [name]: value }));
  };

  const handleChannelToggle = (channel) => {
    setBrief((current) => ({
      ...current,
      channels: toggleChoice(current.channels, channel),
    }));
  };

  const handleToneToggle = (tone) => {
    setBrief((current) => ({
      ...current,
      tones: toggleChoice(current.tones, tone),
    }));
  };

  const handleReferenceUpload = (event) => {
    const [file] = event.target.files || [];
    setStoryboard((current) => ({
      ...current,
      referenceImage: file ? file.name : "",
    }));
  };

  const handleGenerate = () => {
    setGeneratedAt(new Date());
  };

  const handleCheckout = () => {
    const planSelection = checkoutPlans.find((planItem) => planItem.id === selectedPlan);

    if (!planSelection) {
      setCheckoutNote("Choose a plan before continuing.");
      return;
    }

    setCheckoutNote(
      `Plan selected: ${planSelection.name}. Replace this with your Stripe checkout session endpoint.`,
    );
  };

  return (
    <section className="section studio-workbench">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Studio Platform</p>
            <h2>Agentic advert builder workspace.</h2>
            <p className="muted">
              OpenAI-only workflow: campaign brief to storyboard, storyboard to images, images to Sora prototype, then
              final production.
            </p>
          </div>
          <div className="studio-entry-actions">
            <Link className="ghost-button" to="/">
              Back to home
            </Link>
            <button className="primary-button" type="button" onClick={handleGenerate}>
              Generate workflow
            </button>
          </div>
        </div>

        <div className="workbench-toolbar card">
          <span className="badge">OpenAI Stack Only</span>
          <span className="chip">
            {"Storyboard -> Images -> Sora Prototype -> Final Production"}
          </span>
          <span className="chip">Generated {formatGeneratedAt(generatedAt)}</span>
        </div>

        <div className="workbench-grid">
          <article className="card workbench-card">
            <div className="workbench-header">
              <h3>1. Campaign brief</h3>
              <span className="chip">Required inputs</span>
            </div>
            <div className="form-grid workbench-form-grid">
              <label>
                <span>Campaign name</span>
                <input
                  name="campaignName"
                  onChange={handleBriefChange}
                  placeholder="Campaign name"
                  value={brief.campaignName}
                />
              </label>
              <label>
                <span>Brand</span>
                <input name="brand" onChange={handleBriefChange} placeholder="Brand" value={brief.brand} />
              </label>
              <label>
                <span>Offer / product</span>
                <input name="offer" onChange={handleBriefChange} placeholder="Offer" value={brief.offer} />
              </label>
              <label>
                <span>Audience</span>
                <input
                  name="audience"
                  onChange={handleBriefChange}
                  placeholder="Audience"
                  value={brief.audience}
                />
              </label>
              <label>
                <span>Goal</span>
                <select name="goal" onChange={handleBriefChange} value={brief.goal}>
                  {objectiveOptions.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Duration</span>
                <select name="duration" onChange={handleBriefChange} value={brief.duration}>
                  {durationOptions.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Media budget</span>
                <select name="budget" onChange={handleBriefChange} value={brief.budget}>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="stack">
              <p className="muted">Distribution channels</p>
              <div className="toggle-chip-grid">
                {channelOptions.map((channel) => (
                  <button
                    className={brief.channels.includes(channel) ? "chip-toggle active" : "chip-toggle"}
                    key={channel}
                    onClick={() => handleChannelToggle(channel)}
                    type="button"
                  >
                    {channel}
                  </button>
                ))}
              </div>
            </div>

            <div className="stack">
              <p className="muted">Creative tone</p>
              <div className="toggle-chip-grid">
                {toneOptions.map((tone) => (
                  <button
                    className={brief.tones.includes(tone) ? "chip-toggle active" : "chip-toggle"}
                    key={tone}
                    onClick={() => handleToneToggle(tone)}
                    type="button"
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article className="card workbench-card">
            <div className="workbench-header">
              <h3>2. Storyboard + model setup</h3>
              <span className="chip">OpenAI configuration</span>
            </div>

            <div className="storyboard-grid">
              <label>
                <span>Story arc</span>
                <textarea
                  name="arc"
                  onChange={handleStoryboardChange}
                  rows="4"
                  value={storyboard.arc}
                />
              </label>
              <label>
                <span>Visual style</span>
                <textarea
                  name="visualStyle"
                  onChange={handleStoryboardChange}
                  rows="4"
                  value={storyboard.visualStyle}
                />
              </label>
              <label>
                <span>Scene count</span>
                <select name="sceneCount" onChange={handleStoryboardChange} value={storyboard.sceneCount}>
                  {sceneCountOptions.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Reference image upload</span>
                <input accept="image/*" onChange={handleReferenceUpload} type="file" />
              </label>
            </div>

            <div className="reference-meta">
              <span className="chip">
                Reference: {storyboard.referenceImage || "No file selected"}
              </span>
            </div>

            <div className="model-grid">
              <label>
                <span>Script planner model</span>
                <select name="script" onChange={handleModelChange} value={models.script}>
                  {openAiModelOptions.script.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Image generation model</span>
                <select name="images" onChange={handleModelChange} value={models.images}>
                  {openAiModelOptions.images.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Sora mode</span>
                <select name="sora" onChange={handleModelChange} value={models.sora}>
                  {openAiModelOptions.sora.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </article>

          <article className="card workbench-card workbench-output">
            <div className="workbench-header">
              <h3>3. Workflow lane</h3>
              <span className="chip">Prototype-first pipeline</span>
            </div>

            <div className="workflow-lane" role="list" aria-label="Advert workflow pipeline">
              {workflowSteps.map((step, index) => {
                const status = getStepStatus(generatedAt, index);

                return (
                  <React.Fragment key={step.id}>
                    <article className="workflow-step" role="listitem">
                      <span className="workflow-step-index">0{index + 1}</span>
                      <h4>{step.title}</h4>
                      <p className="muted">{step.description}</p>
                      <span className="workflow-step-tool">{step.tool}</span>
                      <span className={`workflow-step-status ${status.tone}`}>{status.label}</span>
                    </article>
                    {index < workflowSteps.length - 1 ? (
                      <span className="workflow-arrow" aria-hidden="true">
                        {"->"}
                      </span>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </div>

            <p className="muted workflow-caption">
              {"Flow: brief -> storyboard -> scene images -> Sora prototype -> final advert handoff."}
            </p>

            <div className="output-block">
              <p className="output-label">Script hook</p>
              <p>{plan.hook}</p>
              <p className="output-label">Storyboard prompt</p>
              <p>{plan.storyboardPrompt}</p>
            </div>

            <div className="output-block">
              <p className="output-label">Storyboard scene frames</p>
              <ul className="scene-list">
                {plan.sceneFrames.map((scene) => (
                  <li key={scene}>{scene}</li>
                ))}
              </ul>
            </div>

            <div className="output-block">
              <p className="output-label">Prototype and final pass</p>
              <p>{plan.prototypePlan}</p>
              <p>{plan.finalPlan}</p>
              <p className="muted">Reference image state: {plan.referenceLabel}</p>
            </div>

            <div className="output-block">
              <p className="output-label">Deliverables</p>
              <div className="chip-grid">
                {plan.deliverables.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="card workbench-card checkout-card">
            <div className="workbench-header">
              <h3>4. Billing</h3>
              <span className="chip">Demo checkout</span>
            </div>
            <p className="muted">
              Select your workspace plan, then connect Stripe checkout for live billing.
            </p>
            <div className="plan-grid">
              {checkoutPlans.map((planItem) => {
                const selected = selectedPlan === planItem.id;

                return (
                  <button
                    className={selected ? "plan-option active" : "plan-option"}
                    key={planItem.id}
                    onClick={() => setSelectedPlan(planItem.id)}
                    type="button"
                  >
                    <span className="plan-name">{planItem.name}</span>
                    <span className="plan-price">{planItem.price}</span>
                    <span className="plan-copy">{planItem.summary}</span>
                    <span className="plan-copy">{planItem.features.join(" | ")}</span>
                  </button>
                );
              })}
            </div>
            <button className="primary-button" onClick={handleCheckout} type="button">
              Proceed to checkout
            </button>
            {checkoutNote ? <p className="muted checkout-note">{checkoutNote}</p> : null}
          </article>
        </div>
      </div>
    </section>
  );
}
