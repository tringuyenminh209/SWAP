import PageHeader from '@/components/PageHeader';
import StatsSection from '@/components/progress/StatsSection';
import TimelineSection from '@/components/progress/TimelineSection';
import ActivitiesSection from '@/components/progress/ActivitiesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progress - SWAP | Stop Waste And Plastic',
  description: 'Tracking our journey towards a plastic-free future through research, interviews, and community engagement.',
};

export default function ProgressPage() {
  return (
    <main>
      <PageHeader
        title="Our Progress"
        subtitle="Tracking our journey towards a plastic-free future"
        icon="mdi:chart-line"
        gradient="linear-gradient(135deg, var(--sky) 0%, var(--cream) 100%)"
      />
      <StatsSection />
      <TimelineSection />
      <ActivitiesSection />
    </main>
  );
}
