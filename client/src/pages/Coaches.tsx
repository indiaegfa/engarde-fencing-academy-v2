import Navbar from "@/components/Navbar";
import CoachesSection from "@/components/CoachesSection";
import Footer from "@/components/Footer";

export default function Coaches() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <CoachesSection />
      </main>
      <Footer />
    </div>
  );
}
