import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhatIsFencing() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>What is Fencing?</h1>
            <p className="text-white/70 text-lg max-w-2xl">An introduction to one of the world's oldest and most intellectually demanding Olympic sports.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 space-y-10">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-[#0d1f3c] font-semibold">Fencing is a combat sport in which two competitors use bladed weapons to score points by making contact with their opponent.</p>
            <p>It is one of only five sports to have featured in every modern Olympic Games since 1896. Often called "physical chess," fencing demands explosive athleticism, lightning-fast reflexes, and deep tactical thinking — all at the same time.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>The Three Weapons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose mt-4">
              {[
                { weapon: "⚔️ Foil", desc: "A light thrusting weapon. Points are scored by hitting the torso only. The right-of-way rule applies, rewarding tactical initiative." },
                { weapon: "🗡️ Épée", desc: "A heavier thrusting weapon. The entire body is a valid target. No right-of-way — the first to hit scores, making timing everything." },
                { weapon: "🔪 Sabre", desc: "A cutting and thrusting weapon. The valid target is the upper body, arms, and head. Right-of-way applies, favouring aggressive, fast-paced action." },
              ].map((w) => (
                <div key={w.weapon} className="bg-[#f5f6f8] rounded-xl p-5 border border-gray-200">
                  <div className="text-2xl mb-2">{w.weapon.split(" ")[0]}</div>
                  <div className="font-bold text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>{w.weapon.split(" ")[1]}</div>
                  <p className="text-sm text-gray-600">{w.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-10" style={{ fontFamily: "Fira Sans, sans-serif" }}>The Piste</h2>
            <p>Fencing takes place on a long, narrow strip called a <strong>piste</strong> (14 metres long, 1.5–2 metres wide). Electronic scoring systems detect valid touches with precision, ensuring fair and accurate judging.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>Equipment</h2>
            <p>Fencers wear a protective jacket, mask, glove, and plastron (underarm protector). All equipment is designed to absorb the force of hits while allowing full freedom of movement. Beginners at En Garde are provided equipment during trial sessions.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>Fencing in India</h2>
            <p>Fencing is a recognised sport in India and is played at the National Games, School Games (ZP, CBSE, ISSO, KV, ISF), and at the university level. The <strong>Fencing Association of India</strong> governs the sport nationally, with state associations in Maharashtra and across the country.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
