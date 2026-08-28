/**
 * The publication library — currently hand-maintained, in the order the lab
 * curated it. The page components read only this module, so a generated
 * source (Zotero, ORCID) can replace it later without touching any page.
 * Links come from the lab's own content document.
 */
export interface Publication {
  id: string;
  authors: string;
  year?: number;
  title: string;
  venue?: string;
  /** Volume / issue / pages, shown after the venue. */
  detail?: string;
  href?: string;
  kind: "working" | "published";
  /** Research programme slugs this paper belongs to (for related lists). */
  projects?: string[];
}

/** Working papers — the "Latest on AI empathy" set. */
export const WORKING_PAPERS: Publication[] = [
  {
    id: "right-time",
    authors: "Mari, A., Uysal, D. E., Brooks, J., & Alabed, A.",
    title:
      "The Right Time for AI Empathy in Voice Commerce: Attribution Processes and Product Category Shape Decision Satisfaction",
    venue: "SSRN working paper",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6158606",
    kind: "working",
    projects: ["ai-empathy-agentic-commerce"],
  },
  {
    id: "genai-sustainable",
    authors: "Mari, A., Uysal, D. E., Alabed, A., Efthymiou, F., & Brooks, J.",
    title:
      "Generative AI-Enabled Empathy and Persuasion in Voice Assistants: Impact on Sustainable Consumer Choice",
    venue: "SSRN working paper",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5420076",
    kind: "working",
    projects: ["ai-empathy-sustainable-consumption"],
  },
  {
    id: "no-hard-feelings",
    authors: "Efthymiou, F., Mari, A., Uysal, E., & Brooks, J.",
    title:
      "No Hard Feelings: The Protective Power of AI Empathy During Service Interaction Failures",
    venue: "SSRN working paper",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5367747",
    kind: "working",
    projects: ["ai-empathy-customer-service"],
  },
  {
    id: "voice-of-emotion",
    authors: "Uysal, E., Alavi, S., Brooks, J., Mari, A., & Efthymiou, F.",
    title:
      "The Voice of Emotion: Advancing Marketing Research Through Real-Time AI Emotion Measurements",
    venue: "SSRN working paper",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5909843",
    kind: "working",
    projects: ["ai-emotion-measurement"],
  },
];

