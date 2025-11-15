import { Icon } from '@iconify/react';

interface StatCard {
  icon: string;
  value: string;
  label: string;
  gradient: string;
}

const stats: StatCard[] = [
  {
    icon: 'mdi:store',
    value: '6+',
    label: 'Supermarket Locations Researched',
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)'
  },
  {
    icon: 'mdi:draw-pen',
    value: '100+',
    label: 'Petition Signatures',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)'
  },
  {
    icon: 'mdi:account-group',
    value: '1,000+',
    label: 'People Reached',
    gradient: 'linear-gradient(135deg, var(--mint) 0%, var(--pastel-green) 100%)'
  },
  {
    icon: 'mdi:calendar-check',
    value: '12+',
    label: 'Campaigns Organized',
    gradient: 'linear-gradient(135deg, var(--sky) 0%, var(--pastel-blue) 100%)'
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-[var(--radius-round)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              style={{ background: stat.gradient }}
            >
              <Icon
                icon={stat.icon}
                width={48}
                style={{ color: 'white', margin: '0 auto 1rem' }}
              />

              <div
                className="text-5xl md:text-6xl font-bold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {stat.value}
              </div>

              <div
                className="text-lg font-medium"
                style={{ color: 'var(--gray-800)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
