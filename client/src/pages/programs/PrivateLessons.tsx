import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function PrivateLessons() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="py-16" style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 100%)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-white">
            <div className="flex items-center gap-3 mb-4"><div className="h-px w-10 bg-[#c8102e]" /><span className="text-[#ff6b6b] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>Programs</span></div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ fontFamily: "Fira Sans, sans-serif" }}>Private Fencing Lessons</h1>
            <p className="text-white/70 text-lg max-w-2xl">The fastest way to elevate your game — one-on-one, fully personalized.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About Private Lessons</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Private lessons are the fastest way to elevate your game. While highly beneficial for fencers of all levels, advancing athletes are encouraged to take them more frequently to refine their technique.</p>
              <p className="text-gray-700 leading-relaxed mb-4">Each one-on-one session is entirely customized to your specific skills, goals, and tactical needs. The specialized techniques and strategies you master during these private sessions are designed to be immediately applied during your group training and open bouting.</p>

              <div className="flex items-center gap-6 p-5 rounded-xl mb-6" style={{ background: "rgba(200,16,46,0.06)", border: "1px solid rgba(200,16,46,0.15)" }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c8102e]" style={{ fontFamily: "Fira Sans, sans-serif" }}>₹500</div>
                  <div className="text-gray-600 text-sm">per lesson</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0d1f3c]" style={{ fontFamily: "Fira Sans, sans-serif" }}>20 min</div>
                  <div className="text-gray-600 text-sm">highly focused</div>
                </div>
              </div>

              <Link href="/enroll" className="btn-primary inline-block px-8 py-3">Book a Private Lesson</Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Scheduling & Policies</h2>
              <ul className="space-y-3 mb-6">
                {[
                  "All private lessons must be scheduled and paid for in advance.",
                  "Fencers are required to arrive at least 30 minutes before their scheduled start time to properly warm up and stretch.",
                  "Private lessons must be rescheduled at least 12 hours in advance.",
                  "No-shows without prior notice will be charged in full.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-[#f5f6f8] rounded-lg px-4 py-3 border border-gray-200">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-[#1a2e5a]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-xl border-l-4 border-[#c8102e] bg-red-50">
                <div className="font-bold text-[#0d1f3c] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>Cancellation Policy</div>
                <p className="text-gray-600 text-sm">Private lessons must be rescheduled at least <strong>12 hours in advance</strong>. Late cancellations may be charged.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
