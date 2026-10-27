import { Link } from "react-router";

import { usePageTitle } from "@/hooks/use-pagetitle";

export default function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="h-section">This page does not exist</h1>
      <p className="mt-3 text-muted-foreground">The link may be out of date or mistyped.</p>
      <Link to="/" className="mt-6 inline-block text-primary underline underline-offset-2">
        Go to the home page
      </Link>
    </div>
  );
}
