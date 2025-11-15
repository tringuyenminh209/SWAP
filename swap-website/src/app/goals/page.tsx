import PageHeader from '@/components/PageHeader';
import AchievementsSection from '@/components/goals/AchievementsSection';
import ImpactMetricsSection from '@/components/goals/ImpactMetricsSection';
import ProgressTrackingSection from '@/components/goals/ProgressTrackingSection';
import ComparisonSection from '@/components/goals/ComparisonSection';
import TestimonialsSection from '@/components/goals/TestimonialsSection';
import VolunteerSpotlightSection from '@/components/goals/VolunteerSpotlightSection';
import RoadmapSection from '@/components/goals/RoadmapSection';
import FutureGoalsSection from '@/components/goals/FutureGoalsSection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goals & Achievements - SWAP | Stop Waste And Plastic',
  description: 'Track our progress, celebrate achievements, and see our roadmap for creating a plastic-free future in Toyonaka.',
};

function GoalsCTASection() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--pastel-green)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Help Us Achieve Our Goals
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Every signature, every workshop, every conversation brings us closer to a plastic-free future.
          Join us in making a difference!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/action#petition"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:fountain-pen-tip" width={20} />
            Sign Our Petition
          </Link>

          <Link
            href="/action#volunteer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-white text-[var(--gray-900)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:hand-heart" width={20} />
            Volunteer With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function GoalsPage() {
  return (
    <main>
      <PageHeader
        title="Goals & Achievements"
        subtitle="Tracking our progress and celebrating milestones on the journey to a plastic-free future"
        icon="mdi:trophy"
        gradient="linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)"
      />
      <AchievementsSection />
      <ImpactMetricsSection />
      <ProgressTrackingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <VolunteerSpotlightSection />
      <RoadmapSection />
      <FutureGoalsSection />
      <GoalsCTASection />
    </main>
  );
}
