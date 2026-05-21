import { subjects, variantIcon, type VariantKey } from "@/components/icon-variants";

const variants: VariantKey[] = ["a", "b", "c", "d", "e"];

export default function IconsPage() {
  return (
    <main className="mx-auto max-w-[820px] px-7 pb-32">
      <h1 className="text-[22px] font-semibold tracking-tight">icon variants</h1>
      <p className="mt-1 font-mono text-xs text-muted">five options per subject — pick a letter</p>

      <div className="mt-12 space-y-12">
        {subjects.map((s) => (
          <section key={s.key}>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
              <span className="text-accent">— </span>
              {s.label}
            </h2>
            <div className="grid grid-cols-5 gap-3">
              {variants.map((v) => (
                <div key={v} className="flex flex-col items-center gap-2 rounded-[4px] border border-line bg-bg p-3">
                  <div className="flex h-[54px] w-[80px] items-center justify-center">{variantIcon(s.key, v)}</div>
                  <div className="font-mono text-[11px] text-muted">
                    {s.key}.{v}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
