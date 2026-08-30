import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
}
