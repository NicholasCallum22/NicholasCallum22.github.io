import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { FileDown, Mail, Copy } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { EvidenceChip, EvidenceMark } from "@/components/evidence";
import { Schematic } from "@/components/schematic";
import { usePageTitle } from "@/hooks/use-pagetitle";
import {
  profile,
  now,
  results,
  capabilities,
  roles,
  independent,
  education,
  evidenceInfo,
  type Evidence,
} from "@/data/content";
import { cases } from "@/data/cases";

const cvHref = `${import.meta.env.BASE_URL}${profile.cv}`;

export default function HomePage() {
  usePageTitle("Mechanical design engineer");

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-24 md:gap-28">
      <Hero />
      <Ledger />
      <Capabilities />
      <Timeline />
      <FeaturedWork />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-name" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
      <div>
        <p className="mb-5 text-muted-foreground">
          {profile.role}, {profile.location}
        </p>
        <h1 id="hero-name" className="display-name">
          Nischal
          <br />
          Prathipati
        </h1>
        <p className="lede measure mt-7">{profile.pitch}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={cvHref} download>
              <FileDown />
              Download CV
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${profile.email}`}>
              <Mail />
              Email me
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <aside aria-labelledby="now-h" className="rounded-lg border bg-card p-5">
        <h2 id="now-h" className="h-item mb-3">
          {now.heading}
        </h2>
        <ul className="space-y-3 text-[0.95rem] leading-snug">
          {now.items.map((t) => (
            <li key={t} className="flex gap-2.5">
              <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

const allEvidence: Evidence[] = ["test", "work", "sim", "calc"];

function Ledger() {
  const [active, setActive] = useState<Evidence[]>(allEvidence);
  const shown = useMemo(() => results.filter((r) => active.includes(r.evidence)), [active]);

  const toggle = (e: Evidence) =>
    setActive((cur) => {
      if (cur.length === allEvidence.length) return [e];
      const next = cur.includes(e) ? cur.filter((x) => x !== e) : [...cur, e];
      return next.length === 0 ? allEvidence : next;
    });

  return (
    <section aria-labelledby="ledger-h">
      <h2 id="ledger-h" className="h-section">
        Results, and the evidence behind each one
      </h2>
      <p className="measure mt-3 text-muted-foreground">
        Every figure is labelled by where it comes from: a physical test, a result recorded at
        work, a simulation, or a calculation. Choose a type to filter the list.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter results by evidence type">
        {allEvidence.map((e) => {
          const on = active.includes(e);
          return (
            <button
              key={e}
              type="button"
              aria-pressed={on ? "true" : "false"}
              onClick={() => toggle(e)}
              className={`ev-chip filter-chip ev-${e} cursor-pointer px-3 py-1 text-sm`}
              title={evidenceInfo[e].explain}
            >
              <EvidenceMark kind={e} />
              {evidenceInfo[e].label}
              <span className="tnum opacity-70">{results.filter((r) => r.evidence === e).length}</span>
            </button>
          );
        })}
        {active.length !== allEvidence.length && (
          <Button variant="link" size="sm" onClick={() => setActive(allEvidence)}>
            Show all
          </Button>
        )}
      </div>

      <ol className="mt-6 divide-y overflow-hidden rounded-lg border bg-card" aria-live="polite">
        {shown.map((r) => (
          <li key={r.claims + r.figure} className={`ev-${r.evidence} ev-rule grid gap-x-6 gap-y-2 px-5 py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)] md:grid-cols-[10.5rem_minmax(0,1fr)_auto] md:items-baseline`}>
            <span className="figure-num text-[1.75rem] text-[var(--ev)]">{r.figure}</span>
            <div className="min-w-0">
              <p className="leading-snug">{r.what}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {r.where}
                {r.slug && (
                  <>
                    {", "}
                    <Link className="text-primary underline underline-offset-2" to={`/work/${r.slug}`}>
                      read the case study
                    </Link>
                  </>
                )}
              </p>
            </div>
            <EvidenceChip kind={r.evidence} className="justify-self-start sm:col-start-2 md:col-start-auto" />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setClosed(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-labelledby="cap-h">
      <h2 id="cap-h" className="h-section">
        What I bring to a design team
      </h2>
      <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
        {capabilities.map((c, i) => (
          <div key={c.title}>
            <h3 className="h-item">{c.title}</h3>
            <p className="mt-2 text-muted-foreground">{c.body}</p>
            {i === 1 && (
              <div ref={ref} className={`corr mt-5 ${closed ? "is-closed" : ""}`} aria-label="Model against rig: from about 19% under-prediction to within 6%">
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">Model vs rig, peak deflection</span>
                  <span className="tnum text-[var(--ev-test)] font-semibold">{closed ? "within 6%" : "−19%"}</span>
                </div>
                <div className="corr-track">
                  <div className="corr-measured" />
                  <div className="corr-model" />
                </div>
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>Simulated</span>
                  <span>Measured on the rig</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { dates: independent.dates, title: "Independent engineering projects", org: independent.place, note: "Self-directed, not employment" },
    ...roles.map((r) => ({ dates: r.dates, title: r.role, org: r.org, note: r.place })),
  ];
  const msc = education[0];
  items.splice(4, 0, { dates: msc.dates, title: msc.degree, org: msc.school, note: "2:1, 63% overall" });

  return (
    <section aria-labelledby="tl-h">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="tl-h" className="h-section">
          Where I have worked
        </h2>
        <Link to="/experience" className="text-primary underline underline-offset-2">
          Full experience and skills
        </Link>
      </div>
      <ol className="mt-8 border-l-2 border-[var(--line-strong)] pl-6">
        {items.map((it) => (
          <li key={it.title + it.dates} className="relative pb-7 last:pb-0">
            <span className="absolute -left-[1.95rem] top-2 size-3 rounded-full border-2 border-background bg-primary" aria-hidden="true" />
            <p className="tnum text-sm text-muted-foreground">{it.dates}</p>
            <p className="h-item mt-0.5">{it.title}</p>
            <p className="text-muted-foreground">
              {it.org}. {it.note}.
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FeaturedWork() {
  const featured = cases.filter((c) => c.featured);
  const [lead, ...rest] = featured;

  return (
    <section aria-labelledby="fw-h">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="fw-h" className="h-section">
          Selected case studies
        </h2>
        <Link to="/work" className="text-primary underline underline-offset-2">
          All {cases.length} case studies
        </Link>
      </div>

      <Link
        to={`/work/${lead.slug}`}
        className="group mt-8 grid gap-6 rounded-xl border bg-card p-5 transition-colors hover:border-primary sm:p-7 md:grid-cols-2 md:items-center"
      >
        <Schematic id={lead.cover} showCaption={false} className="[&_.schematic]:border-0 [&_.schematic]:p-0" />
        <div>
          <p className="text-sm text-muted-foreground">
            {lead.org}, {lead.period}
          </p>
          <h3 className="h-section mt-2 !text-[1.6rem] group-hover:text-primary">{lead.title}</h3>
          <p className="mt-3 text-muted-foreground">{lead.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {lead.evidence.map((e) => (
              <EvidenceChip key={e} kind={e} />
            ))}
          </div>
        </div>
      </Link>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((c) => (
          <li key={c.slug}>
            <Link to={`/work/${c.slug}`} className="group flex h-full flex-col gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary">
              <Schematic id={c.cover} showCaption={false} className="[&_.schematic]:border-0 [&_.schematic]:p-0" />
              <div>
                <p className="text-sm text-muted-foreground">
                  {c.scope === "Independent" ? "Independent project" : c.org}, {c.period}
                </p>
                <h3 className="h-item mt-1 group-hover:text-primary">{c.title}</h3>
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
    </section>
  );
}

function Contact() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast("Email address copied", { description: profile.email });
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section aria-labelledby="ct-h" className="rounded-xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
      <h2 id="ct-h" className="h-section">
        Hiring for design, CAE or EV powertrain?
      </h2>
      <p className="measure mt-3 opacity-90">
        {profile.availability} I am happy to walk through the CAD and simulation files behind any
        case study.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild size="lg" variant="secondary">
          <a href={`mailto:${profile.email}`}>
            <Mail />
            {profile.email}
          </a>
        </Button>
        <Button size="lg" variant="ghost" onClick={copy} className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
          <Copy />
          Copy email
        </Button>
        <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
