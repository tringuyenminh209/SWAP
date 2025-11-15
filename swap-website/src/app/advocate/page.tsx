import PageHeader from '@/components/PageHeader';
import OverviewSection from '@/components/advocate/OverviewSection';
import AdvocacyAreasSection from '@/components/advocate/AdvocacyAreasSection';
import SuccessStoriesSection from '@/components/advocate/SuccessStoriesSection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advocate - SWAP | Stop Waste And Plastic',
  description: 'Working with supermarkets and businesses to reduce single-use plastic packaging and promote sustainable alternatives.',
};

function AdvocateCTASection() {
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
          Join Our Advocacy Efforts
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Your voice matters. Help us advocate for sustainable packaging by signing our
          petition, contacting your local supermarkets, or joining our campaigns.
        </p>

        <Link
          href="/action"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
        >
          <Icon icon="mdi:hand-heart" width={20} />
          Take Action Now
        </Link>
      </div>
    </section>
  );
}

export default function AdvocatePage() {
  return (
    <main>
      <PageHeader
        title="Advocate"
        subtitle="Working with supermarkets and businesses to reduce single-use plastic packaging and promote sustainable alternatives"
        icon="mdi:bullhorn"
        gradient="linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)"
      />
      <OverviewSection />
      <AdvocacyAreasSection />
      <SuccessStoriesSection />
      <AdvocateCTASection />
    </main>
  );
}
