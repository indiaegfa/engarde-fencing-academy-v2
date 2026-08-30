import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ElementaryProgram() {
  const focus = [
    "Technical skill development and refinement",
    "Better footwork and weapon control",
    "Physical conditioning and coordination",
    "Introduction to simple tactical concepts",
    "Practice bouts and internal competitions",
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #3b82f6 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-blue-400" /><span className="text-blue-300 font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <div className="flex items-center gap-3 mb-3"><span className="text-4xl">🔵</span><h1 className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: "Fira Sans, sans-serif" }}>Elementary Program</h1></div>
            <p className="text-white/70 text-lg max-w-2xl">Develop Skills & Confidence — Recommended: 12–24 Months</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About This Program</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Once the fundamentals are mastered, fencers move into the Elementary Program to begin refining their technique and improving their athletic abilities. This is where good habits are built and the foundations for competitive fencing are laid.</p>
              <p className="text-gray-700 leading-relaxed mb-6">Athletes in this program begin participating in internal practice bouts and academy-level competitions, getting their first taste of competitive fencing in a supportive environment.</p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Goal</div>
                <p className="text-gray-700 text-sm">Build strong technical foundations and prepare for competitive fencing.</p>
              </div>
              <Link href="/enroll" className="btn-primary inline-block px-8 py-3">Enroll in This Program</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Focus Areas</h2>
              <ul className="space-y-3">
                {focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-blue-500" />
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
