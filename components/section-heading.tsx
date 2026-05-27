export function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-12 mb-4 scroll-mt-20 font-mono text-xs uppercase tracking-wide text-muted">
      <span className="text-accent">— </span>
      {children}
    </h2>
  );
}
