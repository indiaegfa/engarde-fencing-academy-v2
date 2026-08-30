import { Link } from "wouter";
import { Building2, GraduationCap, Trophy, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="section-py" style={{ background: "#f8f9fc" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <span className="section-accent-center" />
          <p className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
            School & Institutional Programs
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>
            Partnering with Leading Schools
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We collaborate with prominent schools in Pune to integrate fencing into their sports curriculum, providing Olympic-standard training, certified coaching, and competition exposure.
          </p>
        </div>

        {/* School Logos Bar */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-14">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Trusted by Top Institutions in Pune
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* DPS Hinjewadi */}
            <div className="bg-[#f8f9fc] rounded-2xl border border-[#1a2e5a]/10 px-6 py-5 flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-24 h-16 flex items-center justify-center flex-shrink-0 bg-white p-2 rounded-xl border border-gray-200">
                <img
                  src="/images/DPS_Logo_b0acf486.png"
                  alt="Delhi Public School, Hinjewadi"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[#0d1f3c] font-bold text-base leading-snug">Delhi Public School</p>
                <p className="text-[#c8102e] text-xs font-semibold">Hinjewadi, Pune</p>
                <p className="text-gray-500 text-[11px] mt-0.5">Official Curriculum Partner</p>
              </div>
            </div>

            {/* Vidya Valley School */}
            <div className="bg-[#f8f9fc] rounded-2xl border border-[#1a2e5a]/10 px-6 py-5 flex items-center gap-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-24 h-16 flex items-center justify-center flex-shrink-0 bg-white p-2 rounded-xl border border-gray-200">
                <img
                  src="/images/VidyaValleyLogo_25e2ca36.png"
                  alt="Vidya Valley School, Sus"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[#0d1f3c] font-bold text-base leading-snug">Vidya Valley School</p>
                <p className="text-[#c8102e] text-xs font-semibold">Sus, Pune</p>
                <p className="text-gray-500 text-[11px] mt-0.5">Campus Training Program</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real School Action Photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-64 sm:h-72 overflow-hidden">
              <img
                src="/images/VidyaValley1_6d586fff.jpg"
                alt="Fencing class at partner school"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                In-School Curriculum Integration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Structured physical education modules introducing Olympic swordplay, coordination, and blade etiquette during regular school hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="h-64 sm:h-72 overflow-hidden">
              <img
                src="/images/VidyaValley2_57e08b33.jpg"
                alt="Fencing tournament preparation at school"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                After-School Academy Centers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated training centers right on school campuses, coached by NIS-certified staff with full equipment and tournament preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              How We Partner with Institutions
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Curriculum Integration",
                desc: "Full PE integration with age-appropriate blade safety, footwork drills, and coordination games.",
                icon: GraduationCap
              },
              {
                title: "After-School Clubs",
                desc: "Turnkey after-school fencing academies with certified NIS coaches and full equipment provided.",
                icon: Building2
              },
              {
                title: "Tournament Hosting",
                desc: "Inter-school leagues, IPSC/ISSO championship preparation, and invitational tournaments.",
                icon: Trophy
              }
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#f8f9fc] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-base text-[#0d1f3c] mb-2">{title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary text-sm px-8 py-3"
            >
              Partner with Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
