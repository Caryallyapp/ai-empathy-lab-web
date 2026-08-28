/**
 * Remounts on every navigation, so each page arrives with the same
 * fade-rise the scroll reveals use — one motion language site-wide.
 * The header and footer live in layout.tsx and stay put.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
