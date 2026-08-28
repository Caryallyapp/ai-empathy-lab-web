import styles from "./partners.module.css";

/**
 * The lab's funders and technology partner, one per cell. Identical boxes
 * are what make three logos of very different proportions read as one set
 * rather than a ragged row; each keeps its own optical size inside. Grey at
 * rest for cohesion, true colours on hover.
 *
 * Shared by the home page's closing acknowledgment and the About page's
 * partners section, so the two can never drift apart.
 */
const PARTNERS = [
  { src: "/partners/uzh-foundation.svg", alt: "UZH Foundation", height: 52 },
  {
    src: "/partners/eth-zurich.svg",
    alt: "MTEC Foundation (ETH Zurich)",
    height: 34,
  },
  { src: "/partners/hume.png", alt: "Hume AI", height: 38 },
];

export function PartnerLogos() {
  return (
    <ul className={styles.logos}>
      {PARTNERS.map((partner) => (
        <li key={partner.alt}>
          <img
            src={partner.src}
            alt={partner.alt}
            style={{ height: partner.height }}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}
