"use client";

import Link from "next/link";

export default function BackHome() {
  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();

    window.dispatchEvent(
      new CustomEvent("page-transition", {
        detail: "/",
      })
    );
  };

  return (
    <Link
      href="/"
      className="back-home"
      onClick={goHome}
    >
      <span>‹</span>
      HOME
    </Link>
  );
}