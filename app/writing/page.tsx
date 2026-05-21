import { EntryRow } from "@/components/entry-row";
import { posts } from "@/lib/content";

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-[620px] px-7 pb-32">
      <h1 className="text-[22px] font-semibold tracking-tight">writing</h1>
      <p className="mt-1 font-mono text-xs text-muted">notes, essays, half-thoughts</p>

      <div className="mt-12">
        {posts.map((p) => (
          <EntryRow key={p.slug} meta={p.date} title={p.title} />
        ))}
      </div>
    </main>
  );
}
