import { Icon } from '@iconify/react';

interface AdvocacyArea {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const areas: AdvocacyArea[] = [
  {
    icon: 'mdi:store',
    iconBg: 'var(--pastel-green)',
    title: 'Supermarket Partnerships',
    description: 'Direct engagement with supermarket managers and corporate offices to advocate for reduced plastic packaging, reusable alternatives, and transparent recycling systems.'
  },
  {
    icon: 'mdi:scale-balance',
    iconBg: 'var(--pastel-blue)',
    title: 'Policy Advocacy',
    description: 'Working with local government and policymakers to support regulations that reduce single-use plastics while providing businesses with adequate transition periods.'
  },
  {
    icon: 'mdi:account-group',
    iconBg: 'var(--mint)',
    title: 'Consumer Education',
    description: 'Empowering consumers to make informed choices and advocate for change through their purchasing decisions and direct feedback to retailers.'
  },
  {
    icon: 'mdi:file-document-edit',
    iconBg: 'var(--sky)',
    title: 'Industry Best Practices',
    description: 'Researching and promoting successful plastic reduction initiatives from other regions and industries to show what\'s possible and achievable.'
  }
];

export default function AdvocacyAreasSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Key Advocacy Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: area.iconBg }}
              >
                <Icon icon={area.icon} width={32} style={{ color: 'var(--white)' }} />
              </div>

              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {area.title}
              </h3>

              <p className="text-[var(--gray-700)]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
