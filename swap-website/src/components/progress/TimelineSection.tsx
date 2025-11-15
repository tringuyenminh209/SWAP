import { Icon } from '@iconify/react';

interface TimelineItem {
  date: string;
  icon: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: 'LATE 2024',
    icon: 'mdi:lightbulb',
    title: 'SWAP Initiative Founded',
    description: 'Group of high school students came together with a shared vision to tackle plastic waste in Japanese supermarkets. Initial planning and research methodology developed focusing on manager interviews and on-site documentation.'
  },
  {
    date: 'JANUARY 20, 2025',
    icon: 'mdi:camera',
    title: 'First Supermarket Site Visit',
    description: 'Conducted initial research visit to Supermarket 1 with comprehensive photo documentation of plastic packaging practices. Observed both in-store wrapping and distributor packaging methods.'
  },
  {
    date: 'FEBRUARY 1, 2025',
    icon: 'mdi:account-voice',
    title: 'First Manager Interview Completed',
    description: 'Successfully completed manager interview at Supermarket 1. Learned about their reusable packaging system that returns materials to suppliers and municipal recycling. Identified key challenges including customer expectations and sanitation concerns.'
  },
  {
    date: 'FEBRUARY 26, 2025',
    icon: 'mdi:store-search',
    title: 'Second Supermarket Research',
    description: 'Conducted manager interview at Supermarket 2. Discovered their "エフピコ方式" (Efpico recycling method). Manager highlighted labor-intensive processes and challenges with contaminated returned items affecting recycling effectiveness.'
  },
  {
    date: 'ONGOING',
    icon: 'mdi:handshake',
    title: 'Partnership with Toyonaka City Hall',
    description: 'Established partnership with Toyonaka City Hall environmental department. Collaborating on community workshops and city-wide sustainability initiatives to expand awareness and implement plastic reduction solutions.'
  },
  {
    date: 'KEY DISCOVERY',
    icon: 'mdi:lightbulb-on',
    title: 'Simple Solution Identified',
    description: 'Through manager interviews, identified practical solution: training employees to ask customers before adding extra bags could significantly reduce plastic consumption without requiring major system changes or extended implementation periods.'
  },
  {
    date: 'PRESENT',
    icon: 'mdi:chart-line',
    title: 'Expanding Research & Advocacy',
    description: 'Continuing manager interviews and site visits across 6+ supermarket locations. Building evidence-based recommendations for corporate-level policy changes while promoting practical, immediate solutions like employee training programs.'
  }
];

export default function TimelineSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--sand)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Journey
        </h2>

        <div className="max-w-[900px] mx-auto relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block"
            style={{
              background: 'linear-gradient(180deg, var(--pastel-green) 0%, var(--pastel-blue) 100%)',
              transform: 'translateX(-50%)'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Timeline marker */}
                <div
                  className="absolute left-6 md:left-1/2 top-0 w-12 h-12 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2"
                  style={{
                    backgroundColor: 'var(--pastel-green)',
                    border: '4px solid white'
                  }}
                >
                  <Icon
                    icon={item.icon}
                    width={24}
                    style={{ color: 'white' }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-12 md:text-right'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div
                    className="bg-white p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  >
                    <div
                      className="text-sm font-bold mb-2"
                      style={{
                        fontFamily: "'Nunito', 'Quicksand', sans-serif",
                        color: 'var(--pastel-green)'
                      }}
                    >
                      {item.date}
                    </div>

                    <h3
                      className="text-xl md:text-2xl font-semibold mb-4"
                      style={{
                        fontFamily: "'Nunito', 'Quicksand', sans-serif",
                        color: 'var(--gray-900)'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[var(--gray-700)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
