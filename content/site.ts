/** Global site facts. Everything participant-visible on every page reads from here. */
export const SITE = {
  name: "AI Empathy Lab",
  /* The canonical host is www: the apex 308-redirects to it in Vercel, so
     canonicals, og:url, the sitemap and robots.txt must all name the URL
     that actually serves, not the one that bounces. */
  url: "https://www.aiempathylab.com",
  platformUrl: "https://app.aiempathylab.com",
  /**
   * As a sentence (prose, OG card) the tagline keeps its period; in display
   * settings (the hero H1) it drops it — headlines are labels, not
   * sentences, per AP and the major style guides.
   */
  tagline: "Making sense of machines that make sense of us.",
  /** Home meta description — verbatim from the SEO plan. */
  description:
    "AI Empathy Lab advances research on human interactions with empathic AI assistants, agents, and companions for consumer psychology.",
  /** Hero support line — verbatim from the content document. */
  heroLede:
    "We study the effects of empathic AI on human judgment, decision-making, and well-being through rigorous experiments with AI voice agents.",
  /** The lab's contact address, confirmed by Danylo 2026-08-28. */
  email: "info@caryally.com",
  linkedin: "https://www.linkedin.com/company/aiempathy/",
  /** Footer support & collaborations paragraph — verbatim from the content document. */
  support:
    "The Lab's research has been supported by the UZH Foundation (University of Zurich) and the MTEC Foundation (ETH Zurich), and enriched by a technology collaboration with Hume AI, whose empathic voice technologies enable our real-time emotion-aware experimental designs.",
  collaborate:
    "We welcome collaborations with researchers, companies, and institutions interested in the science of empathic AI, from joint experiments and data partnerships to speaking engagements and policy consultations.",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Navbar links. Every SECTION of the site is here — six items, inside the
 * 5-to-7 convention — because a page whose only global path is the footer
 * is findable only by the lost (the footer is a safety net, not a route;
 * /resources/ was contextually orphaned and even Danylo could not find
 * pages). The two coming-soon initiatives (Index, Symposium) stay out
 * deliberately: they are linked from the home cards, the news feed, and
 * the footer, and they earn a slot when they launch, not before.
 */
export const NAV: NavItem[] = [
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Team", href: "/team/" },
  { label: "News", href: "/news/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
];
