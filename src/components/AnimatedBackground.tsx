"use client";
export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="ambient z-0" />
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              animation: `float${i % 3} ${7 + (i % 5)}s ease-in-out infinite alternate`,
              opacity: 0.25 + (i % 4) * 0.12,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes float0 { from { transform: translate(0,0); } to { transform: translate(35px,-45px); } }
        @keyframes float1 { from { transform: translate(0,0); } to { transform: translate(-40px,30px); } }
        @keyframes float2 { from { transform: translate(0,0); } to { transform: translate(25px,55px); } }
      `}</style>
    </>
  );
}
