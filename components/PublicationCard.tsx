import type { Publication } from "@/content/publications";
import styles from "./cards.module.css";

/** Working-paper card (home + publications page). */
export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className={styles.pubCard}>
      <div className={styles.pubKind}>
        <span className="chip chip-accent">Working paper</span>
        <span className={styles.pubVenue}>SSRN</span>
      </div>
      <h3 className={styles.pubTitle}>
        {publication.href ? (
          <a href={publication.href} target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>
      <p className={styles.pubAuthors}>{publication.authors}</p>
    </article>
  );
}
