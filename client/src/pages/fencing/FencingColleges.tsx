import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FencingColleges() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <div className="bg-[#0d1f3c] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>New to Fencing?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Fencing at Colleges &amp; Universities</h1>
            <p className="text-white/70 text-lg max-w-2xl">How fencing can open academic and sporting doors at the college level.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 space-y-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl text-[#0d1f3c] font-semibold">
              Fencing is a recognised sport at the university level in India, and athletes who compete at the national level can benefit from sports quotas and scholarships at leading institutions.
            </p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>AIU (Association of Indian Universities)</h2>
            <p>The Association of Indian Universities (AIU) conducts inter-university fencing championships. Representing your university at the AIU level is a significant achievement and can open doors to national team selection.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>Sports Quota Admissions</h2>
            <p>Many leading universities and colleges in India offer sports quota admissions for fencers who have represented their state or country. This can significantly ease the admissions process for talented athletes.</p>
            <p>Colleges and universities that have historically offered sports quota admissions for fencing include institutions across Maharashtra, Delhi, and other major states. We advise athletes to check with their target institutions directly.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>Sports Scholarships</h2>
            <p>Several institutions offer financial scholarships for athletes who have achieved at the state or national level. Fencing, as an Olympic sport, is typically eligible for these programmes.</p>

            <h2 className="text-2xl font-bold text-[#0d1f3c] mt-8" style={{ fontFamily: "Fira Sans, sans-serif" }}>Starting Early</h2>
            <p>The earlier a student begins fencing, the more time they have to build a competitive record that supports college applications. We recommend starting no later than age 12–14 for athletes with collegiate ambitions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Sports Quota", desc: "State and national-level fencers are eligible for sports quota admissions at many universities." },
              { icon: "💰", title: "Scholarships", desc: "Financial support available for high-achieving athletes at the state and national level." },
              { icon: "🏆", title: "AIU Championships", desc: "Compete at the inter-university level and represent your college on the national stage." },
            ].map((c) => (
              <div key={c.title} className="bg-[#f5f6f8] rounded-2xl p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
