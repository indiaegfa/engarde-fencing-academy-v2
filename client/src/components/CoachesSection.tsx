import { Link } from "wouter";

const COACHES = [
  {
    name: "Shweta Avad",
    title: "Head Coach & Founder",
    photo: "/images/ShwetaChandaliyaAvad_7d7241d5.jpg",
    philosophy:
      "I simply love fencing. What fascinates me most is the silent conversation between two fencers on the piste—no words, only actions, strategy, and instinct. It's a language of its own, and I never want to put my weapon down. I love coaching at every level—from beginners taking their first steps to athletes preparing for competition. There's no greater joy than hearing a student say, 'Ma'am, I applied this skill and got a touché.' Those moments make everything worthwhile.",
    credentials: [
      "Represented India at Senior World Fencing Championships — 2005 (Germany) & 2007 (Russia)",
      "Recipient of the Shree Shiv Chhatrapati Award — Maharashtra's highest honour for Excellence in Sports",
      "NIS Certified Coach, 2021, Punjab",
      "Advanced Coaching with Italian Fencing Masters (Italy) in 2025",
      "Former National Champion & Veteran National Gold Medalist",
      "Master's degree in Computer Science; 15 years in IT before pursuing fencing full-time",
      "5 years of coaching experience producing elite athletes",
    ],
    highlight: true,
  },
  {
    name: "Bommai Thingbaijam",
    title: "Fencing Coach",
    photo: "/images/Coach_Bommai_3b0f57f3.webp",
    philosophy:
      "Empowering Indian fencers to excel through resilience, discipline, and strategic thinking. Focusing on technical mastery, mental toughness, and positive growth, in a supportive environment that drives excellence, adaptability, and holistic development, promoting a culture of effort, progress, and sportsmanship in India's growing fencing.",
    credentials: [
      "5 years of coaching experience, including an internship at SAI, Guwahati",
      "Bachelor's degree in Physical Education; NIS diploma in fencing",
      "National Medalist",
    ],
    highlight: false,
  },
  {
    name: "Surabhi Puranik",
    title: "Sports Physiotherapist",
    photo: "/images/Surabhi_Coach_7f3c994f.webp",
    philosophy:
      "As a sports physiotherapist for fencers, my philosophy is to build resilient, high-performing athletes through a balance of rehabilitation, prevention, and performance training. I go beyond treating injuries by addressing their root causes and guiding athletes back to sport safely and confidently. My goal is to help athletes perform at their best while maintaining long-term health and durability.",
    credentials: [
      "Masters in Sports Physiotherapy (MPT Sports)",
      "5 years of clinical and on-field experience",
      "Certified Pilates Trainer; Manual Therapy; CPCR; Taping & Dry Needling",
    ],
    highlight: false,
  },
  {
    name: "Victor Oinam",
    title: "Fencing Coach",
    photo: "/images/Coach_Victor_4910d054.webp",
    philosophy:
      "Fencing is not just a sport for me—it is my life. My mission is to build elite fencers by giving my athletes the opportunities and guidance I once dreamed of. I am fully committed to their daily growth, with unwavering support, complete dedication, and personal attention to every athlete. My ultimate dream is to hear the Indian National Anthem echo on the international fencing podium and watch the Indian flag rise with pride—through the success of my athletes.",
    credentials: [
      "5 years of coaching experience; previous roles in Punjab, Manipur and Goa; internship at ASI, Pune",
      "10 years at Army Sports Institute; 2 years at SAI Manipur; trained under Ukrainian & Russian coaches",
      "Asian Championship Medalist & National Medalist",
      "NIS diploma in fencing",
    ],
    highlight: false,
  },
  {
    name: "Benish Thingbaijam",
    title: "Junior Fencing Coach",
    photo: "/images/Coach_Benish_09ff7ac2.webp",
    philosophy: null,
    credentials: [
      "National Medallist",
      "Works extensively with underprivileged, talented fencers through the Kosuke Sports Foundation",
      "Teaches fencing in schools across Pune",
    ],
    highlight: false,
  },
];

