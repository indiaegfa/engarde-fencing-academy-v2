import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Zap, Clock, ShieldCheck, Award, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";

export default function OpenFencing() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Banner */}
        <div
          className="py-16 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#ff6b6b] font-semibold tracking-widest uppercase text-sm mb-2">
              Programs · En Garde Fencing Academy
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Open Fencing</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Dedicated bouting sessions, electric scoring strips, and sparring for intermediate, competitive, and visiting fencers.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-3 rounded" />
              <h2 className="text-3xl font-extrabold text-[#0d1f3c] mb-4">
                Test Your Tactics on the Electric Piste
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Open Fencing is designed for fencers who want unstructured bouting time to apply what they have learned in class, test tactics against diverse opponents, and prepare for upcoming district, state, and national tournaments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fencers of all three weapons (Foil, Épée, Sabre) are welcome. Our full-length electric pistes with electronic scoring apparatus provide realistic competition simulation under certified referee guidance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Full Electric Pistes", icon: Zap },
                  { label: "Refereed Bouts", icon: ShieldCheck },
                  { label: "All 3 Weapons", icon: Award },
                  { label: "Tournament Prep", icon: CheckCircle }
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Icon size={16} className="text-[#c8102e]" />
                    <span className="text-xs font-bold text-[#0d1f3c]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/OpenFencing_6e32dac3.webp"
                alt="Open Fencing bouting session"
                className="w-full rounded-2xl shadow-xl object-cover h-[380px]"
              />
            </div>
          </div>

          {/* Key Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0d1f3c]/10 text-[#0d1f3c] flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0d1f3c] mb-2">Schedule & Timings</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Open bouts take place on dedicated evening slots and weekend mornings.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Wednesday & Friday: 6:30 PM – 8:30 PM</li>
                <li>• Sunday Sparring: 9:00 AM – 12:00 PM</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0d1f3c] mb-2">Eligibility & Gear</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Open to intermediate and advanced enrolled fencers as well as registered visiting athletes.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Full 350N/800N protective gear required</li>
                <li>• Own electric weapon & body wire</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#e8a020]/10 text-[#e8a020] flex items-center justify-center mb-4">
                <Award size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0d1f3c] mb-2">Passes & Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Free for Competitive Batch members. Drop-in passes available for visiting athletes.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Included in Competitive enrollment</li>
                <li>• Drop-in Day Pass: ₹500 / session</li>
              </ul>
            </div>
          </div>

          {/* CTA Banner */}
          <div
            className="p-10 rounded-3xl text-white text-center shadow-lg"
            style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Bout on the Piste?</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6 text-sm sm:text-base">
              Book a sparring slot or join our competitive programs to access unlimited open fencing.
            </p>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Register for Sparring <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
