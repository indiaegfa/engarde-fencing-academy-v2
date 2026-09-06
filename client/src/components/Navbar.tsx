import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle, Facebook, Twitter, ChevronDown, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "wouter";

// ─── Nav structure ────────────────────────────────────────────────────────────
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Our Story", href: "/about/story" },
      { label: "Founder & Head Coach", href: "/about/founder" },
      { label: "Our Mission & Values", href: "/about/mission" },
      { label: "Achievements & Medals", href: "/about/achievements" },
    ],
  },
  {
    label: "New to Fencing?",
    children: [
      { label: "What is Fencing?", href: "/fencing/what-is-fencing" },
      { label: "Why Fencing?", href: "/fencing/why-fencing" },
      { label: "Competition Pathway", href: "/fencing/competition-pathway" },
      { label: "Colleges & Universities", href: "/fencing/colleges" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Beginners Program", href: "/programs/beginners" },
      { label: "Elementary Program", href: "/programs/elementary" },
      { label: "Intermediate Program", href: "/programs/intermediate" },
      { label: "Competitive Program", href: "/programs/competitive" },
      { label: "Private Fencing Lessons", href: "/programs/private-lessons" },
      { label: "Strength & Conditioning", href: "/programs/strength-conditioning" },
      { label: "Open Fencing", href: "/programs/open-fencing" },
    ],
  },
  { label: "Our Team", href: "/coaches" },
  {
    label: "Events & Gallery",
    children: [
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Support the Mission", href: "/support-the-mission" },
  { label: "Contact Us", href: "/contact" },
];

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

function DesktopDropdown({ item, location }: { item: NavItem; location: string }) {
  const isActive = item.children
    ? item.children.some((c) => location === c.href)
    : location === item.href;

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={`px-3 py-2.5 text-[0.78rem] font-semibold rounded transition-colors duration-150 tracking-wide uppercase whitespace-nowrap ${
          isActive
            ? "text-[#c8102e] border-b-2 border-[#c8102e]"
            : "text-[#1a2e5a] hover:text-[#c8102e]"
        }`}
        style={{ fontFamily: "Fira Sans, sans-serif" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button
        className={`px-3 py-2.5 text-[0.78rem] font-semibold rounded transition-colors duration-150 tracking-wide uppercase flex items-center gap-1 whitespace-nowrap ${
          isActive
            ? "text-[#c8102e] border-b-2 border-[#c8102e]"
            : "text-[#1a2e5a] hover:text-[#c8102e]"
        }`}
        style={{ fontFamily: "Fira Sans, sans-serif" }}
        tabIndex={0}
      >
        {item.label}
        <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>
      {/* Dropdown on hover */}
      <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 min-w-[230px]">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block px-4 py-2.5 text-sm font-medium hover:bg-[#f0f4ff] hover:text-[#c8102e] transition-colors ${
                location === child.href ? "text-[#c8102e] bg-[#f0f4ff]" : "text-[#1a2e5a]"
              }`}
              style={{ fontFamily: "Fira Sans, sans-serif" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── TOP BAR (NAVY) ── */}
      <div
        className="text-white text-xs px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between"
        style={{ background: "#0d1f3c" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="En Garde Fencing Academy"
              className="h-11 w-11 object-contain rounded-md bg-white p-0.5"
            />
            <div>
              <div
                className="text-white font-extrabold text-base leading-tight tracking-wide uppercase"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                En Garde
              </div>
              <div
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ fontFamily: "Fira Sans, sans-serif", color: "#ffffff" }}
              >
                Fencing Academy
              </div>
            </div>
          </Link>
        </div>

        {/* Right Info */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <a
              href="https://www.instagram.com/engarde_fencingacademy?igsh=YTY3b2thcXM2ZGF3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              style={{ color: "#fff" }}
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/EGFencingAcademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              style={{ color: "#fff" }}
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://x.com/IndiaEnGarde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              style={{ color: "#fff" }}
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://wa.me/919356226379"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#25D366]/20 hover:bg-[#25D366]/40 transition-colors text-[#25D366]"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          <span className="text-white/20">|</span>
          <a href="tel:+919158071777" className="text-white/80 hover:text-white text-[12px] flex items-center gap-1 font-medium transition-colors">
            <Phone size={13} className="text-[#c8102e]" /> +91 91580 71777
          </a>
          <span className="text-white/20">|</span>
          <span className="text-white/80 text-[12px] flex items-center gap-1 font-medium">
            <MapPin size={13} className="text-[#c8102e]" /> Shree Shiv Chhatrapati Sports Complex, Mhalunge, Pune
          </span>
          <Link
            href="/enroll"
            className="ml-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-extrabold text-xs px-4 py-1.5 rounded-lg transition-colors tracking-wide uppercase shadow"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-md hover:bg-white/10 text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── DESKTOP NAVIGATION BAR (WHITE) ── */}
      <nav
        className={`hidden xl:block bg-white border-b border-gray-100 transition-shadow duration-200 ${
          isScrolled ? "shadow-md" : "shadow-xs"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-0.5 flex-wrap">
              {NAV.map((item) => (
                <DesktopDropdown key={item.label} item={item} location={location} />
              ))}
            </div>
            <div>
              <Link
                href="/enroll"
                className="inline-flex items-center gap-1.5 bg-[#c8102e] hover:bg-[#a00d24] text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors uppercase tracking-wider"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV.map((item) => {
              if (item.children) {
                const isOpen = mobileSubmenu === item.label;
                return (
                  <div key={item.label} className="border-b border-gray-50 pb-1">
                    <button
                      onClick={() => setMobileSubmenu(isOpen ? null : item.label)}
                      className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-[#0d1f3c] uppercase tracking-wide hover:text-[#c8102e]"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#c8102e]" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-xl py-2 mb-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-2 px-3 text-xs font-semibold rounded-lg ${
                              location === child.href ? "text-[#c8102e] bg-red-50" : "text-gray-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`block py-2.5 px-3 text-sm font-bold uppercase tracking-wide rounded-lg ${
                    location === item.href ? "text-[#c8102e] bg-red-50" : "text-[#0d1f3c] hover:text-[#c8102e]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 flex gap-3">
              <Link
                href="/enroll"
                className="flex-1 text-center bg-[#c8102e] text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="flex-1 text-center bg-[#0d1f3c] text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