export default function CoachesSection() {
  const headCoach = COACHES[0];
  const teamCoaches = COACHES.slice(1);

  return (
    <div className="bg-white">
      {/* ── HERO BANNER ── */}
      <section
        className="relative py-20"
        style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
      >
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <p
            className="text-[#ff6b6b] font-semibold uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Our Team
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Coaching Staff
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Meet the people who inspire, coach, and support every athlete on their journey from beginner to champion.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATION PILL STRIP ── */}
      <section className="py-6 border-b border-gray-100" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "NIS A-Grade Certified Coaching",
              "International Competition Experience",
              "Shiv Chhatrapati Award Recipients",
              "Asian & World Championship Background",
            ].map((pill) => (
              <div
                key={pill}
                className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 text-sm font-semibold text-[#0d1f3c]"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEAD COACH SPOTLIGHT ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo Column with floating badge */}
            <div className="relative">
              <img
                src={headCoach.photo}
                alt={headCoach.name}
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: 480 }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div
                  className="font-bold text-[#0d1f3c] text-xl"
                  style={{ fontFamily: "Fira Sans, sans-serif" }}
                >
                  {headCoach.name}
                </div>
                <div className="text-[#c8102e] font-semibold text-sm">
                  {headCoach.title}
                </div>
              </div>
            </div>

            {/* Bio & Credentials Column */}
            <div>
              <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2
                className="text-3xl font-bold text-[#0d1f3c] mb-2"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                {headCoach.name}
              </h2>
              <div className="text-[#c8102e] font-semibold mb-6">
                {headCoach.title}
              </div>

              <blockquote className="border-l-4 border-[#c8102e] pl-4 mb-6 italic text-gray-700 leading-relaxed text-sm">
                "{headCoach.philosophy}"
              </blockquote>

              <div className="space-y-3">
                {headCoach.credentials.map((cred) => (
                  <div key={cred} className="border-l-2 border-[#c8102e]/30 pl-3">
                    <span className="text-gray-700 text-sm leading-relaxed">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM SECTION (FULL-WIDTH ALTERNATING ARTICLES WITH HUGE PHOTOS) ── */}
      <section className="pt-20" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl text-center pb-14">
          <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
          <p className="text-[#c8102e] uppercase tracking-[0.22em] text-xs font-bold mb-3">
            Meet the Team
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0d1f3c]"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Coaches & Support Staff
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Each specialist brings a distinct perspective, deep experience, and genuine commitment to every athlete's progress.
          </p>
        </div>

        {teamCoaches.map((coach, idx) => (
          <article
            key={coach.name}
            className={idx % 2 === 0 ? "bg-white border-t border-gray-100" : "bg-[#f8f9fc] border-t border-gray-100"}
          >
            <div className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Photo (Huge 420-520px portrait) */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-[#0d1f3c]">
                    <img
                      src={coach.photo}
                      alt={coach.name}
                      className={`w-full h-[420px] md:h-[520px] object-cover ${
                        ["Benish Thingbaijam", "Victor Oinam", "Surabhi Puranik"].includes(coach.name)
                          ? "object-top"
                          : "object-center"
                      } transition-transform duration-500 hover:scale-[1.02]`}
                    />
                  </div>
                </div>

                {/* Text & Credentials */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-12 h-1 bg-[#c8102e] rounded" />
                    <span className="text-[#c8102e] text-xs font-bold tracking-[0.22em] uppercase">
                      Team Profile 0{idx + 2}
                    </span>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-3"
                    style={{ fontFamily: "Fira Sans, sans-serif" }}
                  >
                    {coach.name}
                  </h3>

                  <p className="text-[#c8102e] font-bold text-lg mb-7">
                    {coach.title}
                  </p>

                  {coach.philosophy && (
                    <blockquote className="border-l-4 border-[#c8102e] pl-5 mb-8 italic text-gray-700 leading-relaxed text-base md:text-lg">
                      “{coach.philosophy}”
                    </blockquote>
                  )}

                  <div className="space-y-3">
                    {coach.credentials.map((cred) => (
                      <div key={cred} className="border-l-2 border-[#c8102e]/30 pl-4 py-0.5">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {cred}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CALL TO ACTION ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center text-white">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Train Under World-Class Coaches
          </h2>
          <p className="text-white/80 mb-8">
            Join En Garde Fencing Academy and be guided by coaches with international experience, national titles, and a passion for developing champions.
          </p>
          <Link
            href="/enroll"
            className="inline-block bg-[#c8102e] text-white font-bold rounded-lg px-8 py-3 hover:bg-[#a00d25] transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
