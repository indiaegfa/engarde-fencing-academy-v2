import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

const COMPONENTS = [
  { title: "Explosive Power", desc: "Plyometric training, jump squats, and sprint drills to develop the explosive leg power required for lunges and advance-lunges." },
  { title: "Core Stability", desc: "Plank variations, rotational exercises, and balance work to build the stable core that underpins every fencing action." },
  { title: "Cardiovascular Endurance", desc: "Interval training and aerobic conditioning to sustain high-intensity effort across multiple bouts in a competition day." },
  { title: "Agility & Footwork", desc: "Ladder drills, cone work, and directional change exercises to sharpen the footwork patterns used on the piste." },
  { title: "Flexibility & Mobility", desc: "Dynamic warm-up routines and static stretching to prevent injury and maintain the range of motion required for fencing technique." },
  { title: "Mental Toughness", desc: "Conditioning sessions are designed to push athletes beyond their comfort zone, building the mental resilience needed for competition." },
];

export default function StrengthConditioning() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #7c3aed 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-purple-400" /><span className="text-purple-300 font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>Strength &amp; Conditioning</h1>
            <p className="text-white/70 text-lg max-w-2xl">Build the athletic foundation that makes great fencers great.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="mb-10">
            <p className="text-xl text-[#0d1f3c] font-semibold mb-4">Fencing is one of the most physically demanding sports in the world. Strength and conditioning training is not optional — it is the foundation of every great fencer's performance.</p>
            <p className="text-gray-700 leading-relaxed">Our strength and conditioning program is designed specifically for fencers, addressing the unique physical demands of the sport: explosive leg power, core stability, cardiovascular endurance, and the agility to change direction in milliseconds.</p>
          </div>
          <h2 className="text-2xl font-bold text-[#0d1f3c] mb-6" style={{ fontFamily: "Fira Sans, sans-serif" }}>Training Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {COMPONENTS.map((c) => (
              <div key={c.title} className="bg-[#f5f6f8] rounded-xl p-5 border border-gray-200 flex gap-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-purple-500" />
                <div>
                  <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{c.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1f3c] rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>Interested in S&amp;C Training?</h3>
            <p className="text-white/70 mb-5">Contact us to discuss options for Strength and conditioning.</p>
            <Link href="/contact" className="inline-block bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3 rounded-lg transition-colors" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
