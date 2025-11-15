import PageHeader from '@/components/PageHeader';
import OverviewSection from '@/components/collaborate/OverviewSection';
import PartnersSection from '@/components/collaborate/PartnersSection';
import OpportunitiesSection from '@/components/collaborate/OpportunitiesSection';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaborate - SWAP | Stop Waste And Plastic',
  description: 'Partnering with local organizations, schools, and businesses to create practical solutions for reducing plastic waste.',
};

function CollaborateCTASection() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--mint)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Interested in Partnering?
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          We're always looking for partners who share our vision of a plastic-free future.
          Contact us to discuss collaboration opportunities!
        </p>

        <Link
          href="/action#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
        >
          <Icon icon="mdi:email-outline" width={20} />
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default function CollaboratePage() {
  return (
    <main>
      <PageHeader
        title="Collaborate"
        subtitle="Partnering with local organizations, schools, and businesses to create practical solutions for reducing plastic waste"
        icon="mdi:handshake"
        gradient="linear-gradient(135deg, var(--mint) 0%, var(--pastel-green) 100%)"
      />
      <OverviewSection />
      <PartnersSection />
      <OpportunitiesSection />
      <CollaborateCTASection />
    </main>
  );
}
