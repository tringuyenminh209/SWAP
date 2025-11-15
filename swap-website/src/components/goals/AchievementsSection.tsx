import { Icon } from '@iconify/react';

interface Achievement {
  gradient: string;
  icon: string;
  badge: {
    text: string;
    bg: string;
  };
  title: string;
  description: string;
  stats: Array<{ icon: string; text: string }>;
}

const achievements: Achievement[] = [
  {
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)',
    icon: 'mdi:map-marker-multiple',
    badge: {
      text: 'Completed',
      bg: 'var(--pastel-green)'
    },
    title: 'Supermarket Research Initiative',
    description: 'Successfully completed comprehensive research across 6+ major supermarkets in Toyonaka, documenting plastic packaging practices and gathering data for evidence-based advocacy.',
    stats: [
      { icon: 'mdi:store', text: '6+ Locations' },
      { icon: 'mdi:chart-line', text: '100% Data Collected' }
    ]
  },
  {
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)',
    icon: 'mdi:file-document-edit',
    badge: {
      text: 'Milestone Reached',
      bg: 'var(--pastel-blue)'
    },
    title: 'Petition Campaign Success',
    description: 'Gathered 100+ signatures from community members supporting plastic reduction initiatives, demonstrating strong public support for environmental action.',
    stats: [
      { icon: 'mdi:fountain-pen-tip', text: '100+ Signatures' },
      { icon: 'mdi:account-group', text: 'Growing Support' }
    ]
  },
  {
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--pastel-green) 100%)',
    icon: 'mdi:handshake',
    badge: {
      text: 'Active Partnership',
      bg: 'var(--mint)'
    },
    title: 'ECC Volunteer Center Collaboration',
    description: 'Established ongoing partnership with ECC Volunteer Center, conducting workshops and engaging with the community to spread awareness about plastic waste reduction.',
    stats: [
      { icon: 'mdi:presentation', text: '15+ Workshops' },
      { icon: 'mdi:account-multiple', text: 'Strong Partnership' }
    ]
  },
  {
    gradient: 'linear-gradient(135deg, var(--sky) 0%, var(--pastel-blue) 100%)',
    icon: 'mdi:bullhorn',
    badge: {
      text: 'Ongoing',
      bg: 'var(--sky)'
    },
    title: 'Community Outreach Program',
    description: 'Reached over 1,000 people through educational workshops, community events, and awareness campaigns, creating a ripple effect of environmental consciousness.',
    stats: [
      { icon: 'mdi:account-group', text: '1000+ People Reached' },
      { icon: 'mdi:trending-up', text: 'Growing Impact' }
    ]
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Major Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] bg-white"
            >
              {/* Gradient header with icon */}
              <div
                className="relative h-[180px] flex items-center justify-center"
                style={{ background: achievement.gradient }}
              >
                <Icon
                  icon={achievement.icon}
                  width={80}
                  style={{ color: 'white', opacity: 0.9 }}
                />

                {/* Badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full font-semibold text-sm"
                  style={{
                    backgroundColor: achievement.badge.bg,
                    color: 'var(--gray-900)'
                  }}
                >
                  {achievement.badge.text}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {achievement.title}
                </h3>

                <p className="text-[var(--gray-700)] mb-6">
                  {achievement.description}
                </p>

                <div className="flex gap-6">
                  {achievement.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon
                        icon={stat.icon}
                        width={20}
                        style={{ color: 'var(--pastel-blue)' }}
                      />
                      <span className="font-semibold text-[var(--gray-800)]">
                        {stat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
