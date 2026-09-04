import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OurStory() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Fira Sans, sans-serif" }}>Our Story</h1>
            <p className="text-white/70 text-lg max-w-2xl">From a single piste to Pune's leading fencing academy — the journey of En Garde.</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl text-[#0d1f3c] font-semibold leading-relaxed">
              En Garde Fencing Academy was founded with a single, powerful belief: that fencing — one of the world's oldest and most intellectually demanding sports — deserves a home in Pune.
            </p>
            <p>
              Founded by <strong>Shweta Chandaliya Avad</strong>, an international-level fencer who represented India at the Senior World Fencing Championships in 2005 (Russia) and 2007 (Germany), the academy was born out of a desire to give young athletes in Pune access to the same world-class training she experienced on the international stage.
            </p>
            <p>
              What started as a small group of enthusiastic beginners at the Shree Shiv Chhatrapati Sports Complex in Mhalunge has grown into a thriving community of over 200 trained athletes — from first-time beginners as young as 7 years old to national-level competitors.
            </p>
            <p>
              The academy's growth has been driven not just by results — though those speak for themselves, with athletes winning medals at state, national, and international levels — but by a commitment to making fencing accessible to all. Through the <strong>Kosuke Sports Foundation</strong>, En Garde has extended its reach to students from Pune Municipal Corporation schools, giving underprivileged but talented young fencers a pathway to the sport.
            </p>
            <p>
              Today, En Garde Fencing Academy is recognised as one of India's leading fencing institutions, with formal school partnerships, a certified coaching team, and a growing presence at national competitions. But the heart of the academy remains the same as it was on day one: a love for the sport, a belief in every athlete, and the conviction that fencing builds not just champions — but character.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {[
                { value: "200+", label: "Athletes Trained" },
                { value: "Many", label: "State, National & International Medals" },
                { value: "2", label: "International Medals" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#f5f6f8] rounded-xl p-6 text-center border border-gray-200">
                  <div className="text-3xl font-extrabold text-[#c8102e] mb-1" style={{ fontFamily: "Fira Sans, sans-serif" }}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
