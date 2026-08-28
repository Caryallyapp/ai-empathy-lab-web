import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "AI Empathy Symposium | Research, Ethics & Governance",
  description:
    "Join researchers, industry leaders, and policymakers examining the science, design, applications, ethics, and governance of empathic AI.",
  path: "/symposium/",
});

export default function SymposiumPage() {
  return (
    <div className="container">
      {/* Opening on the page seam: identity left, the document's own
          description right. */}
      <header className="page-hero">
        <span className="chip chip-soon">Coming soon</span>
        <div className="hero-split">
          <h1 className="t-h1">AI Empathy Symposium</h1>
          <div className="prose">
          <p className="t-lead">
            The AI Empathy Symposium will bring together researchers, industry
            leaders, and policymakers to examine the science, design, and
            governance of empathic AI.
          </p>
          <p>
            Expect rigorous research, live demonstrations of empathic voice
            agents, and honest conversations about where the line sits between
            caring technology and emotional manipulation.
          </p>
          <p className={styles.tba}>Details and dates to be announced.</p>
          </div>
        </div>
      </header>

      <section className={`band ${styles.cta}`} data-reveal>
        <h2 className="t-h2">Hear about it first</h2>
        <p className={styles.ctaBody}>
          Register your interest and we will write when dates are set.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=AI%20Empathy%20Symposium%3A%20keep%20me%20posted`}
          className="btn btn-primary"
        >
          Register interest
        </a>
      </section>
    </div>
  );
}
