import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PATHWAY = [
  { level: "1", title: "Club / Intra-Academy", desc: "Begin competing at En Garde's own Intra-Club Championships. A safe, supportive environment to experience competition for the first time.", tag: "Beginner" },
  { level: "2", title: "District & Zonal Championships", desc: "Compete against fencers from other clubs across your district. Organised by the District Fencing Association.", tag: "Intermediate" },
  { level: "3", title: "State Championships", desc: "The Maharashtra State Fencing Championship — the gateway to national selection. Medals here qualify athletes for national consideration.", tag: "Intermediate–Advanced" },
  { level: "4", title: "School Games (CBSE / ISSO / KV / ISF / ZP)", desc: "Fencing is a recognised sport at multiple school games federations. Athletes can represent their school and earn academic sports quotas.", tag: "School Athletes" },
  { level: "5", title: "National Championships", desc: "The pinnacle of domestic competition. Medals here can lead to national team selection and international representation.", tag: "Advanced" },
  { level: "6", title: "Asian & World Championships", desc: "The highest level of international competition. En Garde athletes have represented India at the Senior World Championships.", tag: "Elite" },
];

export default function CompetitionPathway() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Fencing Competition Pathway</h1>
            <p className="text-white/70 text-lg max-w-2xl">From your first bout at the academy to representing India — here is the road ahead.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
          <p className="text-xl text-[#0d1f3c] font-semibold mb-10">
            Fencing has a clear, structured competition pathway in India. Every athlete starts at the club level and can progress all the way to international competition with the right training and dedication.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

            <div className="space-y-6">
              {PATHWAY.map((step) => (
                <div key={step.level} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-extrabold text-lg flex-shrink-0 relative z-10" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                    {step.level}
                  </div>
                  <div className="flex-1 bg-[#f5f6f8] rounded-2xl p-6 border border-gray-200">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>{step.title}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0d1f3c]/10 text-[#0d1f3c]">{step.tag}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#c8102e]/10 border border-[#c8102e]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#0d1f3c] mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>School Games Recognition</h3>
            <p className="text-gray-700 mb-4">Fencing is officially recognised at the following school games in India:</p>
            <div className="flex flex-wrap gap-3">
              {["ZP (Zilla Parishad)", "CBSE", "ISSO", "KV (Kendriya Vidyalaya)", "ISF (International Schools Federation)"].map((s) => (
                <span key={s} className="bg-white border border-[#c8102e]/30 text-[#0d1f3c] text-sm font-semibold px-4 py-2 rounded-lg">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
