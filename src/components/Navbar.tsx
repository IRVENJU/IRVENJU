"use client";

import SystemIntro from "./SystemIntro";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [startCover, setStartCover] = useState(false);
  const [active, setActive] = useState("START");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [showMission, setShowMission] = useState(false);
  const [missionLoading, setMissionLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const clickSound = useRef<HTMLAudioElement | null>(null);
  const selectSound = useRef<HTMLAudioElement | null>(null);
  const loadingSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem("system-entered");

    if (hasEntered === "true") {
      setShowIntro(false);
    }

    clickSound.current = new Audio("/sounds/click.mp3");
    clickSound.current.volume = 0.5;

    selectSound.current = new Audio("/sounds/select.mp3");
    selectSound.current.volume = 0.4;

    loadingSound.current = new Audio("/sounds/loading.mp3");
    loadingSound.current.volume = 0.35;
    loadingSound.current.loop = true;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      loadingSound.current?.pause();
    };
  }, []);

  // BGM
  const startBGM = () => {
    const audio = new Audio("/bgm.mp3");

    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch((error) => {
      console.error("BGM gagal diputar:", error);
    });
  };

  // CLICK SOUND
  const playClickSound = () => {
    if (!clickSound.current) return;

    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(() => {});
  };

  // SELECT SOUND
  const playSelectSound = () => {
    if (!selectSound.current) return;

    selectSound.current.currentTime = 0;
    selectSound.current.play().catch(() => {});
  };

  // LOADING SOUND
  const playLoadingSound = () => {
    if (!loadingSound.current) return;

    loadingSound.current.currentTime = 0;
    loadingSound.current.play().catch(() => {});
  };

  const stopLoadingSound = () => {
    if (!loadingSound.current) return;

    loadingSound.current.pause();
    loadingSound.current.currentTime = 0;
  };

  // START
  const handleClick = (label: string) => {
    if (label !== "START" || starting || missionLoading) return;

    setStarting(true);
    setStartCover(true);

    setTimeout(() => {
      setStarting(false);
      setStartCover(false);
      setMissionLoading(true);

      playLoadingSound();
    }, 700);

    setTimeout(() => {
      setMissionLoading(false);
      stopLoadingSound();
      setShowMission(true);
    }, 2700);
  };

  // PAGE NAVIGATION
  const navigate = (href: string) => {
    window.dispatchEvent(
      new CustomEvent("page-transition", {
        detail: href,
      })
    );
  };

  // KEYBOARD CONTROL
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    // SYSTEM INTRO
    if (showIntro) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();

        startBGM();

        sessionStorage.setItem(
          "system-entered",
          "true"
        );

        setShowIntro(false);
      }

      return;
    }

    // BLOCK DURING MISSION
    if (
      showMission ||
      starting ||
      missionLoading
    ) {
      return;
    }

    const currentIndex = links.findIndex(
      ([label]) => label === active
    );

    // LEFT / UP
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowUp"
    ) {
      e.preventDefault();

      const newIndex =
        currentIndex <= 0
          ? links.length - 1
          : currentIndex - 1;

      setActive(links[newIndex][0]);
      playSelectSound();

      return;
    }

    // RIGHT / DOWN
    if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown"
    ) {
      e.preventDefault();

      const newIndex =
        currentIndex >= links.length - 1
          ? 0
          : currentIndex + 1;

      setActive(links[newIndex][0]);
      playSelectSound();

      return;
    }

    // ENTER
    if (e.key === "Enter") {
      e.preventDefault();

      const currentLink = links[currentIndex];

      if (!currentLink) return;

      const [label, href] = currentLink;

      if (label === "START") {
        handleClick(label);
      } else {
        playClickSound();

        window.dispatchEvent(
          new CustomEvent("page-transition", {
            detail: href,
          })
        );
      }

      return;
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [
  active,
  showIntro,
  showMission,
  starting,
  missionLoading,
]);

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
        <source
          src="/wallpaper.mp4"
          type="video/mp4"
        />
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
                  onMouseEnter={() => {
                    if (active !== label) {
                      setActive(label);
                      playSelectSound();
                    }
                  }}
                  onClick={(e) => {
                    if (label === "START") {
                      e.preventDefault();
                      handleClick(label);
                      return;
                    }

                    e.preventDefault();

                    playClickSound();
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
      {!showMission &&
        !showIntro &&
        !starting && (
          <div
            className="game-cursor-glow"
            style={{
              left: mouse.x,
              top: mouse.y,
            }}
          />
        )}

      {/* START FADE */}
      {startCover && (
        <div className="start-sequence" />
      )}

      {/* MISSION LOADING */}
      {missionLoading && (
        <div className="mission-loading">
          <div className="mission-loading-label">
            LOADING MISSION...
          </div>

          <div className="mission-loading-bar">
            <div className="mission-loading-fill" />
          </div>

          <div className="mission-loading-status">
            <span>SYSTEM PROCESSING</span>
            <span>100%</span>
          </div>
        </div>
      )}

      {/* MISSION SYSTEM */}
      {showMission && (
        <MissionSystem
          onContinue={() => {
            setShowMission(false);
            setActive("START");
          }}
        />
      )}

      {/* BACKGROUND CREDIT */}
      <div className="background-credit">
        <span>BACKGROUND ART</span>
        <strong>
          Source by:steamcommunity.com
        </strong>
      </div>

      {/* INITIAL SYSTEM */}
      {showIntro && (
        <SystemIntro
          onStart={() => {
            startBGM();

            sessionStorage.setItem(
              "system-entered",
              "true"
            );

            setShowIntro(false);
          }}
        />
      )}
    </>
  );
}