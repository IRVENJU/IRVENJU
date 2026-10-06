"use client";

import { useEffect, useState } from "react";

type Props = {
  onStart: () => void;
};

export default function SystemIntro({ onStart }: Props) {
  const [progress, setProgress] = useState(0);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min(
        100,
        Math.floor((elapsed / duration) * 100)
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setOnline(true);
        }, 500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-intro">
      <div className="system-intro-content">

        {!online ? (
          <>
            <div className="system-label">
              SYSTEM INITIALIZING...
            </div>

            <div className="system-progress">
              <div
                className="system-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="system-progress-info">
              <span>LOADING SYSTEM</span>
              <span>{progress}%</span>
            </div>
          </>
        ) : (
          <>
            <div className="system-online-text">
              SYSTEM ONLINE
            </div>

            <div className="system-welcome">
              WELCOME, PLAYER.
            </div>

            <button
              className="system-start-button"
              onClick={onStart}
            >
              START
            </button>
          </>
        )}

      </div>
    </div>
  );
}