import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function CompetitiveOrCurious() {
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
              Coaching Philosophy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Competitive or Curious? What Should Young Athletes Really Be?
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} /> August 7, 2026
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
              src="/images/kids_hug_5700b2fb.jpeg"
              alt="Young athletes bonding at En Garde"
              className="w-full h-80 sm:h-96 object-cover object-center"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p className="text-xl font-medium text-[#0d1f3c] leading-relaxed">
              Five years ago, when I started En Garde Fencing Academy in Pune, I believed something with complete conviction: Indians are naturally good at sports. We only need better opportunities, modern facilities, and structured coaching.
            </p>

            <p>
              Over the years, working closely with hundreds of children and their families, I realised something that was difficult to accept: In our eagerness to produce champions, we often push children to become <em>competitive</em> before they have even learned to be <em>curious</em>.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">The Danger of Early Specialization and Pressure</h2>
            <p>
              When an eight-year-old child joins a sport, their primary driver is wonder. They want to hold the sword, understand how the electric buzzer triggers, and experience the joy of movement. If adults immediately frame the sport around podiums, rankings, and medal tallies, the child internalizes anxiety instead of mastery.
            </p>

            <blockquote className="border-l-4 border-[#c8102e] pl-6 my-8 italic text-lg text-[#0d1f3c] bg-gray-50 p-4 rounded-r-xl">
              "Curiosity builds athletes who practice because they love the puzzle. Pure competitiveness builds athletes who practice only when they are winning."
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">How We Nurture Long-Term Athletic Development</h2>
            <p>
              At En Garde, our beginner and elementary curriculum is built entirely on gamified learning, blade awareness, and joy. We ensure children fall deeply in love with the art of fencing first. When curiosity is deeply rooted, natural competitiveness follows effortlessly—and when it does, it comes from intrinsic motivation, not external fear.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">A Message to Sports Parents</h2>
            <p>
              Ask your child after training: <em>"Did you try something new today? What was fun?"</em> rather than <em>"Did you win your bouts?"</em> That simple shift in language creates fearless fencers who dare to innovate on the piste.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0d1f3c] font-bold hover:text-[#c8102e] transition-colors"
            >
              <ArrowLeft size={16} /> All Articles
            </Link>
            <Link
              href="/programs/beginners"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Explore Beginner Program
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
