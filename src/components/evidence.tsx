import { evidenceInfo, type Evidence } from "@/data/content";
import { cn } from "@/lib/utils";

// Each evidence class has its own shape as well as its own colour,
// so the system still reads without colour.
export function EvidenceMark({ kind, className }: { kind: Evidence; className?: string }) {
  const cls = cn("ev-mark", className);
  switch (kind) {
    case "test":
      return (
        <svg viewBox="0 0 10 10" className={cls} aria-hidden="true">
          <circle cx="5" cy="5" r="4.2" fill="currentColor" />
        </svg>
      );
    case "work":
      return (
        <svg viewBox="0 0 10 10" className={cls} aria-hidden="true">
          <rect x="1" y="1" width="8" height="8" rx="1.2" fill="currentColor" />
        </svg>
      );
    case "sim":
      return (
        <svg viewBox="0 0 10 10" className={cls} aria-hidden="true">
          <path d="M5 0.6 9.4 5 5 9.4 0.6 5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "calc":
      return (
        <svg viewBox="0 0 10 10" className={cls} aria-hidden="true">
          <path d="M5 1 9.2 9H0.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function EvidenceChip({ kind, className }: { kind: Evidence; className?: string }) {
  return (
    <span className={cn("ev-chip", `ev-${kind}`, className)} title={evidenceInfo[kind].explain}>
      <EvidenceMark kind={kind} />
      {evidenceInfo[kind].label}
    </span>
  );
}
