
"use client";

import BackHome from "@/components/BackHome";
import { portfolio } from "@/data/portfolio";

const skillStats = [
  {
    name: "NETWORKING",
    short: "𖣘",
    level: 80,
    rank: "A",
  },
  {
    name: "PROBLEM SOLVING",
    short: "𓆩✧𓆪",
    level: 85,
    rank: "A",
  },
  {
    name: "CYBERSECURITY",
    short: "𖤓",
    level: 70,
    rank: "B",
  },
  {
    name: "PROGRAMMING",
    short: "✮",
    level: 65,
    rank: "C",
  },
  {
    name: "WEB DEVELOPMENT",
    short: "◈",
    level: 75,
    rank: "B",
  },
  {
    name: "LINUX",
    short: "⌘",
    level: 70,
    rank: "B",
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
                <span>AGE</span>
                <strong>16 YEARS</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>IT STUDENT</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>{portfolio.location}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education-section">
          <div className="education-header">
            <div>
              <span>My Educational Journey</span>
              <h3>EDUCATION</h3>
            </div>

            <div className="education-status">
              ACADEMIC RECORD
            </div>
          </div>

          <div className="education-list">
            {portfolio.education?.map((item, index) => (
              <div
                className="education-item"
                key={`${item.school}-${index}`}
              >
                <div className="education-year">
                  {item.year}
                </div>

                <div className="education-line">
                  <span />
                </div>

                <div className="education-content">
                  <span className="education-label">
                    EDUCATION #{String(index + 1).padStart(2, "0")}
                  </span>

                  <h4>
                    {item.school}
                  </h4>

                  <strong>
                    {item.major}
                  </strong>

                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOBBIES */}
        <section className="hobbies-section">
          <div className="hobbies-header">
            <div>
              <span>ALL CARD COLLECTIONS</span>
              <h3>HOBBIES</h3>
            </div>

            <div className="hobbies-status">
              ALL MY HOBBIES
            </div>
          </div>

          <div className="hobbies-list">
            {[
              {
  name: "Gaming",
  image: "/Hobbies/Gaming.jpg",
  type: "RECREATION",
  rarity: "MYTHIC",
  icon: "◉",
},
{
  name: "Football",
  image: "/Hobbies/Football.jpg",
  type: "PHYSICAL",
  rarity: "UNCOMMON",
  icon: "⚡",
},
{
  name: "Swimming",
  image: "/Hobbies/swimming.jpg",
  type: "PHYSICAL",
  rarity: "UNCOMMON",
  icon: "◇",
},
{
  name: "Exploring Technology",
  image: "/Hobbies/Tecnology.jpg",
  type: "EXPLORATION",
  rarity: "EPIC",
  icon: "✦",
},
{
  name: "Adventure",
  image: "/Hobbies/Adventure.jpg",
  type: "ADVENTURE",
  rarity: "LEGENDARY",
  icon: "◆",
},
            ].map((hobby, index) => (
              <div
                className="hobby-card"
                key={hobby.name}
              >
                <div className="hobby-card-inner">

                  {/* FRONT */}
                  <div className="hobby-face hobby-front">
                    <div className="hobby-card-glow" />

                    <div className="hobby-image">
                      <img
                        src={hobby.image}
                        alt={hobby.name}
                      />

                      <div className="hobby-image-overlay" />

                      <span className="hobby-card-number">
                        #{String(index + 1).padStart(3, "0")}
                      </span>

                      <span className="hobby-rarity">
                        {hobby.rarity}
                      </span>
                    </div>

                    <div className="hobby-card-info">
                      <span className="hobby-type">
                        {hobby.type}
                      </span>

                      <h4>
                        {hobby.name}
                      </h4>

                      <div className="hobby-card-bottom">
                        <span>
                          PLAYER ACTIVITY
                        </span>

                        <strong>
                          {hobby.icon}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="hobby-face hobby-back">
                    <span className="hobby-back-title">
                      PLAYER ACTIVITY
                    </span>

                    <div className="hobby-back-symbol">
                      {hobby.icon}
                    </div>

                    <h4>
                      {hobby.name}
                    </h4>

                    <div className="hobby-back-line" />

                    <div className="hobby-back-data">
                      <span>CATEGORY</span>
                      <strong>
                        {hobby.type}
                      </strong>
                    </div>

                    <div className="hobby-back-data">
                      <span>RARITY</span>
                      <strong>
                        {hobby.rarity}
                      </strong>
                    </div>

                    <div className="hobby-back-data">
                      <span>STATUS</span>
                      <strong>
                        ACTIVE
                      </strong>
                    </div>

                    <div className="hobby-back-footer">
                      IRVENJU PLAYER DATA
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PLAYER ATTRIBUTES */}
        <section className="attributes-section">
          <div className="attributes-header">
            <div>
              <span></span>
              <h3>PLAYER ATTRIBUTE</h3>
            </div>

            <div className="available-points">
              <span>PLAYER LEVEL</span>
              <strong>LV.{overallLevel}</strong>
            </div>
          </div>

          <div className="attributes-window">
            <div className="attribute-window-top">
              <span>PLAYER ATTRIBUTE</span>
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
                  PLAYER PROGRESS {overallLevel}%
                </small>
              </div>
            </div>

            {/* SKILLS */}
            <div className="attribute-list">
              {skillStats.map((skill) => (
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
                PLAYER ATTRIBUTE
              </span>

              <strong>
                LV.{overallLevel}
              </strong>
            </div>
          </div>
        </section>

        {/* PLAYER OBJECTIVE */}
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
                Saya terus mengembangkan kemampuan di bidang
                networking, cybersecurity, Linux, web development,
                programming, dan game development. Tujuan utama
                saya adalah berkembang menjadi seorang Game Developer.
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
                <strong>GAME DEVELOPER</strong>
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