import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function LogoStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Logo + Academy Name */}
          <div className="flex items-center gap-5">
            <img
              src="/images/logo.png"
              alt="En Garde Fencing Academy"
              className="h-20 w-20 object-contain rounded-xl bg-white p-1 shadow-md border border-gray-200"
            />
            <div>
              <h2
                className="text-[#0d1f3c] font-extrabold text-2xl sm:text-3xl leading-tight uppercase"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                En Garde
              </h2>
              <div
                className="text-[#c8102e] text-sm font-bold tracking-widest uppercase"
                style={{ fontFamily: "Fira Sans, sans-serif" }}
              >
                Fencing Academy
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Pune's Premier Fencing Academy
              </div>
            </div>
          </div>

          {/* Enroll CTA */}
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/enroll"
              className="btn-primary text-base px-10 py-3.5 font-bold tracking-wide"
              style={{ fontFamily: "Fira Sans, sans-serif" }}
            >
              Enroll Now
            </Link>
            <span className="text-gray-400 text-xs">Open to all ages · No experience needed</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Follow Us</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/engarde_fencingacademy?igsh=YTY3b2thcXM2ZGF3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all shadow-sm"
                style={{ color: "#E1306C" }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/EGFencingAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm"
                style={{ color: "#1877F2" }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/IndiaEnGarde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all shadow-sm"
                style={{ color: "#000" }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://wa.me/919356226379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all shadow-sm"
                style={{ color: "#25D366" }}
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
