import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function BeginnerProgram() {
  const focus = [
    "Introduction to the sport of fencing",
    "Fundamental movement and coordination skills",
    "Basic footwork and blade work",
    "Safety rules and equipment handling",
    "Fun games to develop agility, balance, and reaction",
    "Building confidence and discipline",
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #22c55e 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-green-400" /><span className="text-green-300 font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🟢</span><h1 className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "Fira Sans, sans-serif" }}>Beginners Program</h1></div>
            <p className="text-white/70 text-lg max-w-2xl">Build the Foundation — Recommended: 6–9 Months</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About This Program</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Perfect for children and adults who are completely new to fencing. No prior experience is required — just enthusiasm, a willingness to learn, and comfortable sportswear. We welcome beginners from age 7 onwards.</p>
              <p className="text-gray-700 leading-relaxed mb-6">Our beginner program introduces you to the sport in a fun, safe, and structured environment. You will learn the basics of fencing — footwork, blade work, safety, and the rules of the game — while developing physical coordination, confidence, and discipline.</p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
                <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Goal</div>
                <p className="text-gray-700 text-sm">Develop a love for fencing while learning the essential fundamentals.</p>
              </div>
              <Link href="/enroll" className="btn-primary inline-block px-8 py-3">Enroll in This Program</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Focus Areas</h2>
              <ul className="space-y-3">
                {focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-green-500" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-[#0d1f3c] text-white">
                <div className="font-bold mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>What to Bring</div>
                <p className="text-white/70 text-sm">Comfortable sportswear, sports shoes, and a water bottle. All fencing equipment is provided during the trial session.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
