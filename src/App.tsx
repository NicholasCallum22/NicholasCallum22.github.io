import { HashRouter as Router, Routes, Route } from "react-router";

import Layout from "@/layout";
import { loadLazy } from "@/lib/loadComponent";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/hooks/scroll-to-top";
import { useGlobalMeta } from "./hooks/use-global-meta";

const HomePage = loadLazy(() => import("@/pages/home"));
const ExperiencePage = loadLazy(() => import("@/pages/experience"));
const WorkPage = loadLazy(() => import("@/pages/work"));
const CasePage = loadLazy(() => import("@/pages/work/page"));
const ResearchPage = loadLazy(() => import("@/pages/research"));
const NotFoundPage = loadLazy(() => import("@/pages/notfound"));

export default function App() {
  useGlobalMeta();

  return (
    <ThemeProvider defaultTheme="system" storageKey="np-theme">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="work/:slug" element={<CasePage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
