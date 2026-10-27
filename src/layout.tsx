import { Outlet, Link } from "react-router";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { HatchDefs } from "@/components/schematic";
import { profile } from "@/data/content";

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <HatchDefs />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <AppSidebar variant="inset" />
      <SidebarInset className="min-h-screen bg-background">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b bg-background/90 px-4 py-2 backdrop-blur md:hidden">
          <SidebarTrigger aria-label="Open navigation" />
          <Link to="/" className="font-semibold tracking-tight">
            {profile.name}
          </Link>
        </header>

        <main id="main" className="grow px-5 py-10 sm:px-10 md:py-16 lg:px-14">
          <Outlet />
        </main>

        <footer className="border-t px-5 py-6 text-sm text-muted-foreground sm:px-10 lg:px-14">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 sm:flex-row sm:justify-between">
            <span>
              © 2026 {profile.name}. Every figure on this site carries its evidence type.
            </span>
            <span>
              Built on the{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://github.com/pm25/showlit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Showlit
              </a>{" "}
              template (MIT).
            </span>
          </div>
        </footer>

        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
