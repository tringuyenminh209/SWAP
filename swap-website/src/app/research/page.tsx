import PageHeader from '@/components/PageHeader';
import OverviewSection from '@/components/research/OverviewSection';
import KeyFindingsSection from '@/components/research/KeyFindingsSection';
import DocumentsSection from '@/components/research/DocumentsSection';
import MethodologySection from '@/components/research/MethodologySection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - SWAP | Stop Waste And Plastic',
  description: 'Evidence-based research on plastic waste in Japanese supermarkets through manager interviews and on-site documentation.',
};

function ResearchCTASection() {
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
          Use Our Research
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Our research is freely available for educators, students, researchers, and advocates.
          Contact us if you'd like to collaborate or learn more.
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

export default function ResearchPage() {
  return (
    <main>
      <PageHeader
        title="Research"
        subtitle="Evidence-based research on plastic waste in Japanese supermarkets"
        icon="mdi:magnify"
        gradient="linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)"
      />
      <OverviewSection />
      <KeyFindingsSection />
      <DocumentsSection />
      <MethodologySection />
      <ResearchCTASection />
    </main>
  );
}
