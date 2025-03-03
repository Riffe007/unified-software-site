import AboutHero from "@/components/AboutHero";
import ImageSection from "../../components/ImageSection";
import MissionSection from "@/components/MissionSection";
import ValuesSection from "../../components/ValuesSection";
import LeadershipSection from "@/components/LeadershipSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <ImageSection src="/images/drone.jpg" alt="AI Drone Technology" />
      <MissionSection />
      <VideoSection src="/videos/water.mp4" />
      <ValuesSection />
      <VideoSection src="/videos/traffic.mp4" />
      <LeadershipSection />
      <ImageSection src="/images/OIP (4).jpg" alt="Advanced Robotics" />
      <CertificationsSection />
      <CTASection />
    </main>
  );
}
