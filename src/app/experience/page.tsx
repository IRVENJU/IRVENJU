import { portfolio } from "@/data/portfolio";
import BackHome from "@/components/BackHome";

export default function Experience() {
  return (
    <>
      <BackHome />

      <div className="relative z-10 container-main pt-40 pb-24">
        <p className="mono text-xs text-cyan tracking-[.3em]">
          03 / EXPERIENCE
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-[-.05em]">
          My Journey.
        </h1>

        <div className="mt-16 max-w-4xl">
          {portfolio.experience.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[130px_1fr] gap-6 py-10 border-t border-white/10"
            >
              <p className="mono text-xs text-cyan">
                {item.year}
              </p>

              <div>
                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-sm text-zinc-500 mt-2">
                  {item.organization}
                </p>

                <p className="text-zinc-500 leading-7 mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}