import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
