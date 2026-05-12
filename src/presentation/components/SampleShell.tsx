import Link from "next/link";
import type { ReactNode } from "react";

type SampleShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  children: ReactNode;
};

const sampleLinks = [
  { href: "/samples/guides", label: "Guide Examples" },
  { href: "/samples/code-agent", label: "Code Agent" },
  { href: "/samples/ai-basic", label: "AI Agent Basic" },
];

export function SampleShell({
  eyebrow,
  title,
  description,
  note,
  children,
}: SampleShellProps) {
  return (
    <main className="seminar-page">
      <div className="seminar-shell">
        <nav className="sample-nav" aria-label="샘플 페이지">
          <Link className="brand-mark" href="/">
            Seminar Visual Lab
          </Link>
          <div className="sample-links">
            {sampleLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <header className="hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
          </div>
          {note ? <aside className="hero-note">{note}</aside> : null}
        </header>

        {children}
      </div>
    </main>
  );
}
