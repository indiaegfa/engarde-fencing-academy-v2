import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Award, Heart, Users, Zap, Star, BookOpen, Globe } from "lucide-react";

const DONATION_TIERS = [
  {
    amount: "₹30,000",
    title: "Equipment Support",
    desc: "Provide a complete beginner fencing kit for a deserving athlete.",
    color: "#1a2e5a",
  },
  {
    amount: "₹50,000",
    title: "Competition Support",
    desc: "Support travel, accommodation, and entry fees for state and national competitions.",
    color: "#c8102e",
    featured: true,
  },
  {
    amount: "₹50,000",
    title: "High Performance Support",
    desc: "Fund advanced equipment, nutrition, and sports science services.",
    color: "#e8a020",
  },
  {
    amount: "₹1,00,000+",
    title: "Sponsor an Athlete",
    desc: "Become a long-term partner in an athlete's journey — coaching, equipment, education, nutrition, and competition.",
    color: "#1a2e5a",
  },
  {
    amount: "₹2,50,000",
    title: "International Equipment",
    desc: "Provide FIE standard fencing equipment required for international competitions.",
    color: "#c8102e",
  },
  {
    amount: "₹5,00,000+",
    title: "International Camp & Competition",
    desc: "Fund one fencer's travel, stay, and entry for crucial overseas training camps and competitions.",
    color: "#e8a020",
  },
];

const WHERE_IT_GOES = [
  { icon: Trophy, label: "Training and Coaching" },
  { icon: Award, label: "Fencing Equipment" },
  { icon: Globe, label: "Competition Expenses" },
  { icon: Heart, label: "Nutrition" },
  { icon: Zap, label: "Physiotherapy" },
  { icon: Star, label: "Sports Science" },
  { icon: BookOpen, label: "Education Assistance" },
  { icon: Users, label: "International Camps & Competitions" },
];

