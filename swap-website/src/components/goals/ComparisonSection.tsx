import { Icon } from '@iconify/react';

interface Comparison {
  icon: string;
  title: string;
  before: {
    value: string;
    label: string;
  };
  after: {
    value: string;
    label: string;
  };
  improvement: string;
}

const comparisons: Comparison[] = [
  {
    icon: 'mdi:account-group',
    title: 'Community Awareness',
    before: {
      value: '~50',
      label: 'People aware of plastic impact'
    },
    after: {
      value: '1,000+',
      label: 'People educated and engaged'
    },
    improvement: '20x increase in awareness'
  },
  {
    icon: 'mdi:handshake',
    title: 'Organizational Partnerships',
    before: {
      value: '0',
      label: 'Active partnerships'
    },
    after: {
      value: '2+',
      label: 'Strong collaborations established'
    },
    improvement: 'Built sustainable partnerships'
  },
  {
    icon: 'mdi:database',
    title: 'Research Data',
    before: {
      value: 'Limited',
      label: 'Anecdotal information'
    },
    after: {
      value: 'Comprehensive',
      label: 'Data from 6+ supermarkets'
    },
    improvement: 'Evidence-based advocacy'
  },
  {
    icon: 'mdi:trending-up',
    title: 'Campaign Momentum',
    before: {
      value: 'Starting',
      label: 'Initial planning phase'
    },
    after: {
      value: 'Growing',
      label: '100+ signatures and counting'
    },
    improvement: 'Demonstrated public support'
  }
];

export default function ComparisonSection() {
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
          Before & After Impact
        </h2>

        <p className="text-center text-lg text-[var(--gray-700)] mb-12 max-w-[700px] mx-auto">
          See how far we've come since starting our journey to reduce plastic waste in Toyonaka
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon
                  icon={comparison.icon}
                  width={28}
                  style={{ color: 'var(--pastel-blue)' }}
                />
                <h3
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {comparison.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 mb-4">
                {/* Before */}
                <div className="flex-1">
                  <div className="text-sm font-semibold uppercase mb-2 text-[var(--gray-600)]">
                    Before
                  </div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {comparison.before.value}
                  </div>
                  <div className="text-sm text-[var(--gray-700)]">
                    {comparison.before.label}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <Icon
                    icon="mdi:arrow-right"
                    width={32}
                    style={{ color: 'var(--pastel-green)' }}
                  />
                </div>

                {/* After */}
                <div className="flex-1">
                  <div className="text-sm font-semibold uppercase mb-2 text-[var(--gray-600)]">
                    After
                  </div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--pastel-green)'
                    }}
                  >
                    {comparison.after.value}
                  </div>
                  <div className="text-sm text-[var(--gray-700)]">
                    {comparison.after.label}
                  </div>
                </div>
              </div>

              <div
                className="pt-4 border-t flex items-center gap-2"
                style={{ borderColor: 'var(--gray-200)' }}
              >
                <Icon
                  icon="mdi:chart-line-variant"
                  width={20}
                  style={{ color: 'var(--pastel-green)' }}
                />
                <span className="font-semibold text-[var(--gray-800)]">
                  {comparison.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
