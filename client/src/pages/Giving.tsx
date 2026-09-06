import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, ShieldCheck, Award, Users, CheckCircle, ArrowRight, FileCheck } from "lucide-react";

export default function Giving() {
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
              Social Impact & Grassroots Empowerment
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Support the Mission
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Empowering talented young fencers from underprivileged backgrounds through the Kosuke Sports Foundation.
            </p>
          </div>
        </div>

        {/* Foundation Hero */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/images/KosukeLogo_77010185.jpeg"
                    alt="Kosuke Sports Foundation"
                    className="h-20 w-20 object-contain bg-white rounded-2xl p-2 shadow-md border border-gray-200"
                  />
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0d1f3c]">Kosuke Sports Foundation</h2>
                    <p className="text-[#c8102e] font-semibold text-sm">Section 8 Non-Profit · 12A & 80G Certified</p>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    The <strong>Kosuke Sports Foundation</strong> is a registered Section 8 non-profit organization established to democratize access to Olympic sports. All donations are 100% tax-deductible under Section 80G of the Indian Income Tax Act.
                  </p>
                  <p>
                    Through the foundation, En Garde Fencing Academy provides free world-class fencing instruction, protective gear, and competition sponsorships to children from <strong>Pune Municipal Corporation (PMC) schools</strong> and marginalized communities.
                  </p>
                  <p>
                    We believe financial circumstances should never prevent a child with raw talent, passion, and discipline from representing India on the world stage.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <img
                    src="/images/UnderprivilegedbuttalenedfencersfromPuneMuncipalitySchools_39452b1f.jpg"
                    alt="PMC school fencers supported by Kosuke Sports Foundation"
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center italic">
                  Talented young fencers from Pune Municipal Corporation schools training under our full scholarship program
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Team & Outreach Showcase */}
        <div className="py-16" style={{ background: "#f8f9fc" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-3 rounded" />
              <h2 className="text-3xl font-extrabold text-[#0d1f3c]">Our Community Initiatives</h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                Bringing the discipline and beauty of fencing to schools, streets, and community centers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                <img
                  src="/images/JuniorDistrict.jpg"
                  alt="Dedicated Foundation Leadership"
                  className="w-full aspect-[3/2] object-cover rounded-2xl mb-4"
                />
                <h3 className="font-bold text-xl text-[#0d1f3c] mb-2">Dedicated Foundation Leadership</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our foundation trustees and coaches work directly with local schools and sports bodies to identify athletic potential in young children.
                </p>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                <img
                  src="/images/Tuition.jpeg"
                  alt="Holistic Athlete Mentorship"
                  className="w-full aspect-[3/2] object-cover object-center rounded-2xl mb-4"
                />
                <h3 className="font-bold text-xl text-[#0d1f3c] mb-2">Holistic Athlete Mentorship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Beyond fencing skills, we provide life skills mentorship, nutritional guidance, and academic support to ensure each athlete thrives.
                </p>
              </div>
            </div>

            {/* Tax Exemption Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1f3c]">Tax Exemption & Governance</h3>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>12A Certified:</strong> Registered under Section 12A of the Income Tax Act, 1961.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>80G Tax Deductible:</strong> Donors are eligible for a 50% tax deduction on taxable income.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Official Receipts:</strong> Form 10BE and 80G tax receipts issued promptly via email for all contributions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="py-16 text-white text-center"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">Sponsor a Future Champion</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Partner with Kosuke Sports Foundation to sponsor fencer, equipment, infrastructure, tournament, camps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg"
            >
              Get in Touch with the Foundation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
