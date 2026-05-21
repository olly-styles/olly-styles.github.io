type Props = {
  meta: string;
  title: string;
  description?: string;
  href?: string;
};

export function EntryRow({ meta, title, description, href }: Props) {
  const inner = (
    <div className="grid grid-cols-[110px_1fr] items-baseline gap-6 border-b border-line py-3 last:border-b-0">
      <div className={`pt-px font-mono text-xs text-muted ${href ? "transition-colors group-hover:text-accent" : ""}`}>
        {meta}
      </div>
      <div>
        <div className={`text-[15px] font-medium ${href ? "transition-colors group-hover:text-accent" : ""}`}>
          {title}
        </div>
        {description ? <div className="mt-0.5 text-sm text-muted">{description}</div> : null}
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
