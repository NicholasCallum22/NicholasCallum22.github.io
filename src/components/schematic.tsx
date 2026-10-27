import { illustrations } from "@/data/illustrations";
import { cn } from "@/lib/utils";

export function Schematic({
  id,
  className,
  showCaption = true,
}: {
  id: string;
  className?: string;
  showCaption?: boolean;
}) {
  const item = illustrations[id];
  if (!item) return null;
  return (
    <figure className={cn("m-0", className)}>
      <div
        className="schematic rounded-md border bg-card p-3 sm:p-4"
        dangerouslySetInnerHTML={{ __html: item.svg }}
      />
      {showCaption && (
        <figcaption className="mt-2 text-sm text-muted-foreground">{item.caption}</figcaption>
      )}
    </figure>
  );
}

export function HatchDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="np-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="var(--card)" />
          <path d="M0 0 V6" stroke="var(--line-strong)" strokeWidth="1.4" />
        </pattern>
      </defs>
    </svg>
  );
}
