import { iconFor } from "@/components/icons";

type Props = {
  meta: string;
  title: string;
  role?: string;
  description?: string;
  href?: string;
  iconKey?: string;
};

export function EntryRow({ meta, title, role, description, href, iconKey }: Props) {
  const icon = iconFor(iconKey);
  const inner = (
    <div className="flex items-start gap-4 border-b border-line py-3 last:border-b-0">
      {icon ? <div className="flex h-[54px] w-[80px] flex-shrink-0 items-center justify-center">{icon}</div> : null}
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
            {meta}
          </div>
        </div>
        {role || description ? (
          <div className="mt-1 text-sm text-muted">
            {role ? <span>{role}</span> : null}
            {role && description ? " " : null}
            {description}
          </div>
        ) : null}
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