export default function Donate() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", pan: "",
    postAmount: false, postName: false, publicNote: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="section-py" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <span className="section-accent-center" style={{ background: "#c8102e" }} />
            <h1 className="text-white text-5xl sm:text-6xl font-bold uppercase mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Support a Dream
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Build an Olympian. Every Champion Begins with an Opportunity.
            </p>
          </div>
        </div>

        {/* Why donate */}
        <div className="section-py bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/kosuke-logo.png" alt="Kosuke Sports Foundation" className="h-12 w-12 object-contain rounded bg-white p-1 border border-gray-200 shadow" />
                  <div>
                    <div className="text-[#0d1f3c] font-bold text-lg uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>Kosuke Sports Foundation</div>
                    <div className="text-gray-500 text-xs">Section 8 Company | 12A & 80G Certified</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every child deserves the chance to dream, regardless of their financial background. At <strong className="text-[#0d1f3c]">Kosuke Sports Foundation</strong>, we identify talented children from underprivileged communities and provide them with world-class fencing coaching, equipment, nutrition, competition exposure, and education support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fencing is one of the most expensive Olympic sports. A talented child often gives up simply because they cannot afford equipment, coaching, or competition expenses. <strong className="text-[#c8102e]">Your donation changes that.</strong>
                </p>
                <div className="p-4 rounded-xl border-l-4 border-[#c8102e]" style={{ background: "#fff5f7" }}>
                  <p className="text-[#0d1f3c] font-semibold text-sm">
                    🏛️ Tax Benefits: Kosuke Sports Foundation is a registered Section 8 Company with 12A and 80G certifications. Eligible donations qualify for tax benefits under the Income Tax Act.
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img src="/images/community-outreach.jpg" alt="Underprivileged fencers" className="w-full aspect-[3/2] object-cover" />
                </div>
                <h4 className="text-[#0d1f3c] font-bold text-sm uppercase mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>Where Your Donation Goes</h4>
                <div className="grid grid-cols-2 gap-2">
                  {WHERE_IT_GOES.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 p-2.5 rounded-lg" style={{ background: "#f0f4ff" }}>
                      <Icon size={14} color="#1a2e5a" />
                      <span className="text-[#0d1f3c] text-xs font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donation tiers */}
            <div className="text-center mb-10">
              <span className="section-accent-center" />
              <h2 className="text-[#0d1f3c] text-4xl font-bold uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>Sponsor a Champion</h2>
              <p className="text-gray-500 mt-2">Choose how you would like to make an impact</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {DONATION_TIERS.map((tier) => (
                <div key={tier.title} className={`rounded-2xl overflow-hidden border shadow-sm ${tier.featured ? "ring-2 ring-[#c8102e]" : "border-gray-100"}`}>
                  <div className="p-5 border-b border-gray-100" style={{ background: `${tier.color}10` }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: tier.color, fontFamily: "Fira Sans, sans-serif" }}>{tier.amount}</div>
                    <h3 className="text-[#0d1f3c] font-bold text-base uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>{tier.title}</h3>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-gray-600 text-sm leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution Details + Donor form */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contribution Info */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
                    <h3 className="text-white font-bold text-xl uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>How to Contribute</h3>
                  </div>
                  <div className="p-6 bg-white space-y-5">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To support our athletes or sponsor fencing equipment and training, please fill out the donor information form or reach out directly to our team.
                    </p>
                    <div className="p-4 rounded-xl border border-gray-100 bg-[#f8f9fc] space-y-2">
                      <div className="text-[#0d1f3c] font-bold text-xs uppercase tracking-wider" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        Tax Exemption & Receipts
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        Kosuke Sports Foundation is a registered Section 8 Company with 12A and 80G certifications. Donors are eligible for a 50% tax deduction under Section 80G. Form 10BE and official tax receipts are issued promptly for all contributions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="p-4 rounded-xl" style={{ background: "#f0f4ff" }}>
                    <div className="text-[#0d1f3c] font-bold text-xs uppercase mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>Direct Inquiries</div>
                    <div className="text-gray-700 text-sm font-medium">india.egfa@gmail.com</div>
                    <div className="text-gray-700 text-sm font-medium">+91 91580 71777</div>
                  </div>
                </div>
              </div>

              {/* Donor form */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: "#f8f9fc", borderBottom: "1px solid #e5e7eb" }}>
                  <h3 className="text-[#0d1f3c] font-bold text-xl uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>Donor Information</h3>
                </div>
                <div className="p-6 bg-white">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-3">🙏</div>
                      <h4 className="text-[#0d1f3c] font-bold text-xl uppercase mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>Thank You!</h4>
                      <p className="text-gray-600 text-sm">Your information has been received. We'll be in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Full Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]/30" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Email *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]/30" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Phone *</label>
                        <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]/30" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>PAN Number (for 80G receipt)</label>
                        <input value={form.pan} onChange={(e) => setForm({ ...form, pan: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]/30" placeholder="ABCDE1234F" />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={form.postAmount} onChange={(e) => setForm({ ...form, postAmount: e.target.checked })} className="w-4 h-4 accent-[#c8102e]" />
                          <span className="text-sm text-gray-700">Post my donation amount publicly</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={form.postName} onChange={(e) => setForm({ ...form, postName: e.target.checked })} className="w-4 h-4 accent-[#c8102e]" />
                          <span className="text-sm text-gray-700">Post my name publicly</span>
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Why did you choose to donate?</label>
                        <textarea value={form.publicNote} onChange={(e) => setForm({ ...form, publicNote: e.target.value })}
                          rows={3} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]/30 resize-none"
                          placeholder="Write a public note about why you chose to donate..." />
                      </div>
                      <button type="submit" className="w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:opacity-90 active:scale-[0.97] transition-all"
                        style={{ background: "#c8102e", color: "white", fontFamily: "Fira Sans, sans-serif" }}>
                        Submit Donor Information
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA */}
        <div className="section-py" style={{ background: "linear-gradient(135deg, #c8102e 0%, #a00d24 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-white text-4xl font-bold uppercase mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Make a Difference Today
            </h2>
            <p className="text-white/80 text-lg">
              Every Olympic champion starts with someone who believed in them. Be that person.
            </p>
            <p className="text-white font-bold text-xl mt-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Support a Dream. Build a Champion. Inspire a Nation.
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
