import Navbar from "@/components/Navbar";
import PartnershipsSection from "@/components/PartnershipsSection";
import Footer from "@/components/Footer";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[108px]">
        <PartnershipsSection />
      </main>
      <Footer />
    </div>
  );
}
