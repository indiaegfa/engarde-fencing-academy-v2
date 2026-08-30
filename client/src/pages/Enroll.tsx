import Navbar from "@/components/Navbar";
import EnrollSection from "@/components/EnrollSection";
import Footer from "@/components/Footer";

export default function Enroll() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <EnrollSection />
      </main>
      <Footer />
    </div>
  );
}
