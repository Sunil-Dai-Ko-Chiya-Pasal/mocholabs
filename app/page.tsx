import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TestimonialsSection from "@/components/TestimonialSection";
import CapabilitiesSection from "@/components/CapabilitesSection";
import EngineeringHero from "@/components/EngineeringHero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <WhySection />
      <CapabilitiesSection />
      <EngineeringHero />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
