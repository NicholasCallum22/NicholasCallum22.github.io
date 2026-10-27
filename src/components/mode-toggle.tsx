import { Sun, Moon } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <SidebarMenuButton
      tooltip={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="cursor-pointer"
    >
      {isDark ? <Sun /> : <Moon />}
      <span>{isDark ? "Light theme" : "Dark theme"}</span>
    </SidebarMenuButton>
  );
}
