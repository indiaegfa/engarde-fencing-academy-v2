import { Calendar, ArrowRight, Trophy, Zap, Megaphone } from "lucide-react";

const NEWS = [
  {
    type: "event",
    icon: Trophy,
    tag: "Championship",
    tagColor: "#e8a020",
    title: "Intra-Club Championship 2025",
    date: "August 15–17, 2025",
    excerpt:
      "En Garde's flagship internal competition returns for its annual edition. Athletes across all three batches compete in foil, épée, and sabre events, with medals awarded in junior and senior categories. Open to all enrolled members.",
    image: "/images/training-2.jpg",
    cta: "Register for Championship",
    ctaHref: "#enroll",
  },
  {
    type: "event",
    icon: Zap,
    tag: "Summer Camp",
    tagColor: "#c8102e",
    title: "Competitive Summer Camp 2025",
    date: "May 20 – June 3, 2025",
    excerpt:
      "Two intensive weeks of elite-level training, inter-city scrimmages, and competition simulation. Led by our NIS A-grade certified coaching staff, this camp is designed for athletes who want to accelerate their development during the summer break.",
    image: "/images/training-3.jpg",
    cta: "Sign Up for Camp",
    ctaHref: "#enroll",
  },

  {
    type: "news",
    icon: Megaphone,
    tag: "Community",
    tagColor: "#1a2e5a",
    title: "PMC School Outreach Program Expands",
    date: "March 10, 2025",
    excerpt:
      "Our partnership with Pune Municipal Corporation schools has grown to include three new schools this term. Talented fencers from underprivileged backgrounds now receive free equipment, coaching, and competition support through the En Garde community outreach initiative.",
    image: "/images/community-outreach.jpg",
    cta: "Support the Program",
    ctaHref: "#contact",
  },
];

export default function NewsSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="news" className="section-py bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-accent-center" />
          <h2
            className="text-brand-navy font-display text-4xl sm:text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "Fira Sans, sans-serif" }}
          >
            News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay up to date with championships, camps, community initiatives, and academy announcements.
          </p>
        </div>

        {/* Featured event */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {NEWS.slice(0, 2).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-lift bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
              >
                <div className="relative h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide"
                      style={{ background: item.tagColor, color: "white", fontFamily: "Fira Sans, sans-serif" }}
                    >
                      <Icon size={12} />
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-xs">
                    <Calendar size={13} />
                    {item.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-brand-navy font-bold text-xl uppercase mb-3"
                    style={{ fontFamily: "Fira Sans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{item.excerpt}</p>
                  <button
                    onClick={() => scrollTo(item.ctaHref)}
                    className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all duration-150"
                    style={{ color: item.tagColor, fontFamily: "Fira Sans, sans-serif" }}
                  >
                    {item.cta} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Smaller news cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {NEWS.slice(2).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-lift bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex gap-0"
              >
                <div className="relative w-36 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide mb-2"
                      style={{ background: item.tagColor, color: "white", fontFamily: "Fira Sans, sans-serif" }}
                    >
                      <Icon size={10} />
                      {item.tag}
                    </span>
                    <h3
                      className="text-brand-navy font-bold text-base uppercase mb-2 leading-tight"
                      style={{ fontFamily: "Fira Sans, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar size={11} /> {item.date}
                    </span>
                    <button
                      onClick={() => scrollTo(item.ctaHref)}
                      className="text-xs font-bold uppercase flex items-center gap-1 hover:gap-2 transition-all"
                      style={{ color: item.tagColor, fontFamily: "Fira Sans, sans-serif" }}
                    >
                      Read <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
