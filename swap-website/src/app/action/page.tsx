import PageHeader from '@/components/PageHeader';
import ActionCardsSection from '@/components/action/ActionCardsSection';
import InitiativesSection from '@/components/action/InitiativesSection';
import WaysToHelpSection from '@/components/action/WaysToHelpSection';
import ContactSection from '@/components/action/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take Action - SWAP | Stop Waste And Plastic',
  description: 'Join SWAP in creating a plastic-free future. Sign our petition, volunteer, and help reduce plastic waste in Japanese supermarkets.',
};

export default function ActionPage() {
  return (
    <main>
      <PageHeader
        title="Take Action"
        subtitle="Join us in creating a plastic-free future. Every action counts!"
        icon="mdi:hand-heart"
        gradient="linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)"
      />
      <ActionCardsSection />
      <InitiativesSection />
      <WaysToHelpSection />
      <ContactSection />
    </main>
  );
}
