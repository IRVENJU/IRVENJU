
import {
  ArrowUpRight,
  Mail,
  Github,
  Instagram,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import BackHome from "@/components/BackHome";
import styles from "./contact.module.css";

const socialLinks = [
  {
    name: "GitHub",
    href: portfolio.socials.github,
    Icon: Github,
  },
  {
    name: "Instagram",
    href: portfolio.socials.instagram,
    Icon: Instagram,
  },
  {
    name: "Email",
    href: portfolio.socials.email,
    Icon: Mail,
  },
];

export default function Contact() {
  return (
    <>
      <BackHome />

      <main className={styles.contactPage}>
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/contact-bg.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.videoOverlay} />

        <div className={styles.container}>
          <p className={styles.eyebrow}>
            04 / CONTACT
          </p>

          <h1 className={styles.heading}>
            Let's Connect.
          </h1>

          <p className={styles.description}>
            Ingin berkolaborasi atau sekadar mengobrol
            tentang teknologi? Just call me.
          </p>

          <div className={styles.socialGrid}>
            {socialLinks.map(({ name, href, Icon }) => {
              const isEmail = name === "Email";

              const linkHref =
                isEmail && href && !href.startsWith("mailto:")
                  ? `mailto:${href}`
                  : href;

              return (
                <a
                  key={name}
                  href={linkHref}
                  target={isEmail ? undefined : "_blank"}
                  rel={
                    isEmail
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={styles.socialCard}
                >
                  <Icon
                    size={22}
                    className={styles.socialIcon}
                    aria-hidden="true"
                  />

                  <span className={styles.socialLabel}>
                    {name}
                    <ArrowUpRight
                      size={16}
                      className={styles.arrow}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}