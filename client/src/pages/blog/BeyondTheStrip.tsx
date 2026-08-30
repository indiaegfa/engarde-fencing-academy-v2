import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export default function BeyondTheStrip() {
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
              Student Athlete
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Beyond the Strip: What Fencing Has Taught Me
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} /> August 9, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <User size={15} /> Parthi Bharat Vinchwekar
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/Parthi_2296dd6a.jpeg"
              alt="Parthi Bharat Vinchwekar"
              className="w-full h-80 sm:h-96 object-cover object-[center_35%]"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p className="text-xl font-medium text-[#0d1f3c] leading-relaxed">
              When people look at fencing from the outside, they see the white uniform, the mesh mask, and the flash of a blade. They see quick lunges and hear the loud beep of the scoring machine. But for those of us who step onto the piste every day, fencing is something much deeper.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">The Silent Language of the Piste</h2>
            <p>
              Fencing is often called physical chess, but that description only scratches the surface. On the piste, you are completely alone with your opponent. There are no timeouts where a coach can run onto the field and fix your positioning. Every split second requires you to read body language, anticipate intentions, and execute a tactical decision under intense pressure.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">Discipline in the Small Things</h2>
            <p>
              Success in fencing does not come from dramatic moments—it is forged in the thousands of repetitive footwork drills, the hours spent in an en garde stance until your legs burn, and the commitment to showing up even when you are exhausted from schoolwork.
            </p>

            <blockquote className="border-l-4 border-[#c8102e] pl-6 my-8 italic text-lg text-[#0d1f3c] bg-gray-50 p-4 rounded-r-xl">
              "The blade does not lie. It tells you exactly how much effort you put into practice when nobody was watching."
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">Balancing Academics and Athletics</h2>
            <p>
              As a student-athlete at En Garde, fencing has transformed the way I approach my studies. The focus required to track a blade traveling at lightning speed translates directly to the concentration needed during high-stakes exams. It teaches you that setbacks are just data points to analyze and improve upon.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8 mb-4">Gratitude to Mentors</h2>
            <p>
              None of this would be possible without Coach Shweta and the coaching staff at En Garde. Having coaches who hold you to world-class standards while caring deeply about your holistic growth as a human being is a gift that extends far beyond the sport.
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
              href="/enroll"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Start Your Journey
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
