import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Academy Address",
    value: "1st Floor, Badminton Hall, Shree Shiv Chhatrapati Sports Complex, Mhalunge, Pune – 411045",
    sub: "Shree Shiv Chhatrapati Sports Complex, Mhalunge, Pune",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91580 71777",
    sub: "Mon–Sat, 9:00 AM – 7:00 PM",
    href: "tel:+919158071777",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 93562 26379",
    sub: "Chat with us on WhatsApp",
    href: "https://wa.me/919356226379",
  },
  {
    icon: Mail,
    label: "Email",
    value: "india.egfa@gmail.com",
    sub: "We respond within 24 hours",
    href: "mailto:india.egfa@gmail.com",
  },
  {
    icon: Clock,
    label: "Academy Hours",
    value: "Mon–Fri: 6:30 AM – 8:00 PM",
    sub: "Sat: 8:00 AM – 2:00 PM · Sun: Closed",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-py bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-accent-center" />
          <h2
            className="text-brand-navy font-display text-4xl sm:text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to start your fencing journey? Get in touch with our team — we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CONTACT_INFO.map(({ icon: Icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="card-lift bg-[#f5f6f8] rounded-xl p-5 border border-gray-100"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(26,46,90,0.1)" }}
                  >
                    <Icon size={20} color="#1a2e5a" />
                  </div>
                  <div
                    className="text-gray-400 text-xs uppercase tracking-wide font-semibold mb-1"
                    style={{ fontFamily: "Fira Sans, sans-serif" }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-brand-navy font-bold text-sm hover:text-brand-red transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-brand-navy font-bold text-sm">{value}</div>
                  )}
                  <div className="text-gray-400 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>

            {/* Social media */}
            <div
              className="rounded-xl p-6 border border-gray-100"
              style={{ background: "#f0f4ff" }}
            >
              <h3
                className="text-[#0d1f3c] font-bold text-lg uppercase mb-4"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Follow En Garde
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/engarde_fencingacademy?igsh=YTY3b2thcXM2ZGF3&utm_source=qr" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/EGFencingAcademy" },
                  { icon: Twitter, label: "Twitter / X", href: "https://x.com/IndiaEnGarde" },
                  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919356226379" },
                ].map(({ icon: SIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#1a2e5a] hover:text-white hover:bg-[#c8102e] transition-all duration-150"
                    style={{ background: "white", border: "1px solid #d1d5db" }}
                    aria-label={label}
                  >
                    <SIcon size={18} />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Follow us for training highlights, competition results, and academy news.
              </p>
            </div>
          </div>

          {/* Google Map embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div
              className="px-5 py-4 flex items-center gap-2 border-b border-gray-100"
              style={{ background: "white" }}
            >
              <MapPin size={18} color="#c8102e" />
              <span
                className="text-[#0d1f3c] font-bold text-sm uppercase tracking-wide"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Find Us in Pune
              </span>
            </div>
            {/* Google Map embed — replace with actual embed URL */}
            <iframe
              src="https://maps.google.com/maps?q=Shree+Shiv+Chhatrapati+Sports+Complex+Mhalunge+Pune&output=embed"
              width="100%"
              height="380"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="En Garde Fencing Academy Location"
            />
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <a
                href="https://maps.app.goo.gl/gEGqdCtUFPs6wbew7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8102e] text-xs font-semibold hover:underline"
              >
                📍 Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
