import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Heart, MessageSquare, TrendingUp, Award, CheckCircle2 } from "lucide-react";

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
            <div className="inline-block bg-[#c8102e] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4 shadow-sm">
              Coaching Philosophy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Competitive or Curious? What Should Young Athletes Really Be?
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/85 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-[#c8102e]" /> August 7, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <User size={15} className="text-[#c8102e]" /> Shweta Chandaliya Avad
              </span>
              <span className="text-xs text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full">
                Founder &amp; Head Coach, En Garde Fencing Academy, Pune
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Featured Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="/images/kids_hug_5700b2fb.jpeg"
              alt="Young athletes bonding and sharing joy at En Garde Fencing Academy"
              className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-center"
            />
            <div className="bg-gray-50 px-4 py-2.5 text-xs text-gray-500 text-center italic border-t border-gray-100">
              Nurturing joy, curiosity, and camaraderie among young athletes at En Garde Fencing Academy
            </div>
          </div>

          <div className="text-gray-700 space-y-7 leading-relaxed text-lg">
            {/* Opening Intro */}
            <p className="text-xl sm:text-2xl font-medium text-[#0d1f3c] leading-relaxed border-l-4 border-[#c8102e] pl-5 py-1">
              Five years ago, when I started <strong>En Garde Fencing Academy</strong> in Pune, I believed something with complete conviction: <em>Indians are naturally good at sports. We only need better opportunities.</em>
            </p>

            <p>
              Over the years, working with hundreds of children, I realised something that was difficult to accept.
            </p>

            <p className="font-semibold text-[#0d1f3c]">
              The problem isn't a lack of talent.
            </p>

            <p>
              The problem is that many children today are not physically prepared to play any sport.
            </p>

            <p>
              This is not a criticism of our children. It is a reflection of how our lifestyles have changed.
            </p>

            <p>
              Many children who join our academy between the ages of six and nine have never really run. They struggle to jump. Throwing and catching are difficult. Balancing on one leg is a challenge. These are not fencing skills—they are <strong>Fundamental Movement Skills</strong>, the building blocks of every sport.
            </p>

            <p>
              Yet, on the very first day, many families dream of an Olympic medal.
            </p>

            {/* Core Question Highlight Box */}
            <div className="bg-gradient-to-r from-[#0d1f3c] to-[#1a2e5a] text-white p-6 sm:p-8 rounded-2xl my-8 shadow-md">
              <p className="text-xl sm:text-2xl font-bold text-center leading-snug">
                "How can we build a champion without first building an athlete?"
              </p>
            </div>

            {/* Section: First Learn to Move */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-4 border-t border-gray-200">
              First Learn to Move
            </h2>

            <p>
              Fencing is one of the most technical Olympic sports. It demands speed, balance, coordination, agility, decision-making and mental resilience.
            </p>

            <p>
              Before learning a perfect lunge or a beautiful attack, a child must first learn to move confidently.
            </p>

            {/* Fundamental Movement Skills List / Pills */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#c8102e] mb-4">
                The Core Foundation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Running", "Skipping", "Jumping", "Balancing", "Changing direction"].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm text-sm font-semibold text-[#0d1f3c]"
                  >
                    <CheckCircle2 size={16} className="text-[#c8102e] flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              These may look like simple exercises, but they are the foundation of every future champion.
            </p>

            <p className="font-semibold text-[#0d1f3c] italic">
              Without a strong foundation, even the tallest building cannot stand.
            </p>

            {/* Section: The Wrong Question */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              The Wrong Question
            </h2>

            <p>After every class, many parents ask their children:</p>

            <div className="bg-red-50/60 border-l-4 border-[#c8102e] rounded-r-xl p-5 space-y-2 text-[#0d1f3c]">
              <p className="font-bold text-lg">"How many bouts did you win today?"</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Or,</p>
              <p className="font-bold text-lg">"Why did you lose?"</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Sometimes they ask,</p>
              <p className="font-bold text-lg">"Why didn't coach make you play more bouts?"</p>
            </div>

            <p>I always wonder...</p>

            <p className="text-xl font-bold text-[#0d1f3c]">
              Why are we making an eight-year-old so obsessed with winning?
            </p>

            <p>
              At this age, shouldn't we be obsessed with learning?
            </p>

            {/* Conversation Comparison Box */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm my-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0d1f3c]">
                <MessageSquare size={17} className="text-[#c8102e]" />
                <span>Imagine if the conversation changed...</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-xs">
                  <p className="text-sm text-gray-500 font-semibold mb-0.5">Parent:</p>
                  <p className="font-medium text-[#0d1f3c]">"What did you learn today?"</p>
                </div>
                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100 shadow-xs ml-4">
                  <p className="text-sm text-emerald-800 font-semibold mb-0.5">Child:</p>
                  <p className="font-medium text-emerald-950">"I learnt skipping."</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-xs">
                  <p className="text-sm text-gray-500 font-semibold mb-0.5">Parent:</p>
                  <p className="font-medium text-[#0d1f3c]">"Wonderful! How many continuous skips did you do today?"</p>
                </div>
                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100 shadow-xs ml-4">
                  <p className="text-sm text-emerald-800 font-semibold mb-0.5">Child:</p>
                  <p className="font-medium text-emerald-950">"Ten."</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-xs">
                  <p className="text-sm text-gray-500 font-semibold mb-0.5">Parent:</p>
                  <p className="font-medium text-[#0d1f3c]">"Fantastic! Yesterday you could do only six."</p>
                </div>
              </div>
            </div>

            <p className="font-medium text-[#0d1f3c]">
              That simple conversation changes everything.
            </p>

            <p>
              The child starts valuing improvement instead of comparison.
            </p>

            <p>
              They begin enjoying the learning process instead of fearing failure.
            </p>

            {/* Section: Competition Is Important... But Timing Is More Important */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              Competition Is Important... But Timing Is More Important
            </h2>

            <p>Don't misunderstand me.</p>

            <p>Sport is competitive by nature.</p>

            <p>Every athlete wants to win.</p>

            <p>Every coach wants medals.</p>

            <p>Every parent dreams of seeing their child on the podium.</p>

            <p>There is nothing wrong with that.</p>

            {/* Highlighted Quote Box */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#c8102e] p-6 rounded-r-2xl my-6">
              <p className="text-2xl font-bold text-[#0d1f3c] mb-2 leading-snug">
                Medals are outcomes. Learning is the process.
              </p>
              <p className="text-gray-700">
                When we become obsessed with outcomes too early, we often destroy the process that actually produces champions.
              </p>
            </div>

            {/* Section: Every Olympian Has Failed */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              Every Olympian Has Failed
            </h2>

            <p>People see Olympic medals.</p>

            <p>They don't see the thousands of defeats behind them.</p>

            <p>
              Ask any Olympian how many times they have lost. The answer will surprise you.
            </p>

            <p>
              They have probably failed far more times than a district-level gold medallist.
            </p>

            <p className="font-bold text-[#0d1f3c]">Why?</p>

            <p>Because they kept competing against better athletes.</p>

            <p>They kept learning.</p>

            <p>They kept improving.</p>

            <div className="bg-gray-100/90 text-[#0d1f3c] font-bold text-xl sm:text-2xl p-6 rounded-2xl text-center shadow-inner my-6">
              "Failure wasn't the opposite of success. Failure was part of success."
            </div>

            {/* Section: Compete With Yesterday's You */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              Compete With Yesterday's You
            </h2>

            <p>
              Whether you are a parent, coach or athlete, I believe there is only one healthy competition:
            </p>

            <p className="text-2xl font-extrabold text-[#c8102e]">
              "Can I become better than I was yesterday?"
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5 my-4">
              {[
                "Can I skip five more times?",
                "Can I run a little faster?",
                "Can I balance a little longer?",
                "Can I execute today's lesson better than last week?"
              ].map((q, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 border border-gray-200/90 p-4 rounded-xl text-gray-800 font-medium">
                  <TrendingUp size={18} className="text-[#c8102e] flex-shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
            </div>

            <p className="font-semibold text-[#0d1f3c]">
              If the answer is yes, you are already winning.
            </p>

            <p>The medals will eventually follow.</p>

            {/* Section: The Match I'd Rather Lose */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              The Match I'd Rather Lose
            </h2>

            <p>This may sound strange coming from a fencing coach.</p>

            <p className="text-xl font-bold text-[#0d1f3c]">
              But I would rather see my athlete lose <span className="text-[#c8102e]">14–15</span> after fencing brilliantly than win <span className="text-emerald-700">15–0</span> against a much weaker opponent.
            </p>

            <p className="font-bold text-[#0d1f3c]">Why?</p>

            <p>Because the close loss teaches courage.</p>

            <p>It teaches decision-making under pressure.</p>

            <p>It teaches resilience.</p>

            <p className="font-semibold text-[#0d1f3c]">
              Most importantly, it shows that the athlete is growing.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl text-[#0d1f3c] font-medium my-4">
              Easy victories often teach very little. Difficult defeats can teach everything.
            </div>

            {/* Section: A Message to Parents */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1f3c] pt-6 border-t border-gray-200">
              A Message to Parents
            </h2>

            <p>
              I am incredibly proud of the parents who choose fencing for their children.
            </p>

            <p>
              Fencing is still a niche sport in India. It requires commitment, patience and investment. You have chosen a path that very few dare to take.
            </p>

            <p className="font-bold text-xl text-[#0d1f3c]">
              Now I have one request.
            </p>

            <p className="text-lg font-medium text-[#c8102e]">
              Please don't measure your child's progress only by medals.
            </p>

            {/* Checklist of Real Progress */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-3.5 shadow-sm">
              <h3 className="text-base font-bold text-[#0d1f3c] uppercase tracking-wider mb-2">
                Measure their journey by:
              </h3>
              {[
                { title: "Confidence", desc: "The quiet belief in their own capabilities on and off the strip" },
                { title: "Discipline", desc: "Showing up consistently, listening with intent, and respecting the craft" },
                { title: "Resilience", desc: "Taking a tough touch or bout in stride and standing right back en garde" },
                { title: "The Smile", desc: "The pure joy and excitement with which they walk into the academy" },
                { title: "The Skills", desc: "The fresh movement fundamentals and tactical lessons they pick up each week" },
                { title: "Willingness to Try Again", desc: "Daring to make mistakes, innovate, and bounce back after failing" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-100 shadow-xs">
                  <CheckCircle2 size={18} className="text-[#c8102e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0d1f3c]">{item.title}</span> — <span className="text-gray-600 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-semibold text-[#0d1f3c]">
              Those are the qualities that create champions—not just in sport, but in life.
            </p>

            <p>
              At En Garde Fencing Academy, our goal is certainly to produce international medal winners.
            </p>

            <p>
              But before that, we want to create children who love learning, embrace challenges, and become a little better every single day.
            </p>

            {/* Concluding Banner */}
            <div className="bg-gradient-to-br from-[#0d1f3c] via-[#1a2e5a] to-[#c8102e] text-white p-8 rounded-2xl shadow-xl my-8 text-center">
              <Award className="mx-auto text-amber-300 mb-3" size={36} />
              <p className="text-2xl sm:text-3xl font-extrabold leading-snug">
                "Because when learning becomes the goal, excellence becomes the outcome."
              </p>
            </div>
          </div>

          {/* Author Bio Card */}
          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
            <img
              src="/images/coach-shweta.jpg"
              alt="Coach Shweta Chandaliya Avad"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top border-4 border-white shadow-md flex-shrink-0"
            />
            <div className="text-center sm:text-left space-y-2">
              <div className="inline-block bg-[#c8102e]/10 text-[#c8102e] text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Author
              </div>
              <h3 className="text-xl font-bold text-[#0d1f3c]">Shweta Chandaliya Avad</h3>
              <p className="text-sm font-semibold text-[#c8102e]">
                Founder &amp; Head Coach, En Garde Fencing Academy, Pune
              </p>
              <p className="text-gray-600 text-sm leading-relaxed pt-1">
                National and international fencing coach with over a decade of competitive and mentoring experience. Committed to grassroots athlete development, fundamental movement skills, and creating world-class fencing champions from India.
              </p>
            </div>
          </div>

          {/* Bottom Navigation & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0d1f3c] font-bold hover:text-[#c8102e] transition-colors"
            >
              <ArrowLeft size={16} /> All Articles
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/programs/beginners"
                className="btn-primary text-sm px-6 py-2.5 shadow-md"
              >
                Explore Beginner Program
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
