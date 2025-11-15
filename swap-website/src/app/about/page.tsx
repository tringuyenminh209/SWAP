import PageHeader from '@/components/PageHeader';
import StorySection from '@/components/about/StorySection';
import TimelineSection from '@/components/about/TimelineSection';
import ValuesSection from '@/components/about/ValuesSection';
import ImpactStatsSection from '@/components/about/ImpactStatsSection';
import SDGsSection from '@/components/about/SDGsSection';
import TeamSection from '@/components/about/TeamSection';
import PartnersSection from '@/components/about/PartnersSection';
import FAQSection from '@/components/about/FAQSection';
import CTASection from '@/components/home/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - SWAP | Stop Waste And Plastic',
  description: 'Learn about SWAP\'s mission, team, and journey to reduce plastic waste in Japanese supermarkets',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="A high school student-led initiative tackling plastic waste in Japanese supermarkets"
        icon="mdi:account-group"
      />
      <StorySection />
      <TimelineSection />
      <ValuesSection />
      <ImpactStatsSection />
      <SDGsSection />
      <TeamSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
