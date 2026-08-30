import { Award, Users, Zap, Trophy } from "lucide-react";
import { Link } from "wouter";

const STATS = [
  { icon: Award, value: "Certified", label: "Coaches" },
  { icon: Users, value: "200+", label: "Trained So Far" },
  { icon: Trophy, value: "Many", label: "State, National & International Medals" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-fencing.jpg')" }}
      />
      {/* Multi-layer overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/95 via-[#0d1f3c]/75 to-[#0d1f3c]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/80 via-transparent to-[#0d1f3c]/40" />

      {/* Red accent bar — top left */}
      <div
        className="absolute top-0 left-0 w-2 h-full"
        style={{ background: "linear-gradient(to bottom, #c8102e, #a00d24)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-36 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#c8102e]" />
            <span
              className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm"
              style={{ fontFamily: "Fira Sans, sans-serif" }}
            >
              Pune's Premier Fencing Academy
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-white font-display leading-none mb-6"
            style={{
              fontFamily: "Fira Sans, sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.05,
            }}
          >
            BUILDING CHAMPIONS
            <br />
            <span style={{ color: "#c8102e" }}>ON AND OFF</span>
            <br />
            THE PISTE
          </h1>

          {/* Sub-headline */}
          <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            World-class fencing training for athletes of all levels — from first-time beginners
            to national competitors. NIS A-grade certified coaching, structured programs, and
            a community built on discipline, respect, and excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/enroll" className="btn-primary text-base px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/partners" className="btn-outline text-base px-8 py-4">
              School Partnerships
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)" }}
                >
                  <Icon size={20} color="#c8102e" />
                </div>
                <div>
                  <div
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "Fira Sans, sans-serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-white/60 text-xs tracking-wide uppercase">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
