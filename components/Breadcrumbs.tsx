"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

// Only show breadcrumbs on insight-related pages and practice tracker
const BREADCRUMB_MAP: Record<string, { label: string; href: string }[]> = {
  "/insight-1/intro": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #1", href: "/insights" },
    { label: "Intro — Shreya vs. Preya", href: "/insight-1/intro" },
  ],
  "/insight/layer-1": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #1", href: "/insights" },
    { label: "Layer 1 — The Hook", href: "/insight/layer-1" },
  ],
  "/insight/layer-2": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #1", href: "/insights" },
    { label: "Layer 2 — The Aha Moment", href: "/insight/layer-2" },
  ],
  "/insight/layer-3": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #1", href: "/dashboard" },
    { label: "Layer 3 — Full Insight", href: "/insight/layer-3" },
  ],
  // Insight #2
  "/insight-2/intro": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #2", href: "/insights" },
    { label: "Intro — The Witness Self", href: "/insight-2/intro" },
  ],
  "/insight-2/layer-2": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #2", href: "/insights" },
    { label: "Layer 2 — The Aha Moment", href: "/insight-2/layer-2" },
  ],
  "/insight-2/layer-3": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #2", href: "/insights" },
    { label: "Layer 3 — Full Insight", href: "/insight-2/layer-3" },
  ],
  // Insight #3
  "/insight-3/intro": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #3", href: "/insights" },
    { label: "Intro — The Two Birds", href: "/insight-3/intro" },
  ],
  "/insight-3/layer-2": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #3", href: "/insights" },
    { label: "Layer 2 — The Two Birds", href: "/insight-3/layer-2" },
  ],
  "/insight-3/layer-3": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Insight #3", href: "/insights" },
    { label: "Layer 3 — Full Insight", href: "/insight-3/layer-3" },
  ],
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = BREADCRUMB_MAP[pathname];

  // Don't render if no breadcrumbs defined for this route
  if (!crumbs) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      aria-label="Breadcrumb"
      className="w-full border-b border-earth-100/40 bg-cream-50/50"
    >
      <div className="mx-auto max-w-5xl px-4 lg:pl-60">
        <ol className="flex items-center gap-1 py-2.5 text-xs overflow-x-auto">
          {/* Home icon */}
          <li className="flex items-center shrink-0">
            <Link
              href="/dashboard"
              className="text-earth-400 hover:text-earth-600 transition-colors"
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
          </li>

          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.href + index} className="flex items-center shrink-0">
                <ChevronRight className="w-3 h-3 text-earth-300 mx-1" />
                {isLast ? (
                  <span className="text-earth-700 font-medium truncate max-w-[180px]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-earth-400 hover:text-earth-600 transition-colors truncate max-w-[140px]"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </motion.nav>
  );
}
