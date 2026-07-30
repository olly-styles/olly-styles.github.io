import type { Metadata } from "next";

import { EntryRow } from "@/components/entry-row";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays on AI, alignment, and startups.",
};

export default function Writing() {
  return (
    <main className="mx-auto max-w-[620px] px-7 pb-32">
      <SectionHeading>writing</SectionHeading>
      {posts.map((p) => (
        <EntryRow key={p.href} iconKey={p.iconKey} meta={p.date} title={p.title} href={p.href} />
      ))}
    </main>
  );
}
