import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
