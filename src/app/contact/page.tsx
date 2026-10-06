import { ArrowUpRight, Mail, Github, Instagram } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import BackHome from "@/components/BackHome";

export default function Contact() {
  return (
    <>
      <BackHome />

      <div className="relative z-10 container-main pt-40 pb-24 min-h-screen">
        <p className="mono text-xs text-cyan tracking-[.3em]">
          04 / CONTACT
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-[-.05em]">
          Let's Connect.
        </h1>

        <p className="max-w-xl text-zinc-500 leading-7 mt-8">
          ingin berkolaborasi, atau sekadar ingin mengobrol tentang teknologi?
          just call me
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-14 max-w-3xl">
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card rounded-2xl p-6 hover:border-cyan/40"
          >
            <Github size={20} />

            <p className="mt-8 text-sm">
              GitHub{" "}
              <ArrowUpRight className="inline" size={13} />
            </p>
          </a>

          <a
            href={portfolio.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card rounded-2xl p-6 hover:border-cyan/40"
          >
            <Instagram size={20} />

            <p className="mt-8 text-sm">
              Instagram{" "}
              <ArrowUpRight className="inline" size={13} />
            </p>
          </a>

          <a
            href={portfolio.socials.email}
            className="card rounded-2xl p-6 hover:border-cyan/40"
          >
            <Mail size={20} />

            <p className="mt-8 text-sm">
              Email{" "}
              <ArrowUpRight className="inline" size={13} />
            </p>
          </a>
        </div>
      </div>
    </>
  );
}