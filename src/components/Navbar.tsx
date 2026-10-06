"use client";

import SystemIntro from "./SystemIntro";
import Link from "next/link";
import { useEffect, useState } from "react";
import MissionSystem from "./MissionSystem";

const links = [
  ["START", "/"],
  ["ABOUT", "/about"],
  ["PROJECTS", "/projects"],
  ["EXPERIENCE", "/experience"],
  ["CONTACT", "/contact"],
];

export default function Navbar() {
  const [starting, setStarting] = useState(false);
  const [active, setActive] = useState("START");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [showMission, setShowMission] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

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
  if (label === "START" && !starting) {
    setStarting(true);

    setTimeout(() => {
      setShowMission(true);
      setStarting(false);
    }, 700);
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
      {/* BACKGROUND */}
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

      {/* MAIN MENU */}
  {!showMission && !showIntro && (
  <div
    className={`game-ui ${
      starting ? "system-starting" : ""
    }`}
  >
          <div className="game-title">
            <span className="game-title-small">
              GAMEDEV ENTHUSIAST
            </span>

            <h1>IRVENJU</h1>

            <span className="game-title-sub">
              PERSONAL PORTFOLIO
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
                    if (label === "START") {
                      e.preventDefault();
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
            <span>ONLINE</span>
            <span>V.05.10.26</span>
          </div>
        </div>
      )}

      {/* CURSOR */}
      {!showMission && !showIntro && !starting && (
        <div
          className="game-cursor-glow"
          style={{
            left: mouse.x,
            top: mouse.y,
          }}
        />
      )}

      {/* START → MISSION TRANSITION */}
      {starting && (
        <div className="start-sequence-text">
          <div className="start-sequence-line" />

          <div className="start-sequence-text">
            <span>SYSTEM ACTIVATED</span>
            <strong>WELCOME, PLAYER.</strong>
          </div>
        </div>
      )}

      {/* MISSION SYSTEM */}
      {showMission && (
        <MissionSystem
          onContinue={() => setShowMission(false)}
        />
      )}

      {/* BACKGROUND CREDIT */}
      <div className="background-credit">
        <span>BACKGROUND ART</span>
        <strong>Source by:steamcommunity.com</strong>
      </div>

      {/* INITIAL SYSTEM */}
      {showIntro && (
        <SystemIntro
          onStart={() => setShowIntro(false)}
        />
      )}
    </>
  );
}