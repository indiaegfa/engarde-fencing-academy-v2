import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function IntermediateProgram() {
  const focus = [
    "Advanced technical skills and weapon mastery",
    "Tactical thinking and bout strategy",
    "Distance and timing control",
    "Physical conditioning for performance",
    "Video analysis and match review",
    "Participation in district, state, and national competitions",
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #f97316 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-orange-400" /><span className="text-orange-300 font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🟠</span><h1 className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "Fira Sans, sans-serif" }}>Intermediate Program</h1></div>
            <p className="text-white/70 text-lg max-w-2xl">Think Like a Fencer — Recommended: 2–4 Years</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About This Program</h2>
              <p className="text-gray-700 leading-relaxed mb-6">At this stage, athletes begin combining technical excellence with tactical decision-making. Intermediate fencers are expected to compete regularly at district, state, and national levels.</p>
              <p className="text-gray-700 leading-relaxed mb-6">Training becomes more individualized, with coaches working closely with each athlete to identify strengths, address weaknesses, and develop a personal fencing style.</p>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
                <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Goal</div>
                <p className="text-gray-700 text-sm">Develop complete fencers capable of competing confidently at higher levels.</p>
              </div>
              <Link href="/enroll" className="btn-primary inline-block px-8 py-3">Enroll in This Program</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Focus Areas</h2>
              <ul className="space-y-3">
                {focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-orange-500" />
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
