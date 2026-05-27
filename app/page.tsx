import { EntryRow } from "@/components/entry-row";
import { PublicationRow } from "@/components/publication-row";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcons } from "@/components/social-icons";
import { beliefs, education, posts, profile, publications, work } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-[620px] px-7 pb-32">
      <h1 className="text-[22px] font-semibold tracking-tight">{profile.name}</h1>
      <p className="mt-1 font-mono text-xs text-muted">
        {profile.tagline.map((part, i) => (
          <span key={part}>
            {part}
            {i < profile.tagline.length - 1 ? <span className="text-accent">.</span> : null}
          </span>
        ))}
      </p>
      <p className="my-8 text-[15px] leading-[1.65]">
        Machine Learning PhD and startup founder focused on data and evals. Published 5 computer vision papers during my
        PhD at Warwick, including a journal in PAMI and a best student paper at CVPR-W. Cofounded{" "}
        <a href={profile.links.atlas} className="ink-link">
          Atlas AI
        </a>
        , a computer vision startup that ran four years. Now building an AI alignment platform at{" "}
        <a href={profile.links.artanis} className="ink-link">
          Artanis
        </a>
        .
      </p>
      <SocialIcons />

      <SectionHeading id="work">work</SectionHeading>
      {work.map((w) => (
        <EntryRow
          key={w.title}
          iconKey={w.iconKey}
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
          iconKey={e.iconKey}
          meta={`${e.start} → ${e.end}`}
          title={e.degree}
          description={e.institution}
          href={e.href}
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

      <SectionHeading id="writing">writing</SectionHeading>
      {posts.map((p) => (
        <EntryRow key={p.href} iconKey={p.iconKey} meta={p.date} title={p.title} href={p.href} />
      ))}

      <SectionHeading>things I believe</SectionHeading>
      <ul>
        {beliefs.map((b) => (
          <li key={b} className="border-b border-line py-3 text-[15px] last:border-b-0">
            {b}
          </li>
        ))}
      </ul>
    </main>
  );
}
