import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
}
