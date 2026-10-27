import * as React from "react";
import { Link } from "react-router";
import { User, Briefcase, Layers, FlaskConical, FileDown } from "lucide-react";

import { DarkModeToggleButton } from "@/components/mode-toggle";
import { NavMain, type NavItem } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { profile } from "@/data/content";

const nav: NavItem[] = [
  { title: "About", url: "", icon: User },
  { title: "Experience", url: "experience", icon: Briefcase },
  { title: "Case studies", url: "work", icon: Layers },
  { title: "Research", url: "research", icon: FlaskConical },
];

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="9" fill="var(--primary)" />
      <path
        d="M10 29V11l10 18V11M24 29V11h4.5a5 5 0 0 1 0 10H24"
        fill="none"
        stroke="var(--primary-foreground)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2.5 px-1 pt-1 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:px-0">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 rounded-md" aria-label={`${profile.name}, home`}>
            <Monogram className="size-9 shrink-0 group-data-[collapsible=icon]:size-8" />
            <span className="min-w-0 group-data-[collapsible=icon]:hidden">
              <span className="block text-[0.95rem] font-semibold leading-tight">{profile.name}</span>
              <span className="block text-[0.8rem] leading-tight text-muted-foreground">
                {profile.role}
              </span>
            </span>
          </Link>
          <SidebarTrigger className="ml-auto hidden md:flex group-data-[collapsible=icon]:ml-0" aria-label="Collapse or expand navigation" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={nav} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Download CV (PDF)" asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
              <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download>
                <FileDown />
                <span>Download CV</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DarkModeToggleButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
