"use client";

import { useState } from "react";

const missions = [
{
id: "01",
title: "ARKASI AI",
status: "IN PROGRESS",
description: "Develop an AI assistant for TEKNISI ARKASI.",
},
{
id: "02",
title: "REFI PORTFOLIO",
status: "IN PROGRESS",
description: "Build a tactical personal portfolio system.",
},
{
id: "03",
title: "NETWORK LAB",
status: "ACTIVE",
description: "Improve networking, Linux, and infrastructure skills.",
},
];

type MissionSystemProps = {
onContinue?: () => void;
};

export default function MissionSystem({
onContinue,
}: MissionSystemProps) {
const [current, setCurrent] = useState(0);

const mission = missions[current];

const previousMission = () => {
setCurrent((prev) =>
prev === 0 ? missions.length - 1 : prev - 1
);
};

const nextMission = () => {
setCurrent((prev) =>
prev === missions.length - 1 ? 0 : prev + 1
);
};

return ( <div className="mission-system"> <div className="mission-system-header"> <span>SYSTEM</span> <span>01:26</span> </div>

  <div className="mission-system-title">
    CURRENT MISSIONS
  </div>

  <div className="mission-card">
    <div className="mission-number">
      {mission.id}
    </div>

    <div className="mission-content">
      <span className="mission-label">
        CURRENT MISSION
      </span>

      <h2>{mission.title}</h2>

      <div className="mission-status">
        ● {mission.status}
      </div>

      <p>{mission.description}</p>
    </div>
  </div>

  <div className="mission-navigation">
    <button
      type="button"
      onClick={previousMission}
      aria-label="Previous mission"
    >
      ‹
    </button>

    <div className="mission-dots">
      {missions.map((_, index) => (
        <span
          key={index}
          className={
            index === current
              ? "mission-dot active"
              : "mission-dot"
          }
        />
      ))}
    </div>

    <button
      type="button"
      onClick={nextMission}
      aria-label="Next mission"
    >
      ›
    </button>
  </div>

  <button
    type="button"
    className="mission-continue"
    onClick={onContinue}
  >
    CONTINUE
  </button>
</div>
);
}
