"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const transitioning = useRef(false);
  const targetPath = useRef<string | null>(null);

  useEffect(() => {
    const handleTransition = (event: Event) => {
      const href = (event as CustomEvent<string>).detail;

      if (!href || href === pathname || transitioning.current) return;

      transitioning.current = true;
      targetPath.current = href;

      document.body.classList.add("page-exit");

      const overlay = document.getElementById("page-transition");

      if (overlay) {
        overlay.classList.remove("page-reveal");
        overlay.classList.add("page-black");
      }

      setTimeout(() => {
        router.push(href);
      }, 900);
    };

    window.addEventListener("page-transition", handleTransition);

    return () => {
      window.removeEventListener("page-transition", handleTransition);
    };
  }, [pathname, router]);

  useEffect(() => {
    if (!transitioning.current) return;
    if (targetPath.current !== pathname) return;

    const content = document.getElementById("page-content");
    const overlay = document.getElementById("page-transition");

    if (!content || !overlay) return;

    // HALAMAN TUJUAN zoom OUT
    content.classList.remove("page-enter");
    void content.offsetWidth;
    content.classList.add("page-enter");

    // BLACK hanya fade out
    overlay.classList.remove("page-black");
    overlay.classList.add("page-reveal");

    const timer = setTimeout(() => {
      document.body.classList.remove("page-exit");
      content.classList.remove("page-enter");
      overlay.classList.remove("page-reveal");

      transitioning.current = false;
      targetPath.current = null;
    }, 900);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <div id="page-transition" />;
}