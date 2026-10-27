import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

import { EvidenceChip } from "@/components/evidence";
import { Schematic } from "@/components/schematic";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { cases } from "@/data/cases";
import { parseFrontmatter } from "@/utils/parseFrontmatter";

const articleBase = import.meta.env.BASE_URL + "articles";

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const index = cases.findIndex((c) => c.slug === slug);
  const item = index >= 0 ? cases[index] : undefined;
  const next = cases[(index + 1) % cases.length];
  const [body, setBody] = useState<string>("");
  const [failed, setFailed] = useState(false);

  usePageTitle(item ? item.title : "Case study not found");

  useEffect(() => {
    if (!item) return;
    let live = true;
    setBody("");
    setFailed(false);
    fetch(`${articleBase}/${item.slug}/${item.slug}.md`)
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok || text.trimStart().startsWith("<")) throw new Error("missing");
        if (live) setBody(parseFrontmatter(text).body);
      })
      .catch(() => live && setFailed(true));
    return () => {
      live = false;
    };
  }, [item]);

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl">
        <h1 className="h-section">That case study does not exist</h1>
        <p className="mt-3 text-muted-foreground">The link may be out of date. All case studies are listed on one page.</p>
        <Link to="/work" className="mt-6 inline-block text-primary underline underline-offset-2">
          See all case studies
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" />
        All case studies
      </Link>

      <p className="mt-8 text-muted-foreground">
        {item.scope}. {item.org}, <span className="tnum">{item.period}</span>
      </p>
      <h1 className="mt-2 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-[720] leading-[1.05] tracking-[-0.025em]">
        {item.title}
      </h1>
      <p className="lede mt-5 text-muted-foreground">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.evidence.map((e) => (
          <EvidenceChip key={e} kind={e} />
        ))}
      </div>

      <Schematic id={item.cover} className="mt-10" />

      <p className="mt-6 text-sm">
        <span className="font-semibold">Tools: </span>
        <span className="text-muted-foreground">{item.tools.join(", ")}</span>
      </p>

      <div className="case-prose prose mt-6 max-w-none">
        {failed ? (
          <p>This case study could not be loaded. Refresh the page to try again.</p>
        ) : body ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        ) : (
          <p className="text-muted-foreground" aria-busy="true">
            Loading the case study…
          </p>
        )}
      </div>

      <nav aria-label="Next case study" className="mt-16 border-t pt-6">
        <p className="text-sm text-muted-foreground">Next case study</p>
        <Link to={`/work/${next.slug}`} className="h-item mt-1 inline-block text-primary underline-offset-2 hover:underline">
          {next.title}
        </Link>
      </nav>
    </article>
  );
}
