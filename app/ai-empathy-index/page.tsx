import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "AI Empathy Index | Benchmarking Empathic AI",
  description:
    "Explore a research-grade benchmark of AI assistants and companions across perspective-taking, emotional resonance, and prosocial motivation.",
  path: "/ai-empathy-index/",
});

const DIMENSIONS = [
  {
    name: "Perspective-taking",
    body: "Does the assistant understand the person's situation from their side of the conversation?",
  },
  {
    name: "Emotional resonance",
    body: "Does it respond to feeling with feeling, at the right moment and in the right measure?",
  },
  {
    name: "Prosocial motivation",
    body: "Does it act in the person's interest rather than the conversation's flow?",
  },
];

export default function IndexPage() {
  return (
    <div className="container">
      {/* Opening on the page seam: identity left, the document's own
          description right — no dead band between question and answer. */}
      <header className="page-hero">
        <span className="chip chip-soon">Coming soon</span>
        <div className="hero-split">
          <div className="hero-split-left">
            <h1 className="t-h1">The AI Empathy Index</h1>
            <p className={styles.question}>
              How empathic are today&apos;s AI assistants, really?
            </p>
          </div>
          <div className="prose">
          <p className="t-lead">
            The AI Empathy Index will be a recurring, research-grade benchmark
            measuring the empathic capabilities of leading AI voice assistants
            and companions across the core dimensions of empathy:
            perspective-taking, emotional resonance, and prosocial motivation.
          </p>
          <p>
            Designed for researchers, developers, and policymakers alike, the
            Index will track how machine empathy evolves, and what that
            evolution means for the people who rely on it.
          </p>
          </div>
        </div>
      </header>

      <section className="band" data-reveal>
        <div className="section-head">
          <div>
            <h2 className="t-h2">The three dimensions of empathy</h2>
          </div>
        </div>
        <div className={styles.dimGrid}>
          {DIMENSIONS.map((dimension) => (
            <div key={dimension.name} className={styles.dimCard}>
              <h3 className="t-h3">{dimension.name}</h3>
              <p className={styles.dimBody}>{dimension.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`band ${styles.cta}`} data-reveal>
        <h2 className="t-h2">Be there at launch</h2>
        <a
          href={`mailto:${SITE.email}?subject=AI%20Empathy%20Index%3A%20notify%20me%20at%20launch`}
          className="btn btn-primary"
        >
          Get notified
        </a>
      </section>
    </div>
  );
}
