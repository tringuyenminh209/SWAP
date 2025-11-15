import { Icon } from '@iconify/react';

interface Metric {
  icon: string;
  value: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: 'mdi:store',
    value: '6+',
    label: 'Supermarkets Researched',
    description: 'Comprehensive data collection across major retailers'
  },
  {
    icon: 'mdi:fountain-pen-tip',
    value: '100+',
    label: 'Petition Signatures',
    description: 'Community members supporting our cause'
  },
  {
    icon: 'mdi:account-group',
    value: '1,000+',
    label: 'People Reached',
    description: 'Through workshops and awareness campaigns'
  },
  {
    icon: 'mdi:presentation',
    value: '15+',
    label: 'Workshops Conducted',
    description: 'Educational sessions with schools and communities'
  }
];

export default function ImpactMetricsSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--pastel-green)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Impact by the Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--mint)' }}
                >
                  <Icon
                    icon={metric.icon}
                    width={32}
                    style={{ color: 'var(--gray-900)' }}
                  />
                </div>
              </div>

              <div
                className="text-5xl font-bold mb-2"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {metric.value}
              </div>

              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {metric.label}
              </h3>

              <p className="text-[var(--gray-700)]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
