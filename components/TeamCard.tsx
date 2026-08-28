import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { initialsOf, photoFor, type Person } from "@/content/team";
import styles from "./cards.module.css";

/**
 * A researcher card: portrait, name, affiliation. Nothing more — the bios
 * run several hundred words each, and eight of them side by side read as a
 * wall rather than as people. The full profile lives on its own page and
 * the whole card is the way in. Anyone without a photo gets an initials
 * panel on their brand tag colour, which is a valid state, not a gap.
 */
export function TeamCard({ person }: { person: Person }) {
  const photo = photoFor(person.id);
  return (
    <article className={styles.teamCard}>
      {photo ? (
        <img
          className={styles.teamPhoto}
          src={photo}
          alt=""
          width={800}
          height={800}
          loading="lazy"
        />
      ) : (
        <span
          className={`${styles.teamPhoto} ${styles.teamPhotoFallback}`}
          style={{
            background: `var(--ael-tag-${person.hue}-bg)`,
            color: `var(--ael-tag-${person.hue})`,
          }}
          aria-hidden="true"
        >
          {initialsOf(person.name)}
        </span>
      )}

      <div className={styles.teamBody}>
        <h3 className={styles.teamName}>
          <Link href={`/team/${person.id}/`}>
            {person.name}
            <ArrowRight
              size={18}
              className={styles.teamGo}
              aria-hidden="true"
            />
          </Link>
        </h3>
        {person.affiliation ? (
          <p className={styles.teamAff}>{person.affiliation}</p>
        ) : (
          <p className={styles.teamAff}>{person.role}</p>
        )}
      </div>
    </article>
  );
}