/** Selected publications — the lab's curated order. */
export const SELECTED_PUBLICATIONS: Publication[] = [
  {
    id: "springer-2026",
    authors: "Mari, A., & Alabed, A.",
    year: 2026,
    title:
      "AI with a Conscience: Empathic Voice Assistants for Sustainable Shopping Decisions",
    venue:
      "International Conference on Sustainability and Innovation Processes and Systems, Springer Nature Switzerland",
    detail: "pp. 92–103",
    kind: "published",
    projects: ["ai-empathy-sustainable-consumption"],
  },
  {
    id: "ejm-2024",
    authors: "Alabed, A., Javornik, A., Gregory-Smith, D., & Casey, R.",
    year: 2024,
    title:
      "More than just a chat: A taxonomy of consumers' relationships with conversational AI agents and their well-being implications",
    venue: "European Journal of Marketing",
    detail: "58(2), 373–409",
    href: "https://research-information.bris.ac.uk/ws/portalfiles/portal/403088817/EJM_More_than_just_a_chat.pdf",
    kind: "published",
    projects: ["ai-companions-healthy-aging"],
  },
  {
    id: "jbr-2024",
    authors: "Mari, A., Mandelli, A., & Algesheimer, R.",
    year: 2024,
    title:
      "Empathic voice assistants: Enhancing consumer responses in voice commerce",
    venue: "Journal of Business Research",
    detail: "175, 114566",
    href: "https://doi.org/10.1016/j.jbusres.2024.114566",
    kind: "published",
    projects: ["ai-empathy-agentic-commerce"],
  },
  {
    id: "jim-2024",
    authors: "Efthymiou, F., Hildebrand, C., de Bellis, E., & Hampton, W. H.",
    year: 2024,
    title:
      "The power of AI-generated voices: How digital vocal tract length shapes product congruency and ad performance",
    venue: "Journal of Interactive Marketing",
    detail: "59(2), 117–134",
    href: "https://doi.org/10.1177/10949968231194905",
    kind: "published",
  },
  {
    id: "aim-2023",
    authors: "Uysal, E., Alavi, S., & Bezençon, V.",
    year: 2023,
    title:
      "Anthropomorphism in Artificial Intelligence: A review of empirical work across domains and insights for future research",
    venue: "Artificial Intelligence in Marketing (Review of Marketing Research)",
    detail: "273–308",
    href: "https://www.emerald.com/insight/content/doi/10.1108/S1548-643520230000020015/full/html",
    kind: "published",
  },
  {
    id: "nathb-2023",
    authors:
      "Brooks, J. A., Tzirakis, P., Baird, A., Kim, L., Opara, M., Fang, X., … & Cowen, A. S.",
    year: 2023,
    title:
      "Deep learning reveals what vocal bursts express in different cultures",
    venue: "Nature Human Behaviour",
    detail: "7(2), 240–250",
    href: "https://www.researchgate.net/profile/Dacher-Keltner/publication/366646906_Deep_learning_reveals_what_vocal_bursts_express_in_different_cultures/links/678e84e775d4ab477e517543/Deep-learning-reveals-what-vocal-bursts-express-in-different-cultures.pdf",
    kind: "published",
    projects: ["ai-emotion-measurement"],
  },
  {
    id: "ieee-2023",
    authors: "Efthymiou, F., & Hildebrand, C.",
    year: 2023,
    title:
      "Empathy by Design: The Influence of Trembling AI Voices on Prosocial Behavior",
    venue: "IEEE Transactions on Affective Computing",
    href: "https://www.computer.org/csdl/journal/ta/2024/03/10316625/1S4z2mYuEGA",
    kind: "published",
  },
  {
    id: "cdps-2023",
    authors: "Keltner, D., Brooks, J. A., & Cowen, A.",
    year: 2023,
    title: "Semantic space theory: Data-driven insights into basic emotions",
    venue: "Current Directions in Psychological Science",
    detail: "32(3), 242–249",
    href: "https://www.craiganderson.org/wp-content/uploads/caa/Classes/Readings/23Keltner-BasicEmotions.pdf",
    kind: "published",
    projects: ["ai-emotion-measurement"],
  },
  {
    id: "jams-2022",
    authors: "Uysal, E., Alavi, S., & Bezençon, V.",
    year: 2022,
    title:
      "Trojan horse or useful helper? A relationship perspective on artificial intelligence assistants with humanlike features",
    venue: "Journal of the Academy of Marketing Science",
    detail: "50(6), 1153–1175",
    href: "https://link.springer.com/article/10.1007/s11747-022-00856-9",
    kind: "published",
    projects: ["ai-companions-healthy-aging"],
  },
  {
    id: "tfsc-2022",
    authors: "Alabed, A., Javornik, A., & Gregory-Smith, D.",
    year: 2022,
    title:
      "AI anthropomorphism and its effect on users' self-congruence and self–AI integration: A theoretical framework and research agenda",
    venue: "Technological Forecasting and Social Change",
    detail: "182, 121786",
    href: "https://www.researchgate.net/publication/363021779_AI_anthropomorphism_and_its_effect_on_users'_self-congruence_and_self-AI_integration_A_theoretical_framework_and_research_agenda",
    kind: "published",
  },
];

export const ALL_PUBLICATIONS: Publication[] = [
  ...WORKING_PAPERS,
  ...SELECTED_PUBLICATIONS,
];

export function publicationsForProject(slug: string): Publication[] {
  return ALL_PUBLICATIONS.filter((p) => p.projects?.includes(slug));
}
