import Link from "next/link";
import { RESEARCH_PROJECTS } from "@/content/research";
import { SITE } from "@/content/site";
import { LinkedInIcon } from "./LinkedInIcon";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.card}>
          <div className={styles.cols}>
            <nav className={styles.col} aria-label="Research">
              <p className={styles.colTitle}>Research</p>
              <Link href="/research/" className={styles.colLink}>Overview</Link>
              {RESEARCH_PROJECTS.map((project) => (
                <Link
                  key={project.slug}
                  href={`/research/${project.slug}/`}
                  className={styles.colLink}
                >
                  {project.name}
                </Link>
              ))}
            </nav>

            <nav className={styles.col} aria-label="Lab">
              <p className={styles.colTitle}>Lab</p>
              <Link href="/about/" className={styles.colLink}>About</Link>
              <Link href="/team/" className={styles.colLink}>Team</Link>
              <Link href="/publications/" className={styles.colLink}>Publications</Link>
              <Link href="/news/" className={styles.colLink}>News</Link>
              <Link href="/resources/" className={styles.colLink}>Resources</Link>
            </nav>

            <nav className={styles.col} aria-label="Connect">
              <p className={styles.colTitle}>Connect</p>
              <Link href="/ai-empathy-index/" className={styles.colLink}>AI Empathy Index</Link>
              <Link href="/symposium/" className={styles.colLink}>Symposium</Link>
              <a
                href={SITE.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.colLink}
              >
                Platform
              </a>
              <a href={`mailto:${SITE.email}`} className={styles.colLink}>
                Contact
              </a>
            </nav>
          </div>

          <div className={styles.bottom}>
            <p>© {year} AI Empathy Lab. All rights reserved.</p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="AI Empathy Lab on LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* The wordmark at architectural scale on the page ground below the
          card — spanning exactly the card's width, edge to edge. Arch feet
          on the text baseline, letters complete. */}
      <div className={`shell ${styles.wmShell}`} aria-hidden="true">
        <div className={styles.watermark}>
        <svg viewBox="0 0 101 46" className={styles.watermarkMark} focusable="false">
          <path className={styles.wmBack} d="M 11 46 A 44 44 0 0 1 99 46 L 81 46 A 26 26 0 0 0 29 46 Z" />
          <path className={styles.wmMid} d="M 2 46 A 33 33 0 0 1 68 46 L 53.5 46 A 18.5 18.5 0 0 0 16.5 46 Z" />
          <path className={styles.wmFront} d="M 24.5 46 A 22.5 22.5 0 0 1 69.5 46 L 58 46 A 11 11 0 0 0 36 46 Z" />
        </svg>
          <span className={styles.watermarkText}>ai empathy lab</span>
        </div>
      </div>
    </footer>
  );
}
