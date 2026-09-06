import { Link } from "wouter";
import { CheckCircle, Clock, Target, Zap, Award, ArrowRight, ShieldCheck } from "lucide-react";

const PROGRAMS = [
  {
    color: "#22c55e",
    badge: "🟢",
    level: "Beginners Program",
    duration: "Recommended: 6–9 Months",
    tagline: "Build the Foundation",
    image: "/images/BeginnersProgram_d72d49a3.webp",
    desc: "Perfect for children and adults who are new to fencing.",
    focus: [
      "Introduction to the sport of fencing",
      "Fundamental movement and coordination skills",
      "Basic footwork and blade work",
      "Safety rules and equipment",
      "Fun games to develop agility, balance, and reaction",
      "Building confidence and discipline",
    ],
    goal: "Develop a love for fencing while learning the essential fundamentals.",
    link: "/programs/beginners",
    selection: false,
  },
  {
    color: "#3b82f6",
    badge: "🔵",
    level: "Elementary Program",
    duration: "Recommended: 12–24 Months",
    tagline: "Develop Skills & Confidence",
    image: "/images/IMG_8600_1e53a21c.webp",
    desc: "Once fundamentals are mastered, fencers begin refining technique and improving athletic abilities.",
    focus: [
      "Technical skill development",
      "Better footwork and weapon control",
      "Physical conditioning and coordination",
      "Introduction to simple tactical concepts",
      "Practice bouts and internal competitions",
    ],
    goal: "Build strong technical foundations and prepare for competitive fencing.",
    link: "/programs/elementary",
    selection: false,
  },
  {
    color: "#f97316",
    badge: "🟠",
    level: "Intermediate Program",
    duration: "Recommended: 2–4 Years",
    tagline: "Think Like a Fencer",
    image: "/images/IMG_8358_31c813a8.webp",
    desc: "Athletes begin combining technical excellence with tactical decision-making on the strip.",
    focus: [
      "Advanced technical skills",
      "Tactical thinking and bout strategy",
      "Distance and timing control",
      "Physical conditioning for performance",
      "Video analysis and match review",
      "Participation in district and state competitions",
    ],
    goal: "Develop complete fencers capable of competing confidently at higher levels.",
    link: "/programs/intermediate",
    selection: false,
  },
  {
    color: "#c8102e",
    badge: "🔴",
    level: "Competitive Program",
    duration: "Selection by coach",
    tagline: "Train to Win",
    image: "/images/athletes-competition_2cb2abde.jpg",
    desc: "Designed for dedicated athletes aspiring to compete at national and international levels.",
    focus: [
      "High-performance technical and tactical training",
      "Individualized coaching & performance analysis",
      "Competition planning and tournament prep",
      "Strength & conditioning",
      "Mental preparation & video reviews",
      "National and international tournament exposure",
    ],
    goal: "Prepare athletes to excel at National Championships, Asian Championships, and Olympic pathways.",
    link: "/programs/competitive",
    selection: true,
  },
];

export default function ProgramsSection() {
  return (
    <div className="bg-white">
      {/* HERO BANNER */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
      >
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <p className="text-[#ff6b6b] font-semibold uppercase tracking-widest text-sm mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>
            Training Programs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "Fira Sans, sans-serif" }}>
            Our Programs
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            At En Garde Fencing Academy, every fencer follows a structured pathway designed to build strong fundamentals, develop advanced skills, and prepare for national and international competition.
          </p>
        </div>
      </section>

      {/* CORE PROGRAM CARDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {PROGRAMS.map((p) => (
              <div
                key={p.level}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.level}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-sm font-bold uppercase tracking-wider">{p.tagline}</span>
                    <span className="text-xs bg-white/20 backdrop-blur px-2.5 py-1 rounded-full">{p.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{p.badge}</span>
                      <h3 className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        {p.level}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-bold text-[#0d1f3c] uppercase tracking-wide mb-2">Focus Areas</div>
                      <ul className="space-y-1.5">
                        {p.focus.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                            <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-500 max-w-[60%]">
                      <strong className="text-[#0d1f3c]">Goal: </strong>{p.goal}
                    </div>
                    <Link
                      href={p.link}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c8102e] hover:text-[#0d1f3c] transition-colors"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED PROGRAMS ROW (Private Lessons, S&C, Open Fencing) */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1 bg-[#c8102e] mb-3 rounded" />
            <h2 className="text-3xl font-extrabold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Specialized Training & Sparring
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mt-2">
              Accelerate your performance with tailored one-on-one sessions, athletic conditioning, and electric bouting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Private Lessons */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/PrivateFencingLessons_11414a46.webp"
                  alt="Private Fencing Lessons"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                    Private Lessons
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    1-on-1 personalized master lessons with Coach Shweta and NIS coaches. Tailored tactical and blade refinement.
                  </p>
                  <div className="text-xs text-gray-500 font-semibold mb-4">
                    ₹500 / 20-min focused session
                  </div>
                </div>
                <Link
                  href="/programs/private-lessons"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8102e] hover:text-[#0d1f3c]"
                >
                  View Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Strength & Conditioning */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/Snc_e2e219e3.webp"
                  alt="Strength & Conditioning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                    Strength & Conditioning
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Fencing-specific athletic development, rotational core power, explosiveness, and injury prevention with sports physiotherapists.
                  </p>
                  <div className="text-xs text-gray-500 font-semibold mb-4">
                    Built for competitive durability
                  </div>
                </div>
                <Link
                  href="/programs/strength-conditioning"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8102e] hover:text-[#0d1f3c]"
                >
                  View Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Open Fencing */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="/images/OpenFencing_6e32dac3.webp"
                  alt="Open Fencing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                    Open Fencing
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Unstructured bouting sessions on full electric scoring strips. Test tactics against fencers from different weapons and clubs.
                  </p>
                  <div className="text-xs text-gray-500 font-semibold mb-4">
                    Wed, Fri & Sunday sessions
                  </div>
                </div>
                <Link
                  href="/programs/open-fencing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8102e] hover:text-[#0d1f3c]"
                >
                  View Details <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
        <div className="container mx-auto px-4 max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>
            Ready to Start Your Fencing Journey?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Join one of Pune's leading fencing academies. We welcome children from 6 years onwards, teenagers, and adults of all skill levels.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/enroll" className="bg-[#c8102e] text-white font-bold rounded-lg px-8 py-3 hover:bg-[#a00d25] transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-semibold rounded-lg px-8 py-3 hover:bg-white hover:text-[#0d1f3c] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
