import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function PerformanceDip() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Header */}
        <div
          className="py-16 text-white"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="inline-block bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Athlete Perspective
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              The Performance Dip No One Talks About: Why Young Athletes Plateau (and How to Fix It)
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} /> August 11, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <User size={15} /> Shweta Chandaliya Avad
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/Vedika_2fbea782.webp"
              alt="Vedika in intense training"
              className="w-full h-80 sm:h-96 object-cover object-top"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p className="text-xl font-medium text-[#0d1f3c] leading-relaxed">
              Every competitive fencer experiences it. In the first year or two, progress feels exponential. New medals arrive, coaches praise their rapid rise, and everything clicks. Then suddenly, without warning, the athlete hits an invisible wall.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">What Causes the Developmental Plateau?</h2>
            <p>
              A performance plateau is rarely caused by a loss of talent. In sports science, this is often the transition from instinctual execution to conscious technical restructuring. When an athlete learns advanced tactics—counter-time attacks, second-intention parries, tempo modulation—their reaction time temporarily slows down as their brain processes new layers of complexity.
            </p>

            <blockquote className="border-l-4 border-[#c8102e] pl-6 my-8 italic text-lg text-[#0d1f3c] bg-gray-50 p-4 rounded-r-xl">
              "A dip in competition results often precedes the biggest technical breakthrough of an athlete's career. You must unlearn comfortable habits to reach elite mastery."
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">Navigating the Psychological Toll</h2>
            <p>
              During this dip, athletes often feel frustrated and wonder if they have peaked. This is where coach-parent alignment is critical. If parents panic and question training volume, the child feels burdened. When coaches, parents, and athletes treat the dip as an expected phase of skill integration, the athlete emerges exponentially sharper.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">Three Concrete Steps to Break Through</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Track Process Metrics, Not Medal Counts:</strong> Measure execution of specific tactical goals during bouts rather than final bout scores.</li>
              <li><strong>Refine Video Analysis:</strong> Watch bout recordings with coaches to demystify small timing and distance errors.</li>
              <li><strong>Prioritize Recovery & Mental Durability:</strong> Incorporate sports physiotherapy, rest cycles, and mental visualization.</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0d1f3c] font-bold hover:text-[#c8102e] transition-colors"
            >
              <ArrowLeft size={16} /> All Articles
            </Link>
            <Link
              href="/programs/competitive"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Competitive Program
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
