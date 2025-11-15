import { Icon } from '@iconify/react';

interface Volunteer {
  name: string;
  role: string;
  contribution: string;
  stats: Array<{ icon: string; value: string; label: string }>;
  quote: string;
}

const volunteers: Volunteer[] = [
  {
    name: 'Yamamoto Sakura',
    role: 'Research Team Lead',
    contribution: 'Led the supermarket research initiative, coordinating data collection across 6+ locations and analyzing packaging practices.',
    stats: [
      { icon: 'mdi:calendar', value: '6', label: 'Months Active' },
      { icon: 'mdi:chart-bar', value: '100+', label: 'Data Points' }
    ],
    quote: "Being part of SWAP's research has shown me how individual actions can drive systemic change."
  },
  {
    name: 'Kobayashi Ren',
    role: 'Workshop Coordinator',
    contribution: 'Organized and facilitated 10+ educational workshops, developing engaging content for diverse audiences.',
    stats: [
      { icon: 'mdi:presentation', value: '10+', label: 'Workshops' },
      { icon: 'mdi:account-group', value: '500+', label: 'Participants' }
    ],
    quote: "Seeing people's reactions when they understand the impact they can make is incredibly rewarding."
  },
  {
    name: 'Nakamura Aoi',
    role: 'Community Outreach',
    contribution: 'Built relationships with local organizations and schools, expanding SWAP\'s reach in the Toyonaka community.',
    stats: [
      { icon: 'mdi:handshake', value: '8', label: 'Partnerships' },
      { icon: 'mdi:school', value: '5', label: 'Schools' }
    ],
    quote: "Every conversation we have plants a seed for environmental awareness in our community."
  },
  {
    name: 'Sato Haruto',
    role: 'Digital Media Manager',
    contribution: 'Created visual content, infographics, and social media campaigns to amplify SWAP\'s message online.',
    stats: [
      { icon: 'mdi:image-multiple', value: '30+', label: 'Graphics' },
      { icon: 'mdi:share-variant', value: '1K+', label: 'Shares' }
    ],
    quote: "Digital storytelling helps us reach people who couldn't attend our in-person events."
  }
];

export default function VolunteerSpotlightSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--sand)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Volunteer Spotlight
        </h2>

        <p className="text-center text-lg text-[var(--gray-700)] mb-12 max-w-[700px] mx-auto">
          Meet some of the dedicated volunteers making our mission possible
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              {/* Header */}
              <div className="mb-6">
                <h3
                  className="text-2xl font-semibold mb-1"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {volunteer.name}
                </h3>
                <div
                  className="font-semibold mb-3"
                  style={{ color: 'var(--pastel-blue)' }}
                >
                  {volunteer.role}
                </div>
                <p className="text-[var(--gray-700)]">
                  {volunteer.contribution}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {volunteer.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--sand)' }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        icon={stat.icon}
                        width={20}
                        style={{ color: 'var(--pastel-green)' }}
                      />
                      <span
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: "'Nunito', 'Quicksand', sans-serif",
                          color: 'var(--gray-900)'
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--gray-700)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div
                className="pt-6 border-t italic text-[var(--gray-700)]"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                "{volunteer.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
