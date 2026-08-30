import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Globe, Award, Star, Heart, Users } from "lucide-react";

const SPONSOR_TIERS = [
  {
    icon: "🥉",
    title: "Equipment Sponsor",
    amount: "₹2,50,000",
    period: "Annual Support",
    color: "#cd7f32",
    benefits: [
      "Provide Olympic-standard fencing equipment for athletes",
      "Logo on academy website and social media",
      "Certificate of appreciation",
      "Invitation to academy events",
    ],
  },
  {
    icon: "🥈",
    title: "Competition Sponsor",
    amount: "₹5,00,000",
    period: "Annual Support",
    color: "#9e9e9e",
    benefits: [
      "Fund competition travel, accommodation, and entry fees",
      "Logo on competition uniforms",
      "Social media recognition",
      "Certificate of appreciation",
      "Invitation to award ceremonies",
    ],
  },
  {
    icon: "🥇",
    title: "Athlete Development Sponsor",
    amount: "₹5,00,000",
    period: "Annual Support",
    color: "#e8a020",
    featured: true,
    benefits: [
      "Comprehensive athlete development support",
      "Coaching, equipment, and competition expenses",
      "Logo on academy website and uniforms",
      "Quarterly progress reports on sponsored athlete",
      "Meet-and-greet with athletes",
      "Social media and press recognition",
    ],
  },
  {
    icon: "🌍",
    title: "International Camp Sponsor",
    amount: "₹12,00,000+",
    period: "Per Camp",
    color: "#c8102e",
    benefits: [
      "Fund international training camps with foreign coaches",
      "Premier logo placement on all camp materials",
      "Naming rights for the sponsored camp",
      "Exclusive media coverage and press release",
      "Invitation to camp inauguration and closing ceremony",
      "Detailed impact report",
    ],
  },
];

const SUPPORT_ITEMS = [
  { icon: Trophy, label: "Olympic-standard Fencing Equipment" },
  { icon: Globe, label: "Competition Expenses" },
  { icon: Award, label: "International Training Camps" },
  { icon: Star, label: "Sports Science Support" },
  { icon: Heart, label: "Nutrition and Physiotherapy" },
  { icon: Users, label: "Education Support" },
];

export default function Sponsor() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="section-py" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <span className="section-accent-center" style={{ background: "#c8102e" }} />
            <h1 className="text-white text-5xl sm:text-6xl font-bold uppercase mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>
              Sponsor an Athlete
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Support Talent. Build Champions. Transform Lives.
            </p>
          </div>
        </div>

        {/* Why your support matters */}
        <div className="section-py bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="section-accent" />
                <h2 className="text-[#0d1f3c] text-3xl font-bold uppercase mb-5" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                  Why Your Support Matters
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fencing is one of the world's most equipment-intensive Olympic sports. The cost of international-standard equipment, coaching, travel, and competition is beyond the reach of many deserving families.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your support helps provide talented young athletes with the resources they need to compete at the highest levels — from state championships to the Olympic Games.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SUPPORT_ITEMS.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 p-3 rounded-lg" style={{ background: "#f0f4ff" }}>
                      <Icon size={16} color="#1a2e5a" />
                      <span className="text-[#0d1f3c] text-sm font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/community-outreach.jpg"
                  alt="Underprivileged fencers from Pune Municipal Schools"
                  className="w-full h-72 object-cover"
                />
                <div className="p-5" style={{ background: "#f0f4ff" }}>
                  <p className="text-[#0d1f3c] text-sm font-semibold">
                    Every champion begins with an opportunity. Whether you are an individual, school, or corporate organization, your partnership can help transform the life of a talented young athlete.
                  </p>
                </div>
              </div>
            </div>

            {/* Sponsorship tiers */}
            <div className="text-center mb-10">
              <span className="section-accent-center" />
              <h2 className="text-[#0d1f3c] text-4xl font-bold uppercase" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                "Sponsor an Athlete" Program
              </h2>
              <p className="text-gray-500 mt-2">Annual Support Tiers</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {SPONSOR_TIERS.map((tier) => (
                <div
                  key={tier.title}
                  className={`rounded-2xl overflow-hidden border shadow-sm flex flex-col ${tier.featured ? "ring-2 ring-[#e8a020] shadow-lg" : "border-gray-100"}`}
                >
                  {tier.featured && (
                    <div className="text-center py-1.5 text-xs font-bold uppercase tracking-wide text-white" style={{ background: "#e8a020", fontFamily: "Fira Sans, sans-serif" }}>
                      Most Impactful
                    </div>
                  )}
                  <div className="p-6 text-center border-b border-gray-100" style={{ background: `${tier.color}10` }}>
                    <div className="text-4xl mb-2">{tier.icon}</div>
                    <h3 className="text-[#0d1f3c] font-bold text-lg uppercase mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{tier.title}</h3>
                    <div className="text-3xl font-bold" style={{ color: tier.color, fontFamily: "Fira Sans, sans-serif" }}>{tier.amount}</div>
                    <div className="text-gray-500 text-xs mt-1">{tier.period}</div>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <ul className="space-y-2">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: tier.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <a
                      href="mailto:india.egfa@gmail.com?subject=Sponsorship Inquiry"
                      className="w-full block text-center py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-all"
                      style={{ background: tier.color, color: "white", fontFamily: "Fira Sans, sans-serif" }}
                    >
                      Become a Sponsor
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
              <h3 className="text-white text-3xl font-bold uppercase mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                Together, Let's Build India's Next Generation of Olympic Fencers
              </h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                For sponsorship inquiries, partnership discussions, or to learn more about how your support creates impact, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:india.egfa@gmail.com?subject=Sponsorship Inquiry" className="btn-primary">
                  Email Us
                </a>
                <Link href="/donate">
                  <button className="px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-[#0d1f3c] transition-all" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                    Donate Instead
                  </button>
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
