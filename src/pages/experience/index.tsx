import { Link } from "react-router";
import { FileDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-pagetitle";
import {
  profile,
  roles,
  teams,
  independent,
  education,
  certifications,
  languages,
  additional,
  skills,
  type Role,
} from "@/data/content";
import { cases } from "@/data/cases";

export default function ExperiencePage() {
  usePageTitle("Experience");
  const independentCases = cases.filter((c) => c.scope === "Independent");

  return (
    <div className="mx-auto max-w-5xl">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="h-section !text-[clamp(2.2rem,1.6rem+2.4vw,3.25rem)]">Experience</h1>
          <p className="measure mt-3 text-muted-foreground">{profile.summary[0]}</p>
        </div>
        <Button asChild size="lg">
          <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download>
            <FileDown />
            Download CV
          </a>
        </Button>
      </header>

      <section aria-labelledby="ind-h" className="mt-14">
        <h2 id="ind-h" className="h-section">
          Industry
        </h2>
        <div className="mt-6 space-y-6">
          {roles.map((r) => (
            <RoleBlock key={r.org} role={r} />
          ))}
        </div>
      </section>

      <section aria-labelledby="self-h" className="mt-16">
        <h2 id="self-h" className="h-section">
          {independent.title}
        </h2>
        <p className="tnum mt-2 text-muted-foreground">
          {independent.place}, {independent.dates}
        </p>
        <p className="measure mt-3">{independent.intro}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {independentCases.map((c) => (
            <li key={c.slug}>
              <Link to={`/work/${c.slug}`} className="block h-full rounded-lg border bg-card p-4 hover:border-primary">
                <span className="h-item block">{c.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{c.tools.join(", ")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sk-h" className="mt-16">
        <h2 id="sk-h" className="h-section">
          Tools and methods, and where I used them
        </h2>
        <div className="mt-6 overflow-x-auto rounded-lg border bg-card">
          <table className="w-full min-w-[34rem] text-left text-[0.95rem]">
            <thead className="border-b bg-muted/60 text-sm text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-2.5 font-medium">Area</th>
                <th scope="col" className="px-4 py-2.5 font-medium">Tool or method</th>
                <th scope="col" className="px-4 py-2.5 font-medium">Where</th>
              </tr>
            </thead>
            <tbody>
              {skills.flatMap((row) =>
                row.items.map((it, i) => (
                  <tr key={row.area + it.name} className="border-b last:border-0 align-top">
                    {i === 0 && (
                      <th scope="rowgroup" rowSpan={row.items.length} className="px-4 py-2.5 font-semibold">
                        {row.area}
                      </th>
                    )}
                    <td className="px-4 py-2.5">{it.name}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{it.where}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="team-h" className="mt-16">
        <h2 id="team-h" className="h-section">
          Student engineering teams
        </h2>
        <div className="mt-6 space-y-6">
          {teams.map((r) => (
            <RoleBlock key={r.org} role={r} />
          ))}
        </div>
      </section>

      <section aria-labelledby="ed-h" className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="ed-h" className="h-section">
            Education
          </h2>
          <ul className="mt-5 space-y-5">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="h-item">{e.degree}</p>
                <p className="text-muted-foreground">
                  {e.school}, <span className="tnum">{e.dates}</span>
                </p>
                <p className="mt-1">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="h-section">Certifications</h2>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 marker:text-primary">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="lang-h" className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="lang-h" className="h-section">
            Languages
          </h2>
          <dl className="mt-5 grid grid-cols-[6rem_1fr] gap-x-4 gap-y-2">
            {languages.map((l) => (
              <div key={l.name} className="contents">
                <dt className="font-semibold">{l.name}</dt>
                <dd className="text-muted-foreground">{l.level}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-muted-foreground">Levels are self-assessed.</p>
        </div>
        <div>
          <h2 className="h-section">Licence and mobility</h2>
          <p className="mt-5">{additional}</p>
          <p className="mt-2">{profile.availability}</p>
        </div>
      </section>
    </div>
  );
}

function RoleBlock({ role }: { role: Role }) {
  return (
    <article className="rounded-lg border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="h-item !text-[1.3rem]">
          {role.role}, {role.org}
        </h3>
        <p className="tnum text-muted-foreground">{role.dates}</p>
      </div>
      <p className="mt-1 text-muted-foreground">
        {role.place}. {role.context}
      </p>
      <ul className="measure mt-4 space-y-2.5">
        {role.bullets.map((b) => (
          <li key={b.t} className="flex gap-3">
            <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{b.t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {role.tools.map((t) => (
          <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-sm">
            {t}
          </span>
        ))}
        {role.slug && (
          <Link to={`/work/${role.slug}`} className="ml-auto text-primary underline underline-offset-2">
            Read the case study
          </Link>
        )}
      </div>
    </article>
  );
}
