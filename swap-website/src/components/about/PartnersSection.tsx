import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Partner {
  name: string;
  description: string;
  icon: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: 'Toyonaka City Hall',
    description: 'Official partnership with the Environmental Department for city-wide sustainability initiatives and policy development.',
    icon: 'mdi:office-building',
    href: '/toyonaka-partnership'
  },
  {
    name: 'ECC Volunteer Center',
    description: 'Collaboration with ECC Kokusai Gaikokugo for volunteer recruitment, events, and student engagement programs.',
    icon: 'mdi:school',
    href: '/ecc-volunteer'
  },
  {
    name: 'Local Supermarkets',
    description: 'Working relationships with 6+ supermarket locations across Osaka for research access and sustainable packaging advocacy.',
    icon: 'mdi:store',
    href: '#'
  }
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Partners
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          Working together with organizations that share our vision for a plastic-free future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.href}
              className="no-underline text-inherit"
            >
              <div className="bg-white p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-6 transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] md:flex-col md:text-center">
                <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-[var(--sand)] rounded-[var(--radius-soft)]">
                  <Icon icon={partner.icon} width={48} style={{ color: 'var(--pastel-green)' }} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {partner.name}
                  </h3>
                  <p className="text-sm text-[var(--gray-700)] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
