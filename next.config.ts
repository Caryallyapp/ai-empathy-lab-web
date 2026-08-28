import type { NextConfig } from "next";

/**
 * The site is a full static export: `next build` writes plain HTML/CSS/JS to
 * `out/`, deployable on any static host. `trailingSlash` matches the URL
 * scheme fixed in the SEO plan (/about/, /research/…/), so every route
 * becomes a real directory with an index.html.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
