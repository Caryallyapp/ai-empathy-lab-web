import Link from "next/link";
import { Mark } from "@/components/Mark";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        minHeight: "55vh",
        paddingTop: "var(--ael-nav-clearance)",
        display: "grid",
        placeContent: "center",
        justifyItems: "center",
        gap: "1.25rem",
        textAlign: "center",
      }}
    >
      <Mark size={40} />
      <h1 className="t-h2">This page wandered off</h1>
      <p style={{ color: "var(--ael-text-secondary)" }}>
        The address does not match anything on the site.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to the start
      </Link>
    </div>
  );
}
