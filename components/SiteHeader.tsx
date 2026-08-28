"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/content/site";
import { Mark } from "./Mark";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const rawPathname = usePathname();
  const pathname = rawPathname.endsWith("/") ? rawPathname : `${rawPathname}/`;
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Hide on scroll down, reappear on scroll up. Never hide near the top
  // or while the mobile menu is open.
  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      if (y < 90) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true);
      } else if (y < lastY - 4) {
        setHidden(false);
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string): boolean {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <div
      className={`${styles.zone} ${hidden && !open ? styles.zoneHidden : ""}`}
    >
      <div className={`shell ${styles.zoneInner}`}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand} aria-label="AI Empathy Lab home">
            <Mark size={22} />
            <span className={styles.wordmark}>ai empathy lab</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.side}>
            <a
              className={`btn btn-primary ${styles.cta}`}
              href={SITE.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Platform
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              type="button"
              className={styles.menuBtn}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="visually-hidden">
                {open ? "Close menu" : "Open menu"}
              </span>
              {open ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav id="mobile-nav" className={styles.mobileNav} aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            {/* The same indigo pill it is on desktop — the one standing
                CTA keeps its identity inside the menu. */}
            <a
              className={`btn btn-primary ${styles.mobileCta}`}
              href={SITE.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Platform
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
