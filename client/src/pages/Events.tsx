import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Award, ArrowRight } from "lucide-react";

const EVENT_HIGHLIGHTS = [
  {
    title: "Happy Streets Pune",
    category: "Community Outreach",
    image: "/images/HappyStreets_05705789.webp",
    desc: "Bringing fencing demonstrations, interactive electronic target drills, and blade awareness to thousands of Pune citizens on open street mornings.",
    badge: "Public Outreach"
  },
  {
    title: "Sports Expo Pune",
    category: "Exhibition & Demos",
    image: "/images/SportsExpo2023_07ebb448.webp",
    desc: "Showcasing Olympic fencing equipment, match simulations, and athlete talent at Pune's premier annual sports and wellness exposition.",
    badge: "Exhibition"
  },
  {
    title: "PMC Schools Grassroots Program",
    category: "Social Initiative",
    image: "/images/UnderprivilegedbuttalenedfencersfromPuneMuncipalitySchools_39452b1f.jpg",
    desc: "Free comprehensive coaching, kit provision, and tournament travel for municipal school athletes through Kosuke Sports Foundation.",
    badge: "Scholarship"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Hero banner */}
        <div
          className="py-16 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-[#ff6b6b] font-semibold tracking-widest uppercase text-sm mb-2">
              Community & Competition
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Events & Outreach
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From open public festivals to grassroots initiatives, discovering fencing across Pune.
            </p>
          </div>
        </div>

        {/* Featured Events Cards */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-3 rounded" />
              <h2 className="text-3xl font-extrabold text-[#0d1f3c]">Recent Initiatives & Festivals</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {EVENT_HIGHLIGHTS.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="h-56 overflow-hidden relative bg-gray-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#0d1f3c]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur shadow">
                        {event.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[#c8102e] text-xs font-bold uppercase tracking-wider block mb-1">
                        {event.category}
                      </span>
                      <h3 className="font-bold text-xl text-[#0d1f3c] mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="py-16 text-white text-center"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">Host a Fencing Demonstration</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Interested in organizing a fencing workshop, sports day demo, or school clinic? Get in touch with our events coordinator.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg"
            >
              Contact Us for Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
