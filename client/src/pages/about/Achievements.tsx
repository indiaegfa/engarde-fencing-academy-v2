import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Trophy, Medal, Award, Star, ArrowRight, ShieldCheck } from "lucide-react";

interface Athlete {
  name: string;
  photo: string;
  highlight: string;
  medals: { label: string; value: string; color: string }[];
  bio: string;
  badge: string;
  badgeColor: string;
}

const HALL_OF_FAME: Athlete[] = [
  {
    name: "Jeejau Patil",
    photo: "/images/JeejauPatil_916f38e8.jpg",
    highlight: "2x Thailand Open Bronze · National Gold",
    medals: [
      { label: "Thailand Open", value: "2x Bronze", color: "#b8860b" },
      { label: "National Championships", value: "Gold", color: "#c8102e" },
      { label: "State Championships", value: "Multiple Golds", color: "#1a2e5a" }
    ],
    bio: "Jeejau has represented India internationally at the Thailand Open, winning two bronze medals, and secured multiple National and State championship titles in foil.",
    badge: "🏆 International Medallist",
    badgeColor: "#c8102e"
  },
  {
    name: "Shaurya Ingawale",
    photo: "/images/shauryaingawale_hof_d28857bc.webp",
    highlight: "National Gold Medallist · State Champion",
    medals: [
      { label: "National Championships", value: "Gold", color: "#c8102e" },
      { label: "State Championships", value: "Multiple Golds", color: "#1a2e5a" }
    ],
    bio: "A standout competitive talent, Shaurya clinched National Gold and has dominated state-level youth competitions with exceptional tactical footwork and blade discipline.",
    badge: "🥇 National Champion",
    badgeColor: "#0d1f3c"
  },
  {
    name: "Rajveer Chokhat",
    photo: "/images/RajveerChokhat_hof_e6e1c569.webp",
    highlight: "National Medallist · Senior Youth Mentor",
    medals: [
      { label: "National Championships", value: "Silver / Bronze", color: "#c8102e" },
      { label: "State Championships", value: "Gold", color: "#1a2e5a" }
    ],
    bio: "Rajveer combines fierce competitive excellence on the national circuit with mentoring junior fencers at the academy in tactical precision.",
    badge: "⚔️ National Medallist",
    badgeColor: "#1a2e5a"
  },
  {
    name: "Ahaan Daga",
    photo: "/images/AhaanDaga_2025_8cdc1d97.jpeg",
    highlight: "Thailand Open QF · State Champion",
    medals: [
      { label: "Thailand Open", value: "Quarter-Finalist", color: "#b8860b" },
      { label: "State Championships", value: "Gold", color: "#c8102e" }
    ],
    bio: "Ahaan reached the quarter-finals at the prestigious Thailand Open and consistently ranks among Maharashtra's top youth fencers.",
    badge: "🌏 International QF",
    badgeColor: "#e8a020"
  },
  {
    name: "Vidhi Patil",
    photo: "/images/VidhiPatil_25d26139.jpeg",
    highlight: "State Champion · National Top-8",
    medals: [
      { label: "State Championships", value: "Gold", color: "#c8102e" },
      { label: "National Championships", value: "Top 8", color: "#1a2e5a" }
    ],
    bio: "Vidhi captured the State Championship Gold and secured a Top-8 finish at the National level, establishing herself among the leading young fencers in her category.",
    badge: "🥇 State Champion",
    badgeColor: "#c8102e"
  },
  {
    name: "Anant Sathe",
    photo: "/images/AnantSathe_4efbcf96.jpeg",
    highlight: "School Nationals Bronze · ISSO Gold",
    medals: [
      { label: "School Nationals", value: "Bronze", color: "#c8102e" },
      { label: "ISSO Nationals", value: "Gold", color: "#b8860b" }
    ],
    bio: "Anant won a Bronze Medal at the School Nationals and a Gold at the ISSO Nationals, demonstrating his ability to perform consistently on the national stage.",
    badge: "🎯 National Medallist",
    badgeColor: "#1a2e5a"
  },
  {
    name: "Kavish Uttekar",
    photo: "/images/KavishUttekar_5595e356.jpg",
    highlight: "ISSO Nationals Gold Medallist",
    medals: [
      { label: "ISSO Nationals", value: "Gold", color: "#b8860b" }
    ],
    bio: "Kavish claimed Gold at the ISSO Nationals, proving himself as one of the academy's top performers at school-level national competition.",
    badge: "🥇 ISSO Champion",
    badgeColor: "#c8102e"
  },
  {
    name: "Parthi Bharat Vinchwekar",
    photo: "/images/Parthi_2296dd6a.jpeg",
    highlight: "State Medallist · Student Athlete Leader",
    medals: [
      { label: "State Championships", value: "Medallist", color: "#c8102e" }
    ],
    bio: "Parthi exemplifies student-athlete discipline, balancing high academic honors with competitive fencing podiums and youth leadership.",
    badge: "⭐ Rising Champion",
    badgeColor: "#0d1f3c"
  },
  {
    name: "Vedika",
    photo: "/images/Vedika_2fbea782.webp",
    highlight: "Youth Competitive Fencer",
    medals: [
      { label: "District / State", value: "Medallist", color: "#c8102e" }
    ],
    bio: "Demonstrating explosive speed and tactical resilience, Vedika represents the promising next generation of En Garde competitors.",
    badge: "⚡ Emerging Talent",
    badgeColor: "#c8102e"
  }
];

