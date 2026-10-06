import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import BackHome from "@/components/BackHome";

export default function Projects() {
 return (
  <>
    <BackHome />

    <div className="relative z-10 container-main pt-40 pb-24">
      <p className="mono text-xs text-cyan tracking-[.3em]">
        02 / PROJECTS
      </p>

      <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-[-.05em]">
        Selected Work.
      </h1>

      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {portfolio.projects.map((project, i) => (
          <Link
            key={project.title}
            href={project.link}
            className="card rounded-3xl p-7 min-h-72 transition duration-300 group"
          >
            <div className="flex justify-between">
              <span className="mono text-xs text-cyan">
                0{i + 1}
              </span>

              <ArrowUpRight
                size={18}
                className="text-zinc-600 group-hover:text-cyan transition"
              />
            </div>

            <p className="mono text-[10px] text-zinc-600 mt-14 tracking-widest">
              {project.category}
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              {project.title}
            </h2>

            <p className="text-sm text-zinc-500 leading-6 mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="text-[10px] border border-white/10 rounded-full px-2 py-1 text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);}