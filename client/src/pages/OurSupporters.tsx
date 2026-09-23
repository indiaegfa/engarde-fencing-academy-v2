import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Award, ExternalLink, Heart, Shield, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function OurSupporters() {
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
            <div className="flex items-center justify-center gap-2 mb-3">
              <Link
                href="/support-the-mission"
                className="text-[#ff6b6b] hover:underline font-semibold tracking-widest uppercase text-xs sm:text-sm"
              >
                Support the Mission
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/80 font-semibold tracking-widest uppercase text-xs sm:text-sm">
                Our Supporters
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Supporters
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We are grateful to our partners and supporters whose contribution helps young fencers access better training opportunities and compete at the highest levels.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Introductory Callout */}
            <div className="bg-[#f8f9fc] border border-gray-200/80 rounded-3xl p-8 sm:p-10 mb-14 text-center max-w-4xl mx-auto shadow-sm">
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-4 rounded" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] mb-4">
                Empowering India's Next Generation of Fencers
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                We are grateful to our partners and supporters whose contribution helps young fencers access better training opportunities and compete at the highest levels.
              </p>
            </div>

            {/* Supporter Cards */}
            <div className="space-y-12">
              {/* Brinton Section */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 flex flex-col items-start justify-center">
                    <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 w-full flex items-center justify-center mb-4">
                      <img
                        src="/images/brintons-logo.svg"
                        alt="Brinton"
                        className="h-10 w-auto max-w-[200px] object-contain"
                      />
                    </div>
                    <a
                      href="https://www.brintons.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8102e] hover:underline"
                    >
                      Visit brintons.co.in <ExternalLink size={13} />
                    </a>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#0d1f3c]/5 text-[#0d1f3c] text-xs font-semibold uppercase tracking-wider">
                      Infrastructure & Equipment Partner
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d1f3c]">
                      Brinton & Kosuke Sports Foundation
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      <strong>Brinton</strong> has supported the <strong>Kosuke Sports Foundation</strong> by providing training mats and a fencing scoring machine. This support has strengthened our training infrastructure and enabled our fencers to get more opportunities to train and compete using professional equipment.
                    </p>
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#c8102e] flex-shrink-0" />
                        <span>Professional Fencing Scoring Machine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#c8102e] flex-shrink-0" />
                        <span>Specialized Piste & Training Mats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualys Section */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 flex flex-col items-start justify-center">
                    <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 w-full flex items-center justify-center mb-4">
                      <img
                        src="/images/qualys-logo.svg"
                        alt="Qualys"
                        className="h-10 w-auto max-w-[200px] object-contain"
                      />
                    </div>
                    <a
                      href="https://www.qualys.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8102e] hover:underline"
                    >
                      Visit qualys.com <ExternalLink size={13} />
                    </a>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#0d1f3c]/5 text-[#0d1f3c] text-xs font-semibold uppercase tracking-wider">
                      International Athlete Sponsorship
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d1f3c]">
                      Qualys & Shaurya Ingawale — ISF Games 2025 Bronze Medal
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      <strong>Qualys</strong> supported <strong>Shaurya Ingawale</strong> for her participation in the <strong>International School Federation (ISF) Games 2025</strong>. Shaurya represented India and won a <strong>Bronze Medal in Fencing</strong>, marking a proud achievement for Indian fencing and for the EGFA family.
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-sm text-[#0d1f3c] font-semibold">
                      <Award size={18} className="text-[#c8102e] flex-shrink-0" />
                      <span>ISF U15 Gymnasiade, Zlatibor, Serbia — Bronze Medal in Fencing</span>
                    </div>
                  </div>
                </div>

                {/* Shaurya's Photo Showcase */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="max-w-3xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                      <img
                        src="/images/Shaurya_Serbia_Medal.jpg"
                        alt="Shaurya Ingawale on the podium at the ISF U15 Gymnasiade 2025 in Serbia"
                        className="w-full h-auto object-contain max-h-[580px] mx-auto"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-[#0d1f3c]">
                        Shaurya Ingawale on the podium representing India at the ISF U15 Gymnasiade (Zlatibor, Serbia)
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Bronze Medal in Fencing · Supported by Qualys
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gratitude & Closing Statement */}
            <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#0d1f3c] to-[#1a2e5a] text-white p-8 sm:p-12 text-center shadow-lg">
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-4 rounded" />
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Thank You to Our Partners
              </h3>
              <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                We sincerely thank Brinton and Qualys for believing in the potential of young athletes and contributing to their journey in fencing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-7 py-3 rounded-xl transition-all shadow-md"
                >
                  Partner With Us <ArrowRight size={16} />
                </Link>
                <Link
                  href="/support-the-mission"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-xl transition-all border border-white/20"
                >
                  Kosuke Sports Foundation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
