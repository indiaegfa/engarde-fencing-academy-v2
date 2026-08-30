import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  { src: "/images/IMG_8955_76fb8dec.webp", alt: "Coach and athletes at Asian Championships", category: "Competition" },
  { src: "/images/IMG_8965_2208f830.webp", alt: "Athletes at national championship venue", category: "Competition" },
  { src: "/images/3d52f0fc-5779-4eac-b9f7-3d64286319d2_a51ce33e.jpg", alt: "Team of fencers in full gear at competition", category: "Competition" },
  { src: "/images/IMG_8634_converted_7a761f0b.jpg", alt: "En Garde team at competition desk", category: "Competition" },
  { src: "/images/IMG_8600_1e53a21c.webp", alt: "Fencing bout in action", category: "Training" },
  { src: "/images/IMG_8358_31c813a8.webp", alt: "Training session at the academy", category: "Training" },
  { src: "/images/IMG_4022_f1faa91d.webp", alt: "Athletes during practice drill", category: "Training" },
  { src: "/images/IMG_2532_483de05f.webp", alt: "Fencing footwork training", category: "Training" },
  { src: "/images/IMG_2397_416ecbd6.webp", alt: "Group training on the piste", category: "Training" },
  { src: "/images/IMG_1460_348411a2.webp", alt: "Young fencers warming up", category: "Training" },
  { src: "/images/IMG_8858_ebb35f88.webp", alt: "Athletes at competition arena", category: "Competition" },
  { src: "/images/IMG_8929_367d3654.webp", alt: "Fencer in action during bout", category: "Competition" },
  { src: "/images/IMG20260430194026_dd6704b0.webp", alt: "Academy group photo", category: "Community" },
  { src: "/images/IMG_3502_2175ae96.webp", alt: "Young athletes celebrating at the sports complex", category: "Community" },
  { src: "/images/IMG20260531163542_22f2a616.webp", alt: "Academy outing — team bonding", category: "Community" },
  { src: "/images/IMG_5738_01240912.webp", alt: "Fencing demonstration event", category: "Events" },
  { src: "/images/IMG_7266_5c8f2297.webp", alt: "Young athlete at En Garde banner", category: "Events" },
  { src: "/images/IMG_8623_34d699b0.webp", alt: "Competition preparation", category: "Competition" },
  { src: "/images/IMG_8672_converted_76830383.jpg", alt: "Coaches at sports expo booth", category: "Events" },
  { src: "/images/IMG_8697_converted_b92e797b.jpg", alt: "Academy team at event venue", category: "Events" },
  { src: "/images/16f4f672-ca17-4306-a98e-00bb829e78a4_52566fbe.jpg", alt: "Fencers after a successful bout", category: "Competition" },
  { src: "/images/595905f0-99d2-44a5-8ccd-c7e356c918e9_e154e3f5.jpg", alt: "Athletes with medals", category: "Competition" },
  { src: "/images/50073442-507e-4346-8582-7d48d2dcdba7_b9948838.jpg", alt: "Team spirit at the academy", category: "Community" },
  { src: "/images/bdac6919-758b-46a2-ba42-93ca81867a26_23b63aab.jpg", alt: "Fencing practice session", category: "Training" },
  { src: "/images/WhatsAppImage2026-05-02at5.36.08PM_a980456f.jpeg", alt: "Academy event highlights", category: "Events" },
  { src: "/images/IMG20251221151114_b2bcd828.webp", alt: "Academy end-of-year gathering", category: "Community" },
  { src: "/images/IMG_20230312_145353_504b517d.webp", alt: "Fencing workshop at school", category: "Events" },
  { src: "/images/IMG_20260501_151242_1_4b4cc3ed.webp", alt: "Athletes at training camp", category: "Training" },
  { src: "/images/IMG_20260525_093329_95daa5f3.webp", alt: "Competition day preparation", category: "Competition" }
];

const CATEGORIES = ["All", "Training", "Competition", "Community", "Events"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="section-py bg-white" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-accent-center" />
          <p className="text-[#c8102e] font-semibold tracking-widest uppercase text-sm mb-2">
            Moments on the Piste
          </p>
          <h2
            className="text-[#0d1f3c] text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Photo Gallery
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Training, tournaments, celebrations, and community initiatives across Pune and India.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#c8102e] text-white shadow-md shadow-red-900/20"
                  : "bg-gray-100 text-[#0d1f3c] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={item.src + idx}
              onClick={() => setLightbox(item.src)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100 aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white text-xs font-bold leading-tight">{item.alt}</span>
                <span className="text-[#ff6b6b] text-[10px] uppercase tracking-wider mt-1 font-semibold">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-full p-1.5 text-white">
                <ZoomIn size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox}
                alt="En Garde Fencing Gallery"
                className="max-h-[85vh] w-auto mx-auto rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
