import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const objectiveOptions = ["Awareness", "Leads", "Sales", "App installs"];
const durationOptions = ["15s", "30s", "45s", "60s"];
const budgetOptions = ["Test (< $1k)", "Growth ($1k-$5k)", "Scale ($5k+)"];
const channelOptions = [
  "TikTok",
  "Instagram Reels",
  "YouTube Shorts",
  "Meta Ads",
  "Landing Page",
];
const toneOptions = ["Bold", "Retro", "Cinematic", "Clean", "Playful"];

const providerTracks = [
  {
    id: "video",
    label: "Video generation",
    providers: [
      {
        id: "openai-sora",
        name: "OpenAI Sora",
        integration: "native",
        description: "Primary text-to-video engine for hero sequences.",
      },
      {
        id: "runway",
        name: "Runway",
        integration: "apikey",
        description: "Alternate video model for style variants.",
      },
      {
        id: "pika",
        name: "Pika",
        integration: "apikey",
        description: "Fast short-form iteration and cutdown support.",
      },
    ],
  },
  {
    id: "images",
    label: "Images and boards",
    providers: [
      {
        id: "openai-images",
        name: "OpenAI Images",
        integration: "native",
        description: "Concept stills, frame boards, and thumbnails.",
      },
      {
        id: "ideogram",
        name: "Ideogram",
        integration: "apikey",
        description: "Typography-rich poster and static ad comps.",
      },
      {
        id: "midjourney",
        name: "Midjourney",
        integration: "limited",
        description: "Optional visual style input when API access is available.",
      },
    ],
  },
  {
    id: "audio",
    label: "Music and sound",
    providers: [
      {
        id: "suno",
        name: "Suno",
        integration: "limited",
        description: "Music bed generation if API access is enabled.",
      },
      {
        id: "udio",
        name: "Udio",
        integration: "limited",
        description: "Alternative music generation slot.",
      },
      {
        id: "openai-audio",
        name: "OpenAI Audio",
        integration: "native",
        description: "Fallback stems, transitions, and prompt-driven FX.",
      },
    ],
  },
  {
    id: "voice",
    label: "Voice and avatar",
    providers: [
      {
        id: "openai-tts",
        name: "OpenAI TTS",
        integration: "native",
        description: "Voiceover draft generation and multilingual reads.",
      },
      {
        id: "elevenlabs",
        name: "ElevenLabs",
        integration: "apikey",
        description: "Voice cloning and advanced timbre control.",
      },
      {
        id: "heygen",
        name: "HeyGen",
        integration: "apikey",
        description: "Avatar presenter option for UGC style ads.",
      },
    ],
  },
  {
    id: "agent",
    label: "Agent orchestration",
    providers: [
      {
        id: "openai-responses",
        name: "OpenAI Responses + Agents",
        integration: "native",
        description: "Core planner and tool-calling orchestration layer.",
      },
      {
        id: "langgraph",
        name: "LangGraph",
        integration: "apikey",
        description: "Custom multi-step agent graph when needed.",
      },
      {
        id: "zapier",
        name: "Zapier",
        integration: "apikey",
        description: "Route outputs to CRM, sheets, and notifications.",
      },
    ],
  },
];

