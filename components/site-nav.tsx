import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/writing", label: "writing" },
];

export function SiteNav() {
  return (
    <nav className="mx-auto mb-12 flex max-w-[620px] items-center justify-between px-7 pt-10 font-mono text-xs">
      <Link href="/" className="text-muted transition-colors hover:text-accent">
        olly-styles
      </Link>
      <div className="flex gap-5 text-muted">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="transition-colors hover:text-accent">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
