import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { formatNewsDate, type NewsItem } from "@/content/news";
import styles from "./cards.module.css";

function tagClass(tag: NewsItem["tag"]): string {
  switch (tag) {
    case "Working paper":
      return "chip chip-accent";
    case "Publication":
      return "chip chip-teal";
    case "Announcement":
      return "chip chip-iris";
    case "Lab":
      return "chip chip-neutral";
  }
}

/**
 * News rows: date on the shared meta rail, title with its optional note
 * stacked in ONE cell (a column that is sometimes empty reads as broken,
 * so optional content never gets a rail of its own), tag on the row's
 * first baseline at the right edge.
 */
export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <article key={item.id} className={styles.newsItem}>
          <p className={styles.newsDate}>{formatNewsDate(item.date)}</p>
          <div className={styles.newsMain}>
            <p className={styles.newsTitle}>
              {item.href ? (
                item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                    <ArrowUpRight size={14} className={styles.newsExt} aria-hidden="true" />
                  </a>
                ) : (
                  <Link href={item.href}>{item.title}</Link>
                )
              ) : (
                item.title
              )}
            </p>
            {item.body ? <p className={styles.newsBody}>{item.body}</p> : null}
          </div>
          <span className={tagClass(item.tag)}>{item.tag}</span>
        </article>
      ))}
    </div>
  );
}
