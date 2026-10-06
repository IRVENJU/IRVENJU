"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MissionSystem from "./MissionSystem";

const links = [
  ["PLAY", "/"],
  ["ABOUT", "/about"],
  ["PROJECTS", "/projects"],
  ["EXPERIENCE", "/experience"],
  ["CONTACT", "/contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("PLAY");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [showMission, setShowMission] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = (label: string) => {
    if (label === "PLAY") {
      setShowMission(true);
    }
  };

  const navigate = (href: string) => {
    window.dispatchEvent(
      new CustomEvent("page-transition", {
        detail: href,
      })
    );
  };

  return (
    <>
      <video
        className="game-wallpaper"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/wallpaper.mp4" type="video/mp4" />
      </video>

      <div className="game-overlay" />

      {!showMission && (
        <div className="game-ui">
          <div className="game-title">
            <span className="game-title-small">
              my frist web
            </span>

            <h1>IRVENJU</h1>
            <span className="game-title-sub">
              PERSONAL ARCHIVE
            </span>
          </div>

          <div className="game-menu">
            {links.map(([label, href]) => {
              const selected = active === label;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`game-menu-item ${
                    selected ? "selected" : ""
                  }`}
                  onMouseEnter={() => setActive(label)}
                  onClick={(e) => {
                    if (label === "PLAY") {
                      handleClick(label);
                      return;
                    }

                    e.preventDefault();
                    navigate(href);
                  }}
                >
                  <span className="menu-arrow">
                    {selected ? "▶" : ""}
                  </span>

                  <span className="menu-label">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="game-status">
            <span>● ONLINE</span>
            <span>v05.10.26</span>
          </div>
        </div>
      )}

      {!showMission && (
        <div
          className="game-cursor-glow"
          style={{
            left: mouse.x,
            top: mouse.y,
          }}
        />
      )}

      {showMission && (
        <MissionSystem
          onContinue={() => setShowMission(false)}
        />
      )}
    </>
  );
}