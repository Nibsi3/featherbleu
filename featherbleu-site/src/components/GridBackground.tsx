"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#2979FF]/5" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#2979FF]/[0.07] blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#2979FF]/[0.05] blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-black/[0.02] blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "4s" }} />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Geometric accent lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="70%" y1="0" x2="30%" y2="100%" stroke="#2979FF" strokeWidth="0.5" opacity="0.08" />
        <line x1="80%" y1="0" x2="40%" y2="100%" stroke="#000" strokeWidth="0.5" opacity="0.04" />
        <line x1="90%" y1="0" x2="50%" y2="100%" stroke="#2979FF" strokeWidth="0.5" opacity="0.06" />
      </svg>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
