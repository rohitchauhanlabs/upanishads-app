"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, LayoutDashboard } from "lucide-react";
import { useNavigation } from "@/components/NavigationContext";

// Pages where the navigation should be hidden (landing, onboarding)
const HIDDEN_ON = ["/", "/onboarding"];

export function Navigation() {
  const pathname = usePathname();
  const { toggleSidebar } = useNavigation();

  // Hide nav on landing and onboarding pages
  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full border-b border-earth-100/60 bg-cream-50/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* Left: Hamburger (mobile) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-earth-600 hover:bg-earth-100/60 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Spacer for desktop left alignment */}
        <div className="hidden lg:block w-9" />

        {/* Center: Logo / App Name */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2 group"
          aria-label="Upanishadic Wisdom — Home"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-earth-300 to-earth-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <span className="text-xs text-cream-50 font-serif font-bold leading-none">Om</span>
          </div>
          <span className="hidden sm:inline text-sm font-serif font-semibold text-earth-800 group-hover:text-earth-600 transition-colors">
            Upanishadic Wisdom
          </span>
        </Link>

        {/* Right: Dashboard link */}
        <Link
          href="/dashboard"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            pathname === "/dashboard"
              ? "text-earth-700 bg-earth-100/60"
              : "text-earth-500 hover:text-earth-700 hover:bg-earth-100/40"
          }`}
          aria-label="Dashboard"
        >
          <LayoutDashboard className="w-4 h-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
      </div>
    </motion.header>
  );
}
