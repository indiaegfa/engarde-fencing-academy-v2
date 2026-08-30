import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

export interface BlogPost {
  slug: string;
  date: string;
  dateISO: string;
  title: string;
  author: string;
  excerpt: string;
  image: string;
  imagePosition: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "performance-dip-no-one-talks-about",
    date: "August 11, 2026",
    dateISO: "2026-08-11",
    title: "The Performance Dip No One Talks About: Why Young Athletes Plateau (and How to Fix It)",
    author: "Shweta Chandaliya Avad",
    excerpt: "Every young athlete hits a wall. Progress slows, confidence dips, and doubts creep in. Coach Shweta explains why this plateau happens, why it is actually a sign of growth, and how parents and coaches can guide athletes through it.",
    image: "/images/Vedika_2fbea782.webp",
    imagePosition: "object-top",
    category: "Athlete Perspective"
  },
  {
    slug: "beyond-the-strip",
    date: "August 9, 2026",
    dateISO: "2026-08-09",
    title: "Beyond the Strip: What Fencing Has Taught Me",
    author: "Parthi Bharat Vinchwekar",
    excerpt: "On World Fencing Day, Parthi Bharat Vinchwekar reflects on discipline, mentorship, resilience, and the small daily efforts that shape a student-athlete.",
    image: "/images/Parthi_2296dd6a.jpeg",
    imagePosition: "object-[center_40%]",
    category: "Student Athlete"
  },
  {
    slug: "competitive-or-curious",
    date: "August 7, 2026",
    dateISO: "2026-08-07",
    title: "Competitive or Curious? What Should Young Athletes Really Be?",
    author: "Shweta Chandaliya Avad",
    excerpt: "Five years ago, when I started En Garde Fencing Academy in Pune, I believed something with complete conviction: Indians are naturally good at sports. We only need better opportunities. Over the years, working with hundreds of children, I realised something that was difficult to accept.",
    image: "/images/kids_hug_5700b2fb.jpeg",
    imagePosition: "object-center",
    category: "Coaching Philosophy"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Fira Sans, sans-serif" }}>
      <Navbar />
      <main className="flex-1 pt-[108px]">
        {/* Banner */}
        <div
          className="py-16 text-white text-center"
          style={{ background: "linear-gradient(135deg, #0d1f3c 0%, #1a2e5a 60%, #c8102e 100%)" }}
        >
          <p className="text-[#ff6b6b] font-semibold tracking-widest uppercase text-sm mb-2">
            En Garde Fencing Academy
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto px-4">
            Insights, stories, and coaching wisdom from the piste.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:w-72 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-56 md:h-full object-cover ${post.imagePosition}`}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <span className="inline-block bg-[#c8102e]/10 text-[#c8102e] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-extrabold text-[#0d1f3c] mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        <time dateTime={post.dateISO}>{post.date}</time>
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={13} />
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-[#0d1f3c] hover:bg-[#c8102e] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