const STATS = [
  { value: "77", label: "State Championship Medals", sub: "including 24 Gold Medals", icon: Trophy },
  { value: "35", label: "National Medals", sub: "across all categories", icon: Medal },
  { value: "2+", label: "International Medals", sub: "Thailand Open, ISF Games", icon: Award },
  { value: "200+", label: "Athletes Trained", sub: "since founding", icon: Star }
];

export default function Achievements() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Banner */}
        <div
          className="py-16 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
        >
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-[#ff6b6b] font-semibold tracking-widest uppercase text-sm mb-2">
              Excellence on the Piste
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Achievements & Hall of Fame
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              In five years, En Garde Fencing Academy has produced champions at the state, national, and international levels.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map(({ value, label, sub, icon: Icon }) => (
                <div key={label} className="bg-[#f8f9fc] rounded-2xl p-6 text-center border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#c8102e]/10 text-[#c8102e] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-extrabold text-[#0d1f3c] mb-1">{value}</div>
                  <div className="font-bold text-sm text-[#c8102e] mb-1">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Athlete Hall of Fame */}
        <div className="py-16" style={{ background: "#f8f9fc" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block w-12 h-1 bg-[#c8102e] mb-3 rounded" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1f3c]">
                Athlete Hall of Fame
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                Celebrating our talented athletes who have represented Pune, Maharashtra, and India on the championship stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HALL_OF_FAME.map((athlete) => (
                <div
                  key={athlete.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col group"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    <img
                      src={athlete.photo}
                      alt={athlete.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#0d1f3c]/90 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full shadow border border-white/20">
                        {athlete.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-bold text-xl leading-tight">{athlete.name}</h3>
                      <p className="text-[#ff6b6b] text-xs font-semibold mt-0.5">{athlete.highlight}</p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {athlete.bio}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Key Medals</div>
                      <div className="flex flex-wrap gap-1.5">
                        {athlete.medals.map((m) => (
                          <span
                            key={m.label}
                            className="inline-flex items-center gap-1 text-[11px] bg-gray-100 text-[#0d1f3c] font-semibold px-2.5 py-1 rounded-md"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                            {m.label}: <strong>{m.value}</strong>
                          </span>
                        ))}
                      </div>
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
            <h2 className="text-3xl font-extrabold mb-4">Write Your Own Champion Story</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Whether your goal is national medals, college scholarships, or learning an Olympic sport, En Garde provides the pathway.
            </p>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-red-900/30"
            >
              Enroll in Competitive Training <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
