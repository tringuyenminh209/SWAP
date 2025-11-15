import PageHeader from '@/components/PageHeader';
import OverviewSection from '@/components/educate/OverviewSection';
import ProgramsSection from '@/components/educate/ProgramsSection';
import WorkshopsSection from '@/components/educate/WorkshopsSection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Educate - SWAP | Stop Waste And Plastic',
  description: 'Raising awareness about the environmental impact of plastic waste through workshops, campaigns, and educational programs.',
};

function EducateCTASection() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--pastel-blue)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Request a Workshop
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Interested in bringing SWAP's educational programs to your school, organization,
          or community event? Contact us to schedule a workshop!
        </p>

        <Link
          href="/action#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
        >
          <Icon icon="mdi:email-outline" width={20} />
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default function EducatePage() {
  return (
    <main>
      <PageHeader
        title="Educate"
        subtitle="Raising awareness about the environmental impact of plastic waste through workshops, campaigns, and educational programs"
        icon="mdi:book-open-outline"
        gradient="linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)"
      />
      <OverviewSection />
      <ProgramsSection />
      <WorkshopsSection />
      <EducateCTASection />
    </main>
  );
}
