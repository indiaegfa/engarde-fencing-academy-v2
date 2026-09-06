import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0d1f3c] mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>About Private Lessons</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Private lessons are the fastest way to elevate your game. While highly beneficial for fencers of all levels, advancing athletes are encouraged to take them more frequently to refine their technique.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Each one-on-one session is entirely customized to your specific skills, goals, and tactical needs. The specialized techniques and strategies you master during these private sessions are designed to be immediately applied during your group training and open bouting.</p>

            <div className="flex items-center gap-6 p-5 rounded-xl inline-flex" style={{ background: "rgba(200,16,46,0.06)", border: "1px solid rgba(200,16,46,0.15)" }}>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
