import { useLocation, Link } from "react-router";
import type { LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export type NavItem = { title: string; url: string; icon: LucideIcon };

export function NavMain({ items }: { items: NavItem[] }) {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();
  const isActive = (url: string) => {
    const path = location.pathname.replace(/^\//, "");
    if (url === "") return path === "";
    return path === url || path.startsWith(`${url}/`);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} asChild isActive={isActive(item.url)} size="lg">
              <Link
                to={`/${item.url}`}
                aria-current={isActive(item.url) ? "page" : undefined}
                onClick={() => setOpenMobile(false)}
              >
                <item.icon />
                <span className="text-[0.95rem]">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
