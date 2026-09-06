import { useState } from "react";
import {
  Send, CheckCircle, Mail, Phone, MessageCircle,
  Award, Swords, Dumbbell, Globe, Users,
  ClipboardList, Shirt, Droplets, Smile, ShieldCheck
} from "lucide-react";

const WHY_CHOOSE = [
  { icon: Award, text: "Professional and experienced coaches" },
  { icon: Swords, text: "Structured training from beginner to competitive level" },
  { icon: Dumbbell, text: "Focus on fitness, discipline, confidence, and quick decision-making" },
  { icon: Globe, text: "Opportunities to compete at State, National, and International levels" },
  { icon: Users, text: "Safe, friendly, and motivating environment" },
];

const STEPS = [
  { num: "01", title: "Fill the Inquiry Form", desc: "Submit your details using the form on this page." },
  { num: "02", title: "We Contact You", desc: "Our team will reach out to schedule a trial class or assessment." },
  { num: "03", title: "Visit & Experience", desc: "Meet our coaches, see the academy, and experience fencing first-hand." },
  { num: "04", title: "Join the Family", desc: "Complete your registration and become part of En Garde!" },
];

const BRING = [
  { icon: Shirt, text: "Comfortable sportswear" },
  { icon: ShieldCheck, text: "Sports shoes" },
  { icon: Smile, text: "2 tennis balls & skipping rope" },
  { icon: Droplets, text: "Water bottle" },
];

export default function EnrollSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="enroll" className="section-py bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Page header */}
        <div className="text-center mb-14">
          <span className="section-accent-center" />
          <h2
            className="text-brand-navy font-display text-4xl sm:text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Enroll Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Begin Your Fencing Journey — whether you want to build confidence, improve fitness,
            compete at the highest level, or simply try a unique Olympic sport,{" "}
            <strong className="text-[#0d1f3c]">En Garde Fencing Academy</strong> is the perfect place to start.
          </p>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We welcome children <strong>from 7 years onwards</strong>, teenagers, and adults of all skill levels.
            No prior experience required — just enthusiasm and a willingness to learn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Content */}
          <div className="flex flex-col gap-10">

            {/* Why Choose */}
            <div>
              <h3
                className="text-[#0d1f3c] font-bold text-xl uppercase mb-5 flex items-center gap-2"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                <span className="w-1 h-6 rounded-full inline-block mr-1" style={{ background: "#c8102e" }} />
                Why Choose En Garde?
              </h3>
              <ul className="space-y-3">
                {WHY_CHOOSE.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(26,46,90,0.08)" }}
                    >
                      <Icon size={15} style={{ color: "#1a2e5a" }} />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enrollment Process */}
            <div>
              <h3
                className="text-[#0d1f3c] font-bold text-xl uppercase mb-5 flex items-center gap-2"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                <span className="w-1 h-6 rounded-full inline-block mr-1" style={{ background: "#c8102e" }} />
                Enrollment Process
              </h3>
              <div className="space-y-4">
                {STEPS.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                      style={{ background: "#c8102e", color: "white", fontFamily: "Fira Sans, sans-serif" }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div
                        className="text-[#0d1f3c] font-bold text-sm uppercase"
                        style={{ fontFamily: "Fira Sans, sans-serif" }}
                      >
                        {step.title}
                      </div>
                      <div className="text-gray-500 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring */}
            <div
              className="rounded-2xl p-6 border border-[#1a2e5a]/15"
              style={{ background: "#f0f4ff" }}
            >
              <h3
                className="text-[#0d1f3c] font-bold text-base uppercase mb-4 flex items-center gap-2"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                <ClipboardList size={16} style={{ color: "#c8102e" }} />
                What to Bring
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {BRING.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-700">
                    <Icon size={14} style={{ color: "#1a2e5a" }} />
                    {text}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs italic border-t border-[#1a2e5a]/10 pt-3">
                All fencing equipment required for beginners will be provided during the trial session.
              </p>
            </div>

            {/* Reach Us Directly */}
            <div className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm">
              <h3
                className="text-[#0d1f3c] font-bold text-base uppercase mb-3"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Reach Us Directly
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:india.egfa@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#c8102e] transition-colors"
                >
                  <Mail size={15} style={{ color: "#1a2e5a" }} />
                  india.egfa@gmail.com
                </a>
                <a
                  href="tel:+919158071777"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#c8102e] transition-colors"
                >
                  <Phone size={15} style={{ color: "#1a2e5a" }} />
                  +91 91580 71777
                </a>
                <a
                  href="https://wa.me/919356226379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#c8102e] transition-colors"
                >
                  <MessageCircle size={15} style={{ color: "#25d366" }} />
                  WhatsApp: +91 93562 26379
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Inquiry form (sticky on desktop) */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              {/* Form header */}
              <div
                className="px-6 py-5"
                style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Send size={18} color="#c8102e" />
                  <h3
                    className="text-white font-bold text-xl uppercase"
                    style={{ fontFamily: "Fira Sans, sans-serif" }}
                  >
                    Quick Inquiry
                  </h3>
                </div>
                <p className="text-white/60 text-sm">
                  Ready to take the first step? Fill in your details and we'll be in touch.
                </p>
              </div>

              <div className="p-6 bg-white">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(26,46,90,0.1)" }}
                    >
                      <CheckCircle size={28} style={{ color: "#1a2e5a" }} />
                    </div>
                    <h4
                      className="text-[#0d1f3c] font-bold text-xl uppercase"
                      style={{ fontFamily: "Fira Sans, sans-serif" }}
                    >
                      Inquiry Received!
                    </h4>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. Our team will contact you within 24 hours to schedule your trial class.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                      className="text-[#c8102e] text-sm font-semibold underline hover:no-underline mt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1f3c] uppercase tracking-wide mb-1.5" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        Full Name <span className="text-[#c8102e]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#1a2e5a] focus:ring-1 focus:ring-[#1a2e5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1f3c] uppercase tracking-wide mb-1.5" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        Phone Number <span className="text-[#c8102e]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#1a2e5a] focus:ring-1 focus:ring-[#1a2e5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1f3c] uppercase tracking-wide mb-1.5" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        Email Address <span className="text-[#c8102e]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#1a2e5a] focus:ring-1 focus:ring-[#1a2e5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1f3c] uppercase tracking-wide mb-1.5" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                        Message / Query
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your interest — age, experience level, preferred batch, or any questions..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-[#1a2e5a] focus:ring-1 focus:ring-[#1a2e5a] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-150 hover:opacity-90 disabled:opacity-60"
                      style={{ background: "#c8102e", color: "white", fontFamily: "Fira Sans, sans-serif" }}
                    >
                      {loading ? (
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <Send size={15} />
                      )}
                      {loading ? "Sending..." : "Send Inquiry"}
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      We respond within 24 hours · Your details are kept private
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* CTA banner */}
            <div
              className="mt-5 rounded-xl p-5 text-center"
              style={{ background: "linear-gradient(135deg, #c8102e 0%, #a00d24 100%)" }}
            >
              <p
                className="text-white font-bold text-lg uppercase mb-1"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Your Journey Starts Here
              </p>
              <p className="text-white/80 text-sm">
                Join one of Pune's leading fencing academies — a sport that develops both the body and the mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
