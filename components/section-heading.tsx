export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-mono text-xs uppercase tracking-wide text-muted">
      <span className="text-accent">— </span>
      {children}
    </h2>
  );
}
