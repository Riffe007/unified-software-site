import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* AI Video */}
      <VideoSection src="/videos/ai2.mp4" />

      {/* Our Expertise */}
      <ExpertiseSection />

      {/* Dubai Video */}
      <VideoSection src="/videos/dubai.mp4" />

      {/* Solving Complex Problems (Industries) */}
      <IndustriesSection />

      {/* Document AI Video */}
      <VideoSection src="/videos/doc1.mp4" />

      {/* Partner With AI Experts */}
      <CTASection />
    </main>
  );
}
