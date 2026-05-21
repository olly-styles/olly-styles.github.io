import { EntryRow } from "@/components/entry-row";
import { SectionHeading } from "@/components/section-heading";
import { publications, work } from "@/lib/content";

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-[620px] px-7 pb-32">
      <h1 className="text-[22px] font-semibold tracking-tight">work</h1>
      <p className="mt-1 font-mono text-xs text-muted">history of doing things</p>

      <SectionHeading>experience</SectionHeading>
      {work.map((w) => (
        <EntryRow
          key={w.title}
          meta={`${w.start} → ${w.end}`}
          title={w.title}
          description={w.description}
          href={w.href}
        />
      ))}

      <SectionHeading>publications</SectionHeading>
      {publications.map((p) => (
        <EntryRow
          key={p.title}
          meta={`${p.venue} ${p.year}`}
          title={p.title}
          description={p.note ?? p.authors}
          href={p.href}
        />
      ))}
    </main>
  );
}
