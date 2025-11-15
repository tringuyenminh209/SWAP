import Image from 'next/image';
import { Icon } from '@iconify/react';

interface SDG {
  number: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const sdgs: SDG[] = [
  {
    number: 12,
    title: 'SDG 12',
    description: 'Responsible Consumption and Production - Reducing waste and promoting sustainable practices in supermarkets',
    image: '/images/SDGs12.gif',
    link: 'https://sdgs.un.org/goals/goal12'
  },
  {
    number: 13,
    title: 'SDG 13',
    description: 'Climate Action - Combating climate change by reducing plastic pollution and promoting eco-friendly alternatives',
    image: '/images/SDGs13.png',
    link: 'https://sdgs.un.org/goals/goal13'
  },
  {
    number: 14,
    title: 'SDG 14',
    description: 'Life Below Water - Protecting marine ecosystems from plastic pollution by reducing single-use plastics at the source',
    image: '/images/SDGs14.png',
    link: 'https://sdgs.un.org/goals/goal14'
  }
];

export default function SDGsSection() {
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
          Our SDG Alignment
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          SWAP is committed to supporting the United Nations Sustainable Development Goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {sdgs.map((sdg) => (
            <a
              key={sdg.number}
              href={sdg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit block group"
            >
              <div className="bg-white p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center text-center gap-4 relative overflow-hidden h-full transition-all group-hover:-translate-y-2 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-transform origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'linear-gradient(90deg, var(--pastel-green), var(--pastel-blue))' }}
                />

                {/* SDG Icon */}
                <div className="w-[120px] h-[120px] flex items-center justify-center rounded-[var(--radius-soft)] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
                  <Image
                    src={sdg.image}
                    alt={sdg.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {sdg.title}
                  </h3>
                  <p className="text-[15px] text-[var(--gray-700)] leading-relaxed">
                    {sdg.description}
                  </p>

                  {/* Learn more link */}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold mt-2 transition-all group-hover:gap-2"
                    style={{ color: 'var(--pastel-blue)' }}
                  >
                    Learn more
                    <Icon icon="mdi:arrow-right" width={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
