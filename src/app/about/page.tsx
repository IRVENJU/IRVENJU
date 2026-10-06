"use client";

import BackHome from "@/components/BackHome";
import { portfolio } from "@/data/portfolio";

const skills = [
  {
    name: "NETWORKING",
    short: "𖣘",
    level: 80,
    rank: "A",
  },
  {
    name: "PROBLEM SOLVING",
    short: "𓆩✧𓆪",
    level: 75,
    rank: "B",
  },
  {
    name: "CYBERSECURITY",
    short: "𖤓",
    level: 65,
    rank: "B",
  },
  {
    name: "LEADERSHIP",
    short: "𓆩𒉭𓆪",
    level: 78,
    rank: "B",
  },
  {
    name: "PROGRAMMING",
    short: "✮",
    level: 65,
    rank: "C",
  },
];

const overallLevel = 100;

export default function About() {
  return (
    <main className="shadow-page">
      <BackHome />

      <div className="shadow-bg" />
      <div className="shadow-grid" />

      <div className="shadow-container">

        {/* HEADER */}
        <div className="system-header">
          <div>
            <span className="system-label">
              SYSTEM // PLAYER
            </span>

            <h1>
              ABOUT ME<span>.</span>
            </h1>
          </div>

          <div className="system-status">
            <span className="status-dot" />
            SYSTEM ONLINE
          </div>
        </div>

        {/* PLAYER PROFILE */}
        <section className="player-section">

          <div className="profile-image">
            <div className="profile-scan" />

            <img
              src="/profile.jpg"
              alt="Refi"
              className="profile-photo"
            />

            <div className="profile-corner top-left" />
            <div className="profile-corner top-right" />
            <div className="profile-corner bottom-left" />
            <div className="profile-corner bottom-right" />
          </div>

          <div className="player-info">
            <span className="small-label">
              PLAYER IDENTIFICATION
            </span>

            <h2>{portfolio.name}</h2>

            <p className="player-role">
              {portfolio.role}
            </p>

            <p className="player-description">
              {portfolio.about}
            </p>

            <div className="player-stats">
              <div>
                <span>USIA</span>
                <strong>16 TAHUN</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>IT ENGINEER</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{portfolio.location}</strong>
              </div>
            </div>
          </div>

        </section>

        {/* OVERALL LEVEL */}
        <section className="attributes-section">

          <div className="attributes-header">
            <div>
              <span>SYSTEM PLAYER ATRIBUT</span>
              <h3>PLAYER ATRIBUT</h3>
            </div>

            <div className="available-points">
              <span>PLAYER LEVEL</span>
              <strong>LV.{overallLevel}</strong>
            </div>
          </div>

          <div className="attributes-window">

            <div className="attribute-window-top">
              <span>PLAYER ATRIBUT</span>
            </div>

            {/* MAIN LEVEL */}
            <div className="overall-level-box">
              <div className="overall-level-number">
                <span>LV.</span>
                {overallLevel}
              </div>

              <div className="overall-level-info">
                <span>OVERALL STATS</span>

                <div className="overall-level-bar">
                  <span
                    style={{
                      width: `${overallLevel}%`,
                    }}
                  />
                </div>

                <small>
                  PLAYER PROGRES {overallLevel}%
                </small>
              </div>
            </div>

            {/* SKILLS */}
            <div className="attribute-list">

              {skills.map((skill) => (
                <div
                  className="attribute-row"
                  key={skill.name}
                >
                  <div className="attribute-type">
                    <strong>
                      {skill.short}
                    </strong>

                    <span>
                      {skill.name}
                    </span>
                  </div>

                  <div className="attribute-progress">

                    <div className="attribute-level">
                      LV.{skill.level}
                    </div>

                    <div className="attribute-bar">
                      <span
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>

                  </div>

                  <div className="skill-rank">
                    {skill.rank}
                  </div>
                </div>
              ))}

            </div>

            <div className="attribute-footer">
              <span>
                ATRIBUT PLAYER
              </span>

              <strong>
                LV.{overallLevel}
              </strong>
            </div>

          </div>
        </section>

        {/* EVOLUTION */}
        <section className="evolution-section">

          <div className="evolution-header">
            <div>
              <span></span>
              <h3>PLAYER OBJECTIVE</h3>
            </div>

            <div className="evolution-id">
              ID PLAYER IRVENJU
            </div>
          </div>

          <div className="evolution-panel">

            <div className="evolution-main">
              <span className="evolution-label">
                CURRENT OBJECTIVE
              </span>

              <h2>
                LEARN.
                <br />
                BUILD.
                <br />
                <span>EVOLVE.</span>
              </h2>

              <p>
                Saya masih mengembangkan kemampuan di bidang
                networking, programming, cybersecurity,
                Linux, web development dan game development.
              </p>
            </div>

            <div className="evolution-status">

              <div className="status-row">
                <span>LEVEL</span>
                <strong>LV.{overallLevel}</strong>
              </div>

              <div className="status-row">
                <span>STATUS</span>
                <strong>LEARNING</strong>
              </div>

              <div className="status-row">
                <span>SYSTEM</span>
                <strong>ONLINE</strong>
              </div>

              <div className="status-row">
                <span>NEXT TARGET</span>
                <strong>CYBERSECURITY</strong>
              </div>

              <div className="status-line">
                <span />
              </div>

              <a
                href="/projects"
                className="evolution-button"
              >
                VIEW PROJECTS
                <span>→</span>
              </a>

            </div>
          </div>

          <div className="evolution-footer">
            <span>NO FINAL FORM</span>
            <span>KEEP MOVING // KEEP EVOLVING</span>
          </div>

        </section>

      </div>
    </main>
  );
}