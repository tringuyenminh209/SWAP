import { Icon } from '@iconify/react';

interface Opportunity {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const opportunities: Opportunity[] = [
  {
    icon: 'mdi:school',
    iconBg: 'var(--mint)',
    title: 'Schools',
    description: 'Partner with us to bring environmental education to your students through workshops, presentations, and collaborative projects on sustainability.'
  },
  {
    icon: 'mdi:store-outline',
    iconBg: 'var(--pastel-blue)',
    title: 'Businesses',
    description: 'Collaborate on pilot programs for sustainable packaging, employee training, and customer education initiatives to reduce plastic waste.'
  },
  {
    icon: 'mdi:chart-line',
    iconBg: 'var(--pastel-green)',
    title: 'Researchers',
    description: 'Join our research efforts by contributing expertise, data analysis, or collaborative studies on plastic waste reduction strategies.'
  },
  {
    icon: 'mdi:bullhorn',
    iconBg: 'var(--sky)',
    title: 'Organizations',
    description: 'Partner on campaigns, events, and advocacy initiatives that align with our mission of reducing plastic waste in communities.'
  }
];

export default function OpportunitiesSection() {
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
          Ways to Collaborate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: opp.iconBg }}
              >
                <Icon icon={opp.icon} width={32} style={{ color: 'var(--white)' }} />
              </div>

              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {opp.title}
              </h3>

              <p className="text-[var(--gray-700)]">
                {opp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
