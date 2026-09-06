import { Instagram, Facebook, Mail, Phone, Twitter, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Open Fencing", href: "/programs/open-fencing" },
  { label: "Our Team", href: "/coaches" },
  { label: "Achievements & Medals", href: "/about/achievements" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "School Partners", href: "/partners" },
  { label: "Support the Mission", href: "/support-the-mission" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#f0f4ff" }}>
      {/* Red top accent bar */}
      <div style={{ height: "4px", background: "linear-gradient(to right, #c8102e, #a00d24)" }} />

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="En Garde Fencing Academy"
                className="h-14 w-14 object-contain rounded bg-white p-1 shadow-sm border border-gray-200"
              />
              <div>
                <div
                  className="text-[#0d1f3c] font-bold text-lg leading-tight uppercase"
                  style={{ fontFamily: "Fira Sans, sans-serif" }}
                >
                  En Garde
                </div>
                <div
                  className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "Fira Sans, sans-serif" }}
                >
                  Fencing Academy
                </div>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Pune's premier fencing academy — building champions through discipline,
              excellence, and community. Certified coaching for all levels from beginner to Olympic pathways.
            </p>
            {/* Kosuke affiliation */}
            <div className="flex items-center gap-2 p-3 rounded-lg mb-5 bg-white border border-gray-200">
              <img
                src="/images/kosuke-logo.png"
                alt="Kosuke Sports Foundation"
                className="h-8 w-8 object-contain bg-white rounded p-0.5 flex-shrink-0"
              />
              <div>
                <div className="text-[#0d1f3c] text-xs font-semibold">Affiliated with</div>
                <div className="text-gray-500 text-xs">Kosuke Sports Foundation (12A & 80G Compliant)</div>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/engarde_fencingacademy?igsh=YTY3b2thcXM2ZGF3&utm_source=qr", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/EGFencingAcademy", label: "Facebook" },
                { icon: Twitter, href: "https://x.com/IndiaEnGarde", label: "Twitter / X" },
                { icon: MessageCircle, href: "https://wa.me/919356226379", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#1a2e5a] hover:text-white hover:bg-[#c8102e] transition-all duration-150 bg-white border border-gray-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-[#0d1f3c] font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "Fira Sans, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#c8102e] text-xs font-medium transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-[#0d1f3c] font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "Fira Sans, sans-serif" }}
            >
              Contact & Locations
            </h4>
            <div className="space-y-4 text-xs text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c8102e] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0d1f3c] block mb-0.5">Academy Location:</strong>
                  1st Floor, Badminton Hall, Shree Shiv Chhatrapati Sports Complex, Mhalunge, Pune – 411045
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#c8102e] flex-shrink-0" />
                <a href="tel:+919158071777" className="hover:text-[#c8102e] transition-colors font-medium">
                  +91 91580 71777
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <a href="https://wa.me/919356226379" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors font-medium">
                  WhatsApp: +91 93562 26379
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#c8102e] flex-shrink-0" />
                <a href="mailto:india.egfa@gmail.com" className="hover:text-[#c8102e] transition-colors font-medium">
                  india.egfa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} En Garde Fencing Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about/mission" className="hover:text-[#c8102e] transition-colors">Mission</Link>
            <Link href="/partners" className="hover:text-[#c8102e] transition-colors">School Partners</Link>
            <Link href="/support-the-mission" className="hover:text-[#c8102e] transition-colors">Support the Mission</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
