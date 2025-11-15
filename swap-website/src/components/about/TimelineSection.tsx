import { Icon } from '@iconify/react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: 'SEPTEMBER 2024',
    title: 'The Idea Sparks',
    description: 'SWAP was born during a high school environmental science class discussion about Japan\'s plastic waste challenge. Founder Annabelle Siddons recognized the need for student-led action targeting supermarket packaging.',
    icon: 'mdi:lightbulb'
  },
  {
    date: 'NOVEMBER 2024',
    title: 'First Research Visit',
    description: 'Conducted initial supermarket research, documenting packaging practices and interviewing managers. The findings revealed the complexity of the plastic packaging issue and inspired our evidence-based approach.',
    icon: 'mdi:magnify'
  },
  {
    date: 'JANUARY 2025',
    title: 'Official Launch & Partnerships',
    description: 'SWAP officially launched with a team of dedicated volunteers. Established partnerships with ECC Volunteer Center and began systematic research across 6+ supermarket locations.',
    icon: 'mdi:rocket-launch'
  },
  {
    date: 'MARCH 2025',
    title: 'Toyonaka City Hall Partnership',
    description: 'Secured official partnership with Toyonaka City Hall\'s Environmental Department, gaining governmental support and resources to expand our community impact and policy advocacy efforts.',
    icon: 'mdi:handshake'
  },
  {
    date: 'ONGOING',
    title: 'Growing Movement',
    description: 'Today, SWAP continues to grow with 75+ active volunteers, expanding research, advocacy campaigns, and community education programs. Our movement is gaining momentum across Osaka and beyond.',
    icon: 'mdi:chart-line-variant'
  }
];

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Journey
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          From a school project to a community movement - here's how SWAP evolved
        </p>

        <div className="max-w-[900px] mx-auto relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"
            style={{
              background: 'linear-gradient(180deg, var(--pastel-green), var(--pastel-blue))',
              borderRadius: '2px'
            }}
          />

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-8 mb-12 relative ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } flex-col md:flex-row`}
            >
              {/* Content */}
              <div className="flex-1 bg-[var(--sand)] p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:pl-12 md:pr-12">
                <div
                  className="text-sm font-bold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--pastel-green)'
                  }}
                >
                  {item.date}
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
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

              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 rounded-full flex items-center justify-center z-10 hidden md:flex"
                style={{ borderColor: 'var(--pastel-green)' }}
              >
                <Icon icon={item.icon} width={24} style={{ color: 'var(--pastel-green)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
