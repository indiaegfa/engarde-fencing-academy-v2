import { Link } from "wouter";

const ACHIEVEMENTS = [
  { icon: "🌍", count: "2", label: "International Medals", sub: "Representation at international tournaments" },
  { icon: "🥇", count: "35", label: "National Medals", sub: "National champions across multiple age categories" },
  { icon: "🏆", count: "77", label: "State Medals", sub: "Multiple State Champions across different age groups" },
  { icon: "🤺", count: "210+", label: "Fencers Trained", sub: "Through our academy ecosystem" },
];

const BENEFITS = [
  { icon: "🧠", title: "Builds Sharp Minds", desc: "Fencing is often called 'physical chess' — it demands split-second decision-making, pattern recognition, and strategic thinking under pressure." },
  { icon: "💪", title: "Full-Body Fitness", desc: "Fencing develops explosive speed, agility, coordination, balance, and endurance — a complete athletic workout." },
  { icon: "🎯", title: "Develops Laser Focus", desc: "The intense concentration required in fencing directly translates to better academic performance and improved attention in everyday life." },
  { icon: "🛡️", title: "Builds Confidence & Resilience", desc: "Learning to face an opponent, handle pressure, and bounce back from setbacks builds unshakeable self-confidence." },
  { icon: "🤝", title: "Teaches Respect & Discipline", desc: "Fencing has a strong tradition of sportsmanship — athletes learn to respect their opponents, coaches, and the rules of the sport." },
  { icon: "🌍", title: "Gateway to Global Opportunities", desc: "Fencing is an Olympic sport practiced worldwide — opening doors to international exposure, scholarships, and recognition." },
];

const COMPETITION_PATHWAY = [
  { icon: "🏫", level: "School Competitions", items: ["Zilla Parishad (ZP) School Games", "CBSE School Games", "ISSO (Indian Schools Sports Organisation)", "Kendriya Vidyalaya (KV) Games", "SGFI (School Games Federation of India)"] },
  { icon: "🎓", level: "University Competitions", items: ["Inter-College Championships", "Inter-University Championships", "All India University Games"] },
  { icon: "🤺", level: "Fencing Federation (FAI)", items: ["Under 10 (Mini) · Under 12 (Child)", "Under 14 (Sub Junior) · Under 17 (Cadet)", "Under 20 (Junior) · Under 23 (Youth)", "Senior · Veteran"] },
  { icon: "🇮🇳", level: "National Multi-Sport Events", items: ["Khelo India Youth Games", "Khelo India University Games", "National Games of India"] },
  { icon: "🌏", level: "International Competitions", items: ["Asian Cadet & Junior Championships", "Asian Games", "Commonwealth Fencing Championships", "World Cups & Grand Prix", "World Championships"] },
  { icon: "🥇", level: "The Ultimate Dream — Olympics", items: ["The Olympic Games represent the pinnacle of fencing. Every training session, every competition, and every lesson is a step towards this dream."] },
];

