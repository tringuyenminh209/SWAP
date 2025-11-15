import { Icon } from '@iconify/react';

interface RoadmapQuarter {
  quarter: string;
  period: string;
  goals: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  side: 'left' | 'right';
}

const roadmap: RoadmapQuarter[] = [
  {
    quarter: 'Q2 2025',
    period: 'April - June',
    side: 'left',
    goals: [
      {
        icon: 'mdi:fountain-pen-tip',
        title: 'Reach 500 Petition Signatures',
        description: 'Expand our petition campaign to demonstrate widespread community support for plastic reduction policies.'
      },
      {
        icon: 'mdi:store',
        title: 'Engage 3 Additional Supermarkets',
        description: 'Establish dialogue with more retailers about reducing plastic packaging and offering sustainable alternatives.'
      }
    ]
  },
  {
    quarter: 'Q3 2025',
    period: 'July - September',
    side: 'right',
    goals: [
      {
        icon: 'mdi:school',
        title: 'Launch School Partnership Program',
        description: 'Create formal partnerships with 10 schools to integrate environmental education into their curriculum.'
      },
      {
        icon: 'mdi:newspaper',
        title: 'Publish Research Report',
        description: 'Release comprehensive findings from our supermarket research with actionable recommendations.'
      }
    ]
  },
  {
    quarter: 'Q4 2025',
    period: 'October - December',
    side: 'left',
    goals: [
      {
        icon: 'mdi:city',
        title: 'Present to Toyonaka City Council',
        description: 'Advocate for city-wide plastic reduction policies based on our research and community support.'
      },
      {
        icon: 'mdi:certificate',
        title: 'Launch Plastic-Free Business Certification',
        description: 'Create a recognition program for local businesses committed to reducing plastic waste.'
      }
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          2025 Roadmap
        </h2>

        <p className="text-center text-lg text-[var(--gray-700)] mb-16 max-w-[700px] mx-auto">
          Our strategic plan for expanding impact and driving systemic change
        </p>

        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              backgroundColor: 'var(--pastel-blue)',
              transform: 'translateX(-50%)'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  item.side === 'left'
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div
                    className="bg-[var(--sand)] p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  >
                    {/* Quarter badge */}
                    <div
                      className="inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4"
                      style={{
                        backgroundColor: 'var(--pastel-blue)',
                        color: 'white'
                      }}
                    >
                      {item.quarter}
                    </div>

                    <div className="text-sm text-[var(--gray-600)] mb-4">
                      {item.period}
                    </div>

                    {/* Goals */}
                    <div className="space-y-4">
                      {item.goals.map((goal, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Icon
                              icon={goal.icon}
                              width={24}
                              style={{ color: 'var(--pastel-green)' }}
                            />
                          </div>
                          <div>
                            <h4
                              className="font-semibold mb-1"
                              style={{
                                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                                color: 'var(--gray-900)'
                              }}
                            >
                              {goal.title}
                            </h4>
                            <p className="text-sm text-[var(--gray-700)]">
                              {goal.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: 'var(--pastel-green)',
                    transform: 'translateX(-50%)',
                    border: '3px solid white',
                    boxShadow: '0 0 0 3px var(--pastel-blue)'
                  }}
                />

                {/* Spacer for other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
