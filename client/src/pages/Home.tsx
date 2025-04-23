import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-inter text-dark bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