export default function AboutSection() {
  return (
    <div className="bg-white">
      {/* HERO BANNER */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}>
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <p className="text-[#ff6b6b] font-semibold uppercase tracking-widest text-sm mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>About En Garde Fencing Academy</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "Fira Sans, sans-serif" }}>Building India's Fencing Champions</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded on a powerful belief: <em>"Olympic champions are not created by chance — they are created through strong grassroots development."</em>
          </p>
        </div>
      </section>

      {/* ACADEMY STORY */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2 className="text-3xl font-bold text-[#0d1f3c] mb-6" style={{ fontFamily: "Fira Sans, sans-serif" }}>Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that if thousands of children are introduced to fencing, the champions of tomorrow will naturally emerge. Talent exists everywhere; it simply needs the right opportunity, guidance, and environment to flourish.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En Garde Fencing Academy was established to provide young athletes with world-class coaching, modern training facilities, scientific fitness programs, quality equipment, and regular competition exposure. Every child who walks through our doors deserves the chance to discover their potential and pursue excellence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission goes beyond winning medals. We aim to build confident, disciplined, and resilient individuals while creating a pathway for Indian fencers to compete with the best in the world.
              </p>
              <blockquote className="border-l-4 border-[#c8102e] pl-4 italic text-[#1a2e5a] font-medium">
                "Every Child Deserves a Chance. Every Champion Starts Somewhere."
              </blockquote>
            </div>
            <div className="relative">
              <img src="/images/academy-group.jpg" alt="En Garde Fencing Academy team" className="rounded-2xl shadow-xl w-full object-cover" style={{ maxHeight: 420 }} />
              <div className="absolute -bottom-4 -left-4 bg-[#c8102e] text-white rounded-xl px-5 py-3 shadow-lg">
                <div className="text-2xl font-bold" style={{ fontFamily: "Fira Sans, sans-serif" }}>5+ Years</div>
                <div className="text-xs uppercase tracking-wide opacity-90">Building Champions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
            <h2 className="text-3xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>Our Achievements</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">In a short span of time, En Garde Fencing Academy has established itself as one of India's leading fencing academies, producing champions at the state, national, and international levels.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{a.icon}</div>
                <div className="text-4xl font-bold text-[#c8102e] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{a.count}</div>
                <div className="font-semibold text-[#0d1f3c] text-sm uppercase tracking-wide mb-1">{a.label}</div>
                <div className="text-gray-500 text-xs">{a.sub}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="/images/athletes-competition.jpg" alt="Athletes at competition" className="rounded-2xl shadow-md w-full object-cover" style={{ maxHeight: 280 }} />
            <img src="/images/competition-piste.jpg" alt="Competition piste" className="rounded-2xl shadow-md w-full object-cover" style={{ maxHeight: 280 }} />
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
            <h2 className="text-3xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>Meet the Founder</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <img src="/images/coach-shweta.jpg" alt="Shweta Chandaliya Avad" className="rounded-2xl shadow-xl w-full object-cover object-top" style={{ maxHeight: 440 }} />
              <div className="bg-[#0d1f3c] text-white rounded-2xl p-5">
                <div className="text-lg font-bold mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Shweta Chandaliya Avad</div>
                <div className="text-[#c8102e] text-sm font-semibold uppercase tracking-wide mb-3">Founder & Head Coach</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                  <div>🏅 Shree Shiv Chhatrapati Awardee</div>
                  <div>🌍 International Fencer</div>
                  <div>📜 NIS Certified Coach</div>
                  <div>💼 Former IT Professional (15 yrs)</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>From Passion to Purpose</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shweta's fencing journey began in school, sparked by a simple curiosity that quickly became a lifelong obsession. In an era where fencing resources and coaches in India were incredibly scarce, she relied on imported books, sheer grit, and eventual mentorship from fencing greats — including Italian master Giorgio Gurrini — to reach the pinnacle of the sport and represent India at the Senior World Championships.
              </p>
              <h4 className="font-bold text-[#0d1f3c] mb-2">Leaving the Corporate World for the Piste</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like many athletes of her generation, Shweta eventually traded her weapon for a stable career, spending 15 successful years in the IT industry. But fencing never left her heart. The turning point came with one simple question from her husband: <em>"Why don't you start a fencing academy and give the next generation everything that you never had?"</em>
              </p>
              <h4 className="font-bold text-[#0d1f3c] mb-2">The Olympic Dream</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                That single question changed her life. She left her corporate career to build En Garde Fencing Academy. Today, her mission goes far beyond teaching technique — it's about providing the world-class facilities, mentorship, and opportunities she once longed for as a young athlete. Every child who walks through the doors carries a dream. Her responsibility is to nurture that talent, break down barriers, and ultimately see Indian fencers standing proud on the Olympic podium.
              </p>
              <div className="bg-[#f8f9fc] rounded-xl p-5 border-l-4 border-[#c8102e]">
                <p className="font-semibold text-[#0d1f3c] mb-1">Mission</p>
                <p className="text-gray-700 text-sm leading-relaxed">To make fencing accessible to every child, develop world-class athletes capable of winning Olympic medals for India, and build a culture where sport becomes a lifelong habit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS FENCING */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2 className="text-3xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>New to Fencing? What is Fencing?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fencing is a super cool sport where you get to be like a real-life sword fighter — but in a safe and fun way! Two fencers face each other on a long strip called a <strong>piste</strong> and try to touch each other with their sword to score points. It's fast, smart, and full of action — like playing chess at lightning speed! ⚡
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: "Foil", desc: "Light and quick — perfect for learning skill and control." },
                  { name: "Épée", desc: "Whole body is the target — patience and precision win." },
                  { name: "Sabre", desc: "Super fast and exciting — the most explosive weapon." },
                ].map((w) => (
                  <div key={w.name} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                    <div className="text-2xl mb-2">⚔️</div>
                    <div className="font-bold text-[#0d1f3c] text-sm mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{w.name}</div>
                    <div className="text-gray-500 text-xs">{w.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">Fencing is also an Olympic sport, which means the best fencers in the world get to compete at the Olympic Games! In India, fencing is growing rapidly — and En Garde Fencing Academy is at the forefront of this exciting movement.</p>
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/hero-fencing.jpg" alt="Fencing training" className="rounded-2xl shadow-md w-full object-cover" style={{ maxHeight: 240 }} />
              <img src="/images/team-discussion.jpg" alt="Team discussion" className="rounded-2xl shadow-md w-full object-cover" style={{ maxHeight: 200 }} />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
            <h2 className="text-3xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>Why Fencing?</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Six powerful reasons why fencing is one of the best sports for your child's development.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-[#f8f9fc] rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITION PATHWAY */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
            <h2 className="text-3xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>Fencing Competition Pathway</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Fencing offers a clear and exciting competitive pathway, allowing athletes to progress from school-level events to the Olympic Games. At En Garde Fencing Academy, we prepare our fencers for every stage of this journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPETITION_PATHWAY.map((stage, i) => (
              <div key={stage.level} className={`rounded-2xl p-6 border ${i === 5 ? "bg-[#0d1f3c] text-white border-[#0d1f3c]" : "bg-white border-gray-100"}`}>
                <div className="text-2xl mb-2">{stage.icon}</div>
                <h3 className={`font-bold mb-3 text-sm uppercase tracking-wide ${i === 5 ? "text-[#c8102e]" : "text-[#0d1f3c]"}`} style={{ fontFamily: "Fira Sans, sans-serif" }}>{stage.level}</h3>
                <ul className="space-y-1">
                  {stage.items.map((item) => (
                    <li key={item} className={`text-sm flex items-start gap-2 ${i === 5 ? "text-white/80" : "text-gray-600"}`}>
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c8102e] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLEGE FENCING */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2 className="text-3xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Fencing at Colleges & Universities</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Fencing isn't just a fun sport — it's also a powerful way to boost your child's college experience and future opportunities.</p>
              <div className="space-y-4">
                {[
                  { title: "College Recruitment & Participation", desc: "Many colleges, especially in the U.S., actively recruit talented fencers for their NCAA or varsity teams. Around 30+ top colleges have competitive fencing programs." },
                  { title: "Scholarship Opportunities", desc: "Exceptional fencers may earn athletic scholarships. Even participation at a strong college level enhances access to academic and merit-based scholarships." },
                  { title: "Enhances College Applications", desc: "Fencing shows discipline, strategy, and commitment — qualities highly valued by admissions officers." },
                  { title: "Pathway to National & International Exposure", desc: "College competitions often serve as stepping stones to national and international tournaments. Talented collegiate fencers may get selected for national teams and Olympic trials." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#c8102e] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#0d1f3c] text-sm">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img src="/images/athlete-flag.jpg" alt="Young athlete with Indian flag" className="rounded-2xl shadow-xl w-full object-cover" style={{ maxHeight: 320 }} />
              <div className="bg-[#0d1f3c] rounded-2xl p-6 text-white text-center">
                <div className="text-4xl mb-2">🎓</div>
                <div className="font-bold text-lg mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Every Champion Starts Somewhere</div>
                <p className="text-white/70 text-sm">Your child's fencing journey today could lead to scholarships, national teams, and the Olympic Games tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KOSUKE SPORTS FOUNDATION */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/kosuke-team.jpg" alt="Kosuke Sports Foundation Team" className="rounded-2xl shadow-xl w-full object-cover" style={{ maxHeight: 360 }} />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-5">
                <img src="/images/kosuke-logo.png" alt="Kosuke Sports Foundation" className="h-14 w-14 object-contain rounded-lg bg-white p-1 shadow" />
                <div>
                  <div className="font-bold text-[#0d1f3c] text-lg" style={{ fontFamily: "Fira Sans, sans-serif" }}>Kosuke Sports Foundation</div>
                  <div className="text-gray-500 text-xs">Section 8 Company | 12A & 80G Certified</div>
                </div>
              </div>
              <span className="inline-block w-10 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2 className="text-3xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Empowering Talent. Transforming Lives.</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kosuke Sports Foundation (KSF) is a Section 8 non-profit (12A, 80G compliant) organization established with a simple belief: <strong>No child's dream should end because of financial limitations.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded by Shweta Chandaliya Avad, KSF works to identify talented children from underprivileged backgrounds and provide them with everything they need to succeed in fencing — from coaching and equipment to nutrition, education, and international exposure.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/donate" className="btn-primary text-sm py-2 px-5">Support the Foundation</Link>
                <Link href="/events" className="border-2 border-[#0d1f3c] text-[#0d1f3c] font-semibold rounded-lg px-5 py-2 text-sm hover:bg-[#0d1f3c] hover:text-white transition-colors">Learn About Our Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
