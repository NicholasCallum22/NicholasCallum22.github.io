import { Link, useSearchParams } from "react-router";

import { EvidenceChip } from "@/components/evidence";
import { Schematic } from "@/components/schematic";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { cases, scopeNote } from "@/data/cases";
import type { Scope } from "@/data/content";

const scopes: Scope[] = ["Industry", "Independent", "Academic"];

export default function WorkPage() {
  usePageTitle("Case studies");
  const [params, setParams] = useSearchParams();
  const raw = params.get("scope");
  const scope = scopes.find((s) => s === raw) ?? null;
  const list = scope ? cases.filter((c) => c.scope === scope) : cases;

  const choose = (s: Scope | null) => {
    const next = new URLSearchParams(params);
    if (s) next.set("scope", s);
    else next.delete("scope");
    setParams(next, { replace: true });
  };

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="h-section !text-[clamp(2.2rem,1.6rem+2.4vw,3.25rem)]">Case studies</h1>
      <p className="measure mt-3 text-muted-foreground">
        The problem, what I did, the result with its evidence type, and the limits of each piece of
        work. Industry work is kept at the level an employer would be comfortable with.
      </p>

      <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        <FilterButton on={scope === null} onClick={() => choose(null)} label="All" count={cases.length} />
        {scopes.map((s) => (
          <FilterButton
            key={s}
            on={scope === s}
            onClick={() => choose(s)}
            label={s}
            count={cases.filter((c) => c.scope === s).length}
          />
        ))}
      </div>
      {scope && <p className="mt-3 text-sm text-muted-foreground">{scopeNote[scope]}</p>}

      <ul className="mt-8 space-y-5">
        {list.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/work/${c.slug}`}
              className="group grid gap-5 rounded-lg border bg-card p-5 transition-colors hover:border-primary sm:grid-cols-[14rem_minmax(0,1fr)] sm:p-6"
            >
              <Schematic id={c.cover} showCaption={false} className="[&_.schematic]:border-0 [&_.schematic]:p-0 [&_.schematic]:bg-transparent" />
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">
                  {c.scope}. {c.org}, <span className="tnum">{c.period}</span>
                </p>
                <h2 className="h-item mt-1 !text-[1.25rem] group-hover:text-primary">{c.title}</h2>
                <p className="mt-2 text-muted-foreground">{c.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.evidence.map((e) => (
                    <EvidenceChip key={e} kind={e} />
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButton({ on, onClick, label, count }: { on: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button
      type="button"
      aria-pressed={on ? "true" : "false"}
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        on ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"
      }`}
    >
      {label} <span className="tnum opacity-75">{count}</span>
    </button>
  );
}
