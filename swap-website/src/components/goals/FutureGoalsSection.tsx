import { Icon } from '@iconify/react';

interface FutureGoal {
  icon: string;
  borderColor: string;
  title: string;
  description: string;
  timeline: string;
}

const futureGoals: FutureGoal[] = [
  {
    icon: 'mdi:handshake',
    borderColor: 'var(--pastel-green)',
    title: 'Expand Supermarket Partnerships',
    description: 'Establish formal agreements with 10+ major supermarkets to reduce plastic packaging, offer bulk options, and promote reusable alternatives.',
    timeline: 'By End of 2025'
  },
  {
    icon: 'mdi:school',
    borderColor: 'var(--pastel-blue)',
    title: 'Integrate into School Curriculum',
    description: 'Partner with Toyonaka Board of Education to include plastic waste reduction in environmental science curriculum across all grade levels.',
    timeline: 'Academic Year 2025-2026'
  },
  {
    icon: 'mdi:city',
    borderColor: 'var(--mint)',
    title: 'Advocate for City-Wide Policy',
    description: 'Work with Toyonaka City Council to implement comprehensive plastic reduction policies, including single-use plastic bans in public facilities.',
    timeline: 'By Mid-2026'
  },
  {
    icon: 'mdi:share-variant',
    borderColor: 'var(--sky)',
    title: 'Launch Digital Platform',
    description: 'Create an online resource hub with educational materials, research findings, and tools for individuals and businesses to reduce plastic waste.',
    timeline: 'Q3 2025'
  },
  {
    icon: 'mdi:trophy',
    borderColor: 'var(--pastel-green)',
    title: 'Establish Recognition Program',
    description: 'Create certification and awards for plastic-free businesses, schools, and community groups, celebrating environmental leadership.',
    timeline: 'Q4 2025'
  },
  {
    icon: 'mdi:earth',
    borderColor: 'var(--pastel-blue)',
    title: 'Connect with Global Movement',
    description: 'Build partnerships with international plastic reduction organizations to share best practices and amplify our impact beyond Toyonaka.',
    timeline: 'Ongoing 2025-2026'
  }
];

export default function FutureGoalsSection() {
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
          Future Goals
        </h2>

        <p className="text-center text-lg text-[var(--gray-700)] mb-12 max-w-[700px] mx-auto">
          Building on our achievements, here's where we're headed next
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureGoals.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative overflow-hidden"
            >
              {/* Left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: goal.borderColor }}
              />

              <div className="pl-4">
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full mb-6"
                  style={{ backgroundColor: goal.borderColor }}
                >
                  <Icon
                    icon={goal.icon}
                    width={28}
                    style={{ color: 'white' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {goal.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--gray-700)] mb-4 leading-relaxed">
                  {goal.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center gap-2 mt-auto">
                  <Icon
                    icon="mdi:calendar-clock"
                    width={18}
                    style={{ color: goal.borderColor }}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: goal.borderColor }}
                  >
                    {goal.timeline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
