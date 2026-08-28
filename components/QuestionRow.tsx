import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ResearchProject } from "@/content/research";
import styles from "./cards.module.css";

/**
 * The site's signature element: each research programme presented as the
 * question it answers. Three layers only — programme name, question,
 * summary; the question leads.
 */
export function QuestionList({ projects }: { projects: ResearchProject[] }) {
  return (
    <div className={styles.qList}>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/research/${project.slug}/`}
          className={styles.qRow}
        >
          <span className={styles.qName}>{project.name}</span>
          <span className={styles.qQuestion}>{project.question}</span>
          <span className={styles.qSummary}>{project.summary}</span>
          <ArrowRight size={20} className={styles.qArrow} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
