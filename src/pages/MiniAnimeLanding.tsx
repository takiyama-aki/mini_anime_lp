import HeaderSection from "@/components/miniAnimeLanding/HeaderSection";
import HeroSection from "@/components/miniAnimeLanding/HeroSection";
import AboutSection from "@/components/miniAnimeLanding/AboutSection";
import SampleSection from "@/components/miniAnimeLanding/SampleSection";
import TiersSection from "@/components/miniAnimeLanding/TiersSection";
import FAQSection from "@/components/miniAnimeLanding/FAQSection";
import ContactSection from "@/components/miniAnimeLanding/ContactSection";
import FooterSection from "@/components/miniAnimeLanding/FooterSection";

export default function MiniAnimeLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <SampleSection />
      <TiersSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
