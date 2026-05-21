import { EntryRow } from "@/components/entry-row";
import { PublicationRow } from "@/components/publication-row";
import { SectionHeading } from "@/components/section-heading";
import { education, publications, visiting, work } from "@/lib/content";

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

      <SectionHeading>education</SectionHeading>
      {education.map((e) => (
        <EntryRow
          key={e.degree + e.institution}
          meta={`${e.start} → ${e.end}`}
          title={e.degree}
          description={e.institution}
        />
      ))}

      <SectionHeading>visiting researcher</SectionHeading>
      {visiting.map((v) => (
        <EntryRow
          key={v.institution}
          meta={`${v.start.slice(-4)} → ${v.end.slice(-4)}`}
          title={v.institution}
          description={`with ${v.supervisor}`}
        />
      ))}

      <SectionHeading>publications</SectionHeading>
      {publications.map((p) => (
        <PublicationRow
          key={`${p.title}-${p.venue}-${p.year}`}
          iconKey={p.iconKey}
          title={p.title}
          authors={p.authors}
          note={p.note}
          venue={p.venue}
          year={p.year}
          href={p.href}
        />
      ))}
    </main>
  );
}
