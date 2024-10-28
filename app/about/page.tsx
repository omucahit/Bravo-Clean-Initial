import { HeroSection } from "@/components/about/hero-section";
import { TeamSection } from "@/components/about/team-section";
import { ValuesSection } from "@/components/about/values-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <TeamSection />
    </main>
  );
}