const checkoutPlans = [
  {
    id: "creator",
    name: "Creator",
    price: "$49/mo",
    summary: "Solo workflows and limited credits.",
    features: ["3 active campaigns", "30 AI generations / month", "Single workspace"],
  },
  {
    id: "studio",
    name: "Studio",
    price: "$149/mo",
    summary: "Full advert pipeline for teams.",
    features: [
      "Unlimited campaigns",
      "Provider API routing",
      "Priority generation queue",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: "Custom",
    summary: "White-label and managed deployment.",
    features: ["Multi-client dashboards", "Dedicated onboarding", "Custom integrations"],
  },
];

const integrationLabels = {
  native: "Native",
  apikey: "Bring API key",
  limited: "Check API access",
};

const initialBrief = {
  campaignName: "Spring Launch Promo",
  brand: "BMX VHS Media",
  offer: "AI-powered advert workflow",
  audience: "Indie brands and creators",
  goal: "Sales",
  duration: "30s",
  budget: "Growth ($1k-$5k)",
  channels: ["TikTok", "Instagram Reels"],
  tones: ["Bold", "Retro"],
};

const initialProviders = providerTracks.reduce((accumulator, track) => {
  accumulator[track.id] = track.providers[0].id;
  return accumulator;
}, {});

function toggleChoice(list, item) {
  if (list.includes(item)) {
    if (list.length === 1) {
      return list;
    }

    return list.filter((entry) => entry !== item);
  }

  return [...list, item];
}

function pickProviderName(trackId, providerId) {
  const track = providerTracks.find((entry) => entry.id === trackId);
  const selected = track?.providers.find((provider) => provider.id === providerId);
  return selected ? selected.name : "Provider pending";
}

function buildAdvertPlan(brief, providers) {
  const campaignName = brief.campaignName || "Untitled campaign";
  const brand = brief.brand || "Your brand";
  const offer = brief.offer || "your offer";
  const audience = brief.audience || "your audience";
  const goal = brief.goal || "Awareness";
  const duration = brief.duration || "30s";
  const channel = brief.channels[0] || "Instagram Reels";
  const tones = brief.tones.join(", ").toLowerCase();

  const videoProvider = pickProviderName("video", providers.video);
  const imageProvider = pickProviderName("images", providers.images);
  const audioProvider = pickProviderName("audio", providers.audio);
  const voiceProvider = pickProviderName("voice", providers.voice);
  const agentProvider = pickProviderName("agent", providers.agent);

  return {
    scriptHook: `${brand} introduces ${offer}. In ${duration}, lead with ${tones} energy and push ${goal.toLowerCase()} for ${audience}.`,
    cta: `CTA: Start your campaign on ${channel} and drive traffic to the booking page.`,
    steps: [
      `Agent planner (${agentProvider}) builds shot list + prompt packs.`,
      `Generate hero video sequence with ${videoProvider}.`,
      `Create storyboard stills and thumbnails in ${imageProvider}.`,
      `Generate voice draft in ${voiceProvider} and music bed in ${audioProvider}.`,
      "Assemble final cuts: 9:16, 1:1, 16:9 exports + caption variants.",
    ],
    deliverables: [
      `${campaignName} master timeline`,
      `${duration} hero cut + 15s cutdown`,
      "5 hooks + 3 CTA variants",
      "Caption pack + upload checklist",
      "Brand-safe music and voice stems",
    ],
    providers: [videoProvider, imageProvider, audioProvider, voiceProvider, agentProvider],
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

export default function StudioWorkbench() {
  const [brief, setBrief] = useState(initialBrief);
  const [providers, setProviders] = useState(initialProviders);
  const [selectedPlan, setSelectedPlan] = useState("studio");
  const [generatedAt, setGeneratedAt] = useState(null);
  const [checkoutNote, setCheckoutNote] = useState("");

  const plan = useMemo(() => buildAdvertPlan(brief, providers), [brief, providers]);

  const handleBriefChange = (event) => {
    const { name, value } = event.target;
    setBrief((current) => ({ ...current, [name]: value }));
  };

  const handleProviderSelect = (trackId, providerId) => {
    setProviders((current) => ({ ...current, [trackId]: providerId }));
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
      `Plan selected: ${planSelection.name}. Replace this button with your Stripe checkout session endpoint.`,
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
              Configure a brief, choose providers, and generate an end-to-end advert production plan from one place.
            </p>
          </div>
          <div className="studio-entry-actions">
            <Link className="ghost-button" to="/studio">
              Back to demo page
            </Link>
            <button className="primary-button" type="button" onClick={handleGenerate}>
              Generate advert plan
            </button>
          </div>
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
              <h3>2. Provider picker</h3>
              <span className="chip">OpenAI-first + optional APIs</span>
            </div>
            <div className="provider-stack">
              {providerTracks.map((track) => (
                <div className="provider-track" key={track.id}>
                  <p className="provider-track-title">{track.label}</p>
                  <div className="provider-grid">
                    {track.providers.map((provider) => {
                      const selected = providers[track.id] === provider.id;
                      return (
                        <button
                          className={selected ? "provider-option active" : "provider-option"}
                          key={provider.id}
                          onClick={() => handleProviderSelect(track.id, provider.id)}
                          type="button"
                        >
                          <span className="provider-name">{provider.name}</span>
                          <span className={`provider-status ${provider.integration}`}>
                            {integrationLabels[provider.integration]}
                          </span>
                          <span className="provider-copy">{provider.description}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card workbench-card workbench-output">
            <div className="workbench-header">
              <h3>3. Agent output</h3>
              <span className="chip">Generated {formatGeneratedAt(generatedAt)}</span>
            </div>
            <p className="muted">
              This output is generated from the brief and selected providers. Connect real APIs to execute each step.
            </p>
            <div className="output-block">
              <p className="output-label">Script hook</p>
              <p>{plan.scriptHook}</p>
              <p className="output-label">Call to action</p>
              <p>{plan.cta}</p>
            </div>
            <div className="output-block">
              <p className="output-label">Production sequence</p>
              <ul className="output-list">
                {plan.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="output-block">
              <p className="output-label">Export pack</p>
              <div className="chip-grid">
                {plan.deliverables.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="muted">
              Active providers: {plan.providers.join(" | ")}
            </p>
          </article>

          <article className="card workbench-card checkout-card">
            <div className="workbench-header">
              <h3>4. Payment gate</h3>
              <span className="chip">Demo checkout</span>
            </div>
            <p className="muted">
              The page below is the monetization step after the demo workflow. Pick a plan and connect Stripe checkout.
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
