import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BENEFITS = [
  { icon: "🧠", title: "Mental Sharpness", desc: "Fencing is called 'physical chess' for good reason. Every bout requires rapid decision-making, pattern recognition, and tactical planning under pressure — skills that transfer directly to academics and professional life." },
  { icon: "💪", title: "Full-Body Fitness", desc: "Fencing develops explosive leg power, core stability, upper body strength, and cardiovascular endurance. It is one of the most complete physical workouts available." },
  { icon: "🎯", title: "Focus & Discipline", desc: "Training requires intense concentration and consistent practice. Fencers develop the ability to stay calm under pressure — a skill that benefits every area of life." },
  { icon: "🤝", title: "Respect & Sportsmanship", desc: "Fencing has a deep tradition of courtesy and respect. Athletes salute their opponents before and after every bout, building character and social values." },
  { icon: "🌍", title: "Global Sport", desc: "Fencing is played in over 150 countries and is one of only five sports present at every modern Olympic Games. It opens doors to international competition and travel." },
  { icon: "🏫", title: "School & College Opportunities", desc: "Fencing is recognised at ZP, CBSE, ISSO, KV, and ISF school games, and at university level through AIU. Athletes can earn sports quotas and scholarships." },
  { icon: "🧘", title: "Individual Sport", desc: "Unlike team sports, fencing places full responsibility on the individual athlete. This builds self-reliance, accountability, and personal pride in achievement." },
];

export default function WhyFencing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="bg-[#0d1f3c] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>New to Fencing?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Why Fencing?</h1>
            <p className="text-white/70 text-lg max-w-2xl">Compelling reasons to choose fencing as your sport.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <p className="text-xl text-[#0d1f3c] font-semibold mb-10 max-w-3xl">
            Fencing is one of the most rewarding sports a young person can choose. It develops the mind, the body, and the character — and opens doors that few other sports can.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-[#f5f6f8] rounded-2xl p-6 border border-gray-200 flex gap-4">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-[#0d1f3c] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>Ready to try fencing?</h2>
            <p className="text-white/70 mb-6">We welcome beginners from age 6 onwards. No experience needed — just enthusiasm.</p>
            <a href="/enroll" className="inline-block bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3 rounded-lg transition-colors" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Book a Trial Class
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
