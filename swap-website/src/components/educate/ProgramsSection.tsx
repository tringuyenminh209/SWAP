import { Icon } from '@iconify/react';

interface Program {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
}

const programs: Program[] = [
  {
    icon: 'mdi:school',
    iconBg: 'var(--pastel-blue)',
    title: 'School Workshops',
    description: 'Interactive presentations at schools teaching students about plastic pollution, recycling systems, and sustainable alternatives.',
    features: [
      'Reached 8+ schools',
      'Engaged 500+ students',
      'Interactive activities',
      'Age-appropriate content'
    ]
  },
  {
    icon: 'mdi:account-multiple',
    iconBg: 'var(--pastel-green)',
    title: 'Community Events',
    description: 'Public awareness campaigns and community gatherings to educate about plastic waste reduction and local environmental initiatives.',
    features: [
      '15+ workshops conducted',
      '1000+ people reached',
      'Partnership with ECC',
      'Bilingual materials'
    ]
  },
  {
    icon: 'mdi:web',
    iconBg: 'var(--mint)',
    title: 'Online Resources',
    description: 'Digital content including research findings, infographics, and practical guides for reducing plastic waste in daily life.',
    features: [
      'Research documentation',
      'Visual infographics',
      'Practical tips',
      'Accessible to all'
    ]
  }
];

export default function ProgramsSection() {
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
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: program.iconBg }}
              >
                <Icon icon={program.icon} width={32} style={{ color: 'var(--white)' }} />
              </div>

              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {program.title}
              </h3>

              <p className="text-[var(--gray-700)] mb-4">
                {program.description}
              </p>

              <ul className="list-none pl-0">
                {program.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="py-2 pl-6 relative text-[var(--gray-700)]"
                  >
                    <span className="absolute left-0 text-[var(--pastel-green)] font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
