import { EntryRow } from "@/components/entry-row";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcons } from "@/components/social-icons";
import { beliefs, posts, profile, publications, work } from "@/lib/content";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Previously cofounded{" "}
        <a href={profile.links.atlas} className="ink-link">
          Atlas AI
        </a>
        , a computer vision startup. Now building at{" "}
        <a href={profile.links.artanis} className="ink-link">
          Artanis
        </a>
        . Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <SocialIcons />

      <SectionHeading>work</SectionHeading>
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

      <SectionHeading>things I believe</SectionHeading>
      <ul>
        {beliefs.map((b, i) => (
          <li
            key={b}
            className="grid grid-cols-[110px_1fr] items-baseline gap-6 border-b border-line py-3 last:border-b-0"
          >
            <div className="pt-px font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</div>
            <div className="text-[15px]">{b}</div>
          </li>
        ))}
      </ul>

      <SectionHeading>writing</SectionHeading>
      {posts.map((p) => (
        <EntryRow key={p.slug} meta={p.date} title={p.title} />
      ))}
    </main>
  );
}
