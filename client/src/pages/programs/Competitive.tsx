import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function CompetitiveProgram() {
  const focus = [
    "High-performance technical and tactical training",
    "Individualized coaching and athlete profiling",
    "Competition planning and performance analysis",
    "Strength & conditioning for elite performance",
    "Mental preparation and sports psychology",
    "National and international tournament exposure",
    "Long-term athlete development planning",
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-red-400" /><span className="text-red-300 font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🔴</span><h1 className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "Fira Sans, sans-serif" }}>Competitive Program</h1></div>
            <p className="text-white/70 text-lg max-w-2xl">Train to Win — Selection by coach</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About This Program</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Designed for dedicated athletes aspiring to compete at the highest level. Entry into this program is by coach selection based on skill, commitment, and competition goals.</p>
              <p className="text-gray-700 leading-relaxed mb-4">Athletes in the Competitive Program receive the most intensive, individualized coaching available at the academy. Training sessions are tailored to each athlete's specific needs, and competition schedules are planned strategically to peak at the right moments.</p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Goal</div>
                <p className="text-gray-700 text-sm">Prepare athletes to excel at National Championships, Asian Championships, World Championships, and ultimately, the Olympic Games.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#c8102e] font-semibold bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <span>⭐</span>
                <span>Selection by coach based on skill, commitment, and competition goals</span>
              </div>
              <Link href="/contact" className="btn-primary inline-block px-8 py-3">Enquire About Selection</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Focus Areas</h2>
              <ul className="space-y-3">
                {focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-[#c8102e]" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
