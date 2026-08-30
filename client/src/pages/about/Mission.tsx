import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VALUES = [
  { icon: "⚔️", title: "Excellence", desc: "We hold ourselves and our athletes to the highest standards — in technique, in discipline, and in character." },
  { icon: "🤝", title: "Inclusivity", desc: "Fencing is for everyone. We welcome athletes from all backgrounds, ages, and skill levels, and actively work to remove barriers to participation." },
  { icon: "🧠", title: "Holistic Development", desc: "We train the whole person — not just the fencer. Our programs build focus, resilience, strategic thinking, and confidence that extends far beyond the piste." },
  { icon: "🌍", title: "Community Impact", desc: "Through the Kosuke Sports Foundation, we extend the benefits of fencing to underprivileged youth, believing that sport is a powerful vehicle for social change." },
];

export default function Mission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Page hero */}
        <div className="bg-[#0d1f3c] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: "Fira Sans, sans-serif" }}>About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Our Mission</h1>
            <p className="text-white/70 text-lg max-w-2xl">What drives us every day on and off the piste.</p>
          </div>
        </div>

        {/* Mission statement */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="border-l-4 border-[#c8102e] pl-8 mb-12">
              <p className="text-2xl sm:text-3xl font-bold text-[#0d1f3c] leading-snug" style={{ fontFamily: "Fira Sans, sans-serif" }}>
                "To make fencing accessible to every aspiring athlete in Pune and Maharashtra — and to develop champions who excel not only in sport, but in life."
              </p>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At En Garde Fencing Academy, our mission is to introduce, develop, and elevate the sport of fencing in Pune and across Maharashtra. We believe fencing is more than a sport — it is a discipline that sharpens the mind, strengthens the body, and builds character.
              </p>
              <p>
                We are committed to providing structured, world-class coaching to athletes of all ages and abilities — from children taking their first steps on the piste to seasoned competitors aiming for national and international glory.
              </p>
              <p>
                We also recognise our responsibility to the broader community. Through our partnership with the <strong>Kosuke Sports Foundation</strong>, we actively work to bring fencing to students from Pune Municipal Corporation schools, ensuring that talent and passion are never held back by economic circumstance.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#f5f6f8] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-extrabold text-[#0d1f3c] mb-10 text-center" style={{ fontFamily: "Fira Sans, sans-serif" }}>Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="text-xl font-bold text-[#0d1f3c] mb-2" style={{ fontFamily: "Fira Sans, sans-serif" }}>{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
