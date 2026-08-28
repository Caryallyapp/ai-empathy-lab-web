import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/content/publications";
import styles from "./cards.module.css";

/** One publication row in the shared list-row grammar. The empty spans hold
 *  the venue and action tracks open on rows that have neither, so every row's
 *  rails land on the same x. */
export function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className={styles.pubItem}>
      <p className={styles.pubItemMeta}>{publication.year ?? ""}</p>
      <div className={styles.pubItemMain}>
        <p className={styles.pubItemTitle}>
          {publication.href ? (
            <a href={publication.href} target="_blank" rel="noopener noreferrer">
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </p>
        <p className={styles.pubItemAuthors}>{publication.authors}</p>
      </div>
      {publication.venue ? (
        <p className={styles.pubItemVenue}>
          <em>{publication.venue}</em>
          {publication.detail ? `, ${publication.detail}` : null}
        </p>
      ) : (
        <span />
      )}
      {publication.href ? (
        <ArrowUpRight size={20} className={styles.pubItemGo} aria-hidden="true" />
      ) : (
        <span />
      )}
    </article>
  );
}
