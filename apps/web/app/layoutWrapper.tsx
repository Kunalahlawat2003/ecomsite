"use client"; // This must be a client component

import { usePathname } from "next/navigation";
import { Topbar } from "@repo/ui/topbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes that should NOT use the layout
  const excludedRoutes = ["/collection/product", "/orders", "/collection", "/admin", "/item"];

  if (excludedRoutes.includes(pathname)) {
    return <>{children}</>; // No layout applied
  }

  return (
    <>
      <Topbar />
      {children}
    </>
  );
}