"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Lightbulb,
  ClipboardList,
  TrendingUp,
  X,
} from "lucide-react";
import { useNavigation } from "@/components/NavigationContext";

// Pages where the sidebar should be hidden
const HIDDEN_ON = ["/", "/onboarding"];

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  matchPaths?: string[]; // additional paths that should highlight this item
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Insights",
    href: "/insights",
    icon: Lightbulb,
    matchPaths: ["/insight"],
  },
  {
    label: "Practice Tracker",
    href: "/practice-tracker",
    icon: ClipboardList,
  },
  {
    label: "Progress",
    href: "/dashboard",
    icon: TrendingUp,
  },
];

function isActive(pathname: string, item: NavItem): boolean {
  if (pathname === item.href) return true;
  if (item.matchPaths) {
    return item.matchPaths.some((p) => pathname.startsWith(p));
  }
  return false;
}

// Overlay for mobile
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Drawer slide for mobile
const drawerVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, closeSidebar } = useNavigation();

  // Close sidebar on route change
  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };
    if (isSidebarOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when drawer is open on mobile
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen, closeSidebar]);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <>
      {/* ===== Desktop Sidebar (always visible on lg+) ===== */}
      <aside
        className="hidden lg:flex fixed left-0 top-14 bottom-0 w-56 flex-col border-r border-earth-100/60 bg-cream-50/60 backdrop-blur-sm z-40"
        aria-label="Main navigation"
      >
        <nav className="flex-1 px-3 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item);
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-earth-100/70 text-earth-800 shadow-sm"
                    : "text-earth-500 hover:text-earth-700 hover:bg-earth-100/40"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="w-4.5 h-4.5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom decorative element */}
        <div className="px-6 py-4 border-t border-earth-100/40">
          <p className="text-[10px] text-earth-300 text-center leading-relaxed">
            Ancient wisdom,
            <br />
            modern clarity.
          </p>
        </div>
      </aside>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-50 bg-earth-900/30 backdrop-blur-sm"
              onClick={closeSidebar}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 z-50 bg-cream-50 shadow-xl border-r border-earth-100/60 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 h-14 border-b border-earth-100/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-earth-300 to-earth-500 flex items-center justify-center shadow-sm">
                    <span className="text-xs text-cream-50 font-serif font-bold leading-none">
                      Om
                    </span>
                  </div>
                  <span className="text-sm font-serif font-semibold text-earth-800">
                    Upanishadic Wisdom
                  </span>
                </div>
                <button
                  onClick={closeSidebar}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-earth-500 hover:bg-earth-100/60 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 px-3 py-6 space-y-1" aria-label="Main navigation">
                {NAV_ITEMS.map((item, index) => {
                  const active = isActive(pathname, item);
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          active
                            ? "bg-earth-100/70 text-earth-800 shadow-sm"
                            : "text-earth-500 hover:text-earth-700 hover:bg-earth-100/40"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-5 border-t border-earth-100/40">
                <p className="text-[11px] text-earth-300 text-center leading-relaxed">
                  Ancient wisdom, modern clarity.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
