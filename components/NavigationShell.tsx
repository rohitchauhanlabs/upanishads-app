"use client";

import { usePathname } from "next/navigation";
import { NavigationProvider } from "@/components/NavigationContext";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// Pages where the full navigation shell should be hidden
const FULL_SCREEN_PAGES = ["/", "/onboarding"];

export function NavigationShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFullScreen = FULL_SCREEN_PAGES.includes(pathname);

  return (
    <NavigationProvider>
      {/* Top Navigation Bar */}
      <Navigation />

      {/* Sidebar (desktop: fixed left, mobile: drawer) */}
      <Sidebar />

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content Area */}
      <div
        className={
          isFullScreen
            ? "" // No padding for landing/onboarding — they are full-screen
            : "lg:pl-56" // Offset for desktop sidebar
        }
      >
        {children}
      </div>
    </NavigationProvider>
  );
}
