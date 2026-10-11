
"use client";

import Link from "next/link";
import { ArrowUpRight, Swords } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import BackHome from "@/components/BackHome";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <main className={styles.page}>
      {/* Background video */}
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/projects-bg.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />
      <div className={styles.gridBackground} />

      <BackHome />

      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Swords size={15} />
            <span>HUNTER ARCHIVE / 02</span>
          </div>

          <h1 className={styles.title}>
            Selected <span>Work.</span>
          </h1>

          <p className={styles.subtitle}>
            A collection of projects, experiments, and skills developed
            throughout my journey in technology.
          </p>

          <div className={styles.status}>
            <span className={styles.statusDot} />
            SYSTEM DATABASE: {portfolio.projects.length} PROJECTS FOUND
          </div>
        </div>

        <div className={styles.projectGrid}>
          {portfolio.projects.map((project, i) => (
            <Link
              key={project.title}
              href={project.link}
              className={styles.projectCard}
            >
              <div className={styles.cardTop}>
                <span className={styles.projectNumber}>
                  PROJECT_{String(i + 1).padStart(2, "0")}
                </span>

                <span className={styles.arrow}>
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.category}>{project.category}</p>

                <h2 className={styles.projectTitle}>{project.title}</h2>

                <p className={styles.description}>
                  {project.description}
                </p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.stack}>
                  {project.stack.map((item) => (
                    <span key={item} className={styles.stackTag}>
                      {item}
                    </span>
                  ))}
                </div>

                <span className={styles.viewProject}>
                  ACCESS <ArrowUpRight size={13} />
                </span>
              </div>

              <div className={styles.cardAccent} />
            </Link>
          ))}
        </div>

        <footer className={styles.footer}>
          <span>REFI. / PERSONAL DATABASE</span>
          <span>END OF RECORDS</span>
        </footer>
      </section>
    </main>
  );
}