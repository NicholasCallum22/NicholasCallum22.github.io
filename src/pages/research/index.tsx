import { Link } from "react-router";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Schematic } from "@/components/schematic";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { profile, research, education } from "@/data/content";

export default function ResearchPage() {
  usePageTitle("Research");

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="h-section !text-[clamp(2.2rem,1.6rem+2.4vw,3.25rem)]">Research interests</h1>
      <p className="measure lede mt-4 text-muted-foreground">{research.intro}</p>

      <section aria-labelledby="th-h" className="mt-12">
        <h2 id="th-h" className="sr-only">
          Themes
        </h2>
        <ol className="grid gap-5 md:grid-cols-3">
          {research.themes.map((t) => (
            <li key={t.title} className="rounded-lg border bg-card p-5">
              <h3 className="h-item">{t.title}</h3>
              <p className="mt-2 text-muted-foreground">{t.body}</p>
              <p className="mt-3 text-sm">{t.scope}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="pr-h" className="mt-12 grid gap-8 rounded-xl border-2 border-dashed border-[var(--line-strong)] p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
        <div>
          <h2 id="pr-h" className="h-section">
            A direction I would like to take
          </h2>
          <p className="mt-3">{research.proposed}</p>
          <Link to="/work/detonation-cfd" className="mt-4 inline-block text-primary underline underline-offset-2">
            Read the validation case study
          </Link>
        </div>
        <Schematic id="DETONATION" />
      </section>

      <section aria-labelledby="ms-h" className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
        <div>
          <h2 id="ms-h" className="h-section">
            MSc dissertation
          </h2>
          <p className="mt-3">
            <span className="font-semibold">Enhancing EV Performance through Suspension System Optimisation.</span>{" "}
            {education[0].school}, {education[0].dates}. Multi-body models in MATLAB, Simulink and
            Simscape, FEA of the suspension components, virtual vehicle-dynamics tests and active
            suspension optimisation, with a simulated 15% improvement in stability.
          </p>
          <Link to="/work/msc-suspension" className="mt-4 inline-block text-primary underline underline-offset-2">
            Read the dissertation case study
          </Link>
        </div>
        <Schematic id="QUARTER" />
      </section>

      <section aria-labelledby="ot-h" className="mt-14">
        <h2 id="ot-h" className="h-section">
          Other academic projects
        </h2>
        <ul className="mt-5 divide-y rounded-lg border bg-card">
          {research.other.map((o) => (
            <li key={o.name} className="px-5 py-4">
              <p className="h-item">{o.name}</p>
              <p className="mt-1 text-muted-foreground">{o.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-xl bg-secondary p-6 sm:p-8">
        <h2 className="h-section">Supervising PhD students in these areas?</h2>
        <p className="measure mt-3 text-muted-foreground">
          I would be glad to discuss projects, funding routes and how my industrial background could help your group.
        </p>
        <Button asChild size="lg" className="mt-5">
          <a href={`mailto:${profile.email}?subject=PhD%20enquiry`}>
            <Mail />
            Email me about a PhD
          </a>
        </Button>
      </section>
    </div>
  );
}
