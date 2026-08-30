import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MeetFounder() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Page hero */}
        <div className="bg-[#0d1f3c] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Meet the Founder</h1>
            <p className="text-white/70 text-lg max-w-2xl">The story of the woman who brought world-class fencing to Pune.</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div>
              <img
                src="/images/coach-shweta.jpg"
                alt="Shweta Avad — Head Coach & Founder"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
              />
            </div>
            {/* Bio */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Shweta Avad</h2>
              <p className="text-[#c8102e] font-semibold text-lg mb-6">Head Coach & Founder</p>

              <blockquote className="border-l-4 border-[#c8102e] pl-5 italic text-gray-600 mb-8 text-base leading-relaxed">
                "I simply love fencing. What fascinates me most is the silent conversation between two fencers on the piste — no words, only actions, strategy, and instinct. It's a language of its own, and I never want to put my weapon down."
              </blockquote>

              <div className="space-y-4 text-gray-700">
                <p>Shweta Avad is one of India's most accomplished fencers and a passionate advocate for the sport's growth in Maharashtra. Her journey from competitive athlete to founding coach is a story of dedication, sacrifice, and an unshakeable love for the piste.</p>
                <p>She represented India at the <strong>Senior World Fencing Championships</strong> in 2005 (Russia) and 2007 (Germany), and has competed at the Asian level, bringing international experience and perspective to every training session she leads.</p>
                <p>A recipient of the prestigious <strong>Shiv Chhatrapati Award</strong> — Maharashtra's highest sporting honour — Shweta holds an <strong>NIS (National Institute of Sports) Certification</strong> in fencing coaching and has further honed her skills through training with the <strong>Italian Fencing Masters in 2025</strong>.</p>
                <p>Beyond competition, Shweta is deeply committed to community impact. Through the Kosuke Sports Foundation, she has introduced fencing to students from Pune Municipal Corporation schools, believing that talent should never be limited by circumstance.</p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "World Championships 2005 (Russia)",
                  "World Championships 2007 (Germany)",
                  "Shiv Chhatrapati Award Recipient",
                  "NIS Certified Coach",
                  "Italian Fencing Masters 2025",
                  "Asian Championship Experience",
                ].map((cred) => (
                  <div key={cred} className="flex items-start gap-2 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <span className="text-[#c8102e] mt-0.5 flex-shrink-0">✦</span>
                    <span className="text-sm text-gray-700 font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
