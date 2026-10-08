"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function EscapeHome() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;

      e.preventDefault();
      e.stopPropagation();

      console.log("ESC PRESSED:", pathname);

      if (pathname !== "/") {
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleEscape, true);

    return () => {
      window.removeEventListener("keydown", handleEscape, true);
    };
  }, [pathname, router]);

  return null;
}