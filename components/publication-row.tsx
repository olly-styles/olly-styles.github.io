import { iconFor } from "@/components/icons";

type Props = {
  iconKey?: string;
  title: string;
  authors: string;
  note?: string;
  venue: string;
  year: string;
  href?: string;
};

export function PublicationRow({ iconKey, title, authors, note, venue, year, href }: Props) {
  const icon = iconFor(iconKey);
  const inner = (
    <div className="flex items-start gap-4 border-b border-line py-3 last:border-b-0">
      <div className="flex h-[54px] w-[80px] flex-shrink-0 items-center justify-center">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <div
            className={`text-[15px] font-medium leading-snug ${href ? "transition-colors group-hover:text-accent" : ""}`}
          >
            {title}
          </div>
          <div
            className={`whitespace-nowrap font-mono text-xs text-muted ${href ? "transition-colors group-hover:text-accent" : ""}`}
          >
            {venue} {year}
          </div>
        </div>
        <div className="mt-1 text-sm text-muted">
          {authors}
          {note ? (
            <>
              <span className="mx-1.5 text-base leading-none text-accent">•</span>
              <span className="font-semibold">{note}</span>
              <span className="mx-1.5 text-base leading-none text-accent">•</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group block">
        {inner}
      </a>
    );
  }
  return inner;
}
