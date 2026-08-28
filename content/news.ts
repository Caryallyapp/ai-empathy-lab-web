/**
 * ⚠️ SEED CONTENT. These entries exist so the feed has a real design to
 * judge; the papers and announcements are real, the MONTH-LEVEL DATES ARE
 * NOT CONFIRMED. Replace dates (and prune entries) before launch.
 */
export type NewsTag = "Working paper" | "Publication" | "Announcement" | "Lab";

export interface NewsItem {
  id: string;
  /** ISO-ish year-month; rendered as "Aug 2026". */
  date: string;
  title: string;
  body?: string;
  href?: string;
  external?: boolean;
  tag: NewsTag;
}

export const NEWS: NewsItem[] = [
  {
    id: "site-live",
    date: "2026-08",
    title: "The AI Empathy Lab's new home on the web",
    body: "aiempathylab.com launches with our research programme, working papers, and the team behind them.",
    tag: "Lab",
  },
  {
    id: "wp-right-time",
    date: "2026-07",
    title:
      "New working paper: The Right Time for AI Empathy in Voice Commerce",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6158606",
    external: true,
    tag: "Working paper",
  },
  {
    id: "index-announce",
    date: "2026-06",
    title: "AI Empathy Index announced",
    body: "A recurring, research-grade benchmark of empathic capability in leading AI assistants and companions.",
    href: "/ai-empathy-index/",
    tag: "Announcement",
  },
  {
    id: "wp-voice-of-emotion",
    date: "2026-05",
    title: "New working paper: The Voice of Emotion",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5909843",
    external: true,
    tag: "Working paper",
  },
  {
    id: "springer-chapter",
    date: "2026-04",
    title:
      "Book chapter published: AI with a Conscience",
    body: "Published by Springer Nature in the International Conference on Sustainability and Innovation Processes and Systems proceedings.",
    tag: "Publication",
  },
  {
    id: "wp-no-hard-feelings",
    date: "2026-03",
    title: "New working paper: No Hard Feelings",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5367747",
    external: true,
    tag: "Working paper",
  },
];

export function formatNewsDate(date: string): string {
  const [year, month] = date.split("-");
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const index = Number(month) - 1;
  return names[index] !== undefined ? `${names[index]} ${year}` : year;
}
