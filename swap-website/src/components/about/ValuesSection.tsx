import { Icon } from '@iconify/react';

interface Value {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const values: Value[] = [
  {
    icon: 'mdi:sprout',
    title: 'Sustainability',
    description: 'We believe in creating lasting environmental change through practical, scalable solutions that benefit both people and the planet.',
    gradient: 'linear-gradient(135deg, var(--pastel-green), var(--mint))'
  },
  {
    icon: 'mdi:account-group',
    title: 'Youth Leadership',
    description: 'Young people have unique perspectives and the power to drive change. We empower students to lead environmental activism in their communities.',
    gradient: 'linear-gradient(135deg, var(--pastel-blue), var(--sky))'
  },
  {
    icon: 'mdi:flask',
    title: 'Evidence-Based Action',
    description: 'Our advocacy is grounded in rigorous research and data. We believe facts and evidence create the strongest foundation for change.',
    gradient: 'linear-gradient(135deg, var(--mint), var(--pastel-green))'
  },
  {
    icon: 'mdi:handshake',
    title: 'Collaboration',
    description: 'We work together with businesses, government, and communities to find solutions that work for everyone, not against anyone.',
    gradient: 'linear-gradient(135deg, var(--sky), var(--mint))'
  }
];

export default function ValuesSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Core Values
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          The principles that guide everything we do at SWAP
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div
                className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{ background: value.gradient }}
              >
                <Icon icon={value.icon} width={40} style={{ color: 'var(--white)' }} />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {value.title}
              </h3>
              <p className="text-[var(--gray-700)] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
