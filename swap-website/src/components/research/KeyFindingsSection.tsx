import { Icon } from '@iconify/react';

interface Finding {
  icon: string;
  iconBg: string;
  title: string;
  stat: string;
  description: string;
}

const findings: Finding[] = [
  {
    icon: 'mdi:shield-check',
    iconBg: 'var(--pastel-green)',
    title: 'Plastic Usage Rationale',
    stat: '3 Reasons',
    description: 'Managers cite efficiency, product quality protection, and prevention of tampering as primary reasons for plastic packaging. Wrapping occurs both in-store and by distributors.'
  },
  {
    icon: 'mdi:recycle',
    iconBg: 'var(--pastel-blue)',
    title: 'Recycling Systems',
    stat: '2 Methods',
    description: 'Supermarket 1 uses reusable packaging returned to suppliers. Supermarket 2 employs エフピコ方式 (Efpico method), though effectiveness is limited by labor costs and contamination.'
  },
  {
    icon: 'mdi:account-alert',
    iconBg: 'var(--mint)',
    title: 'Customer Expectations',
    stat: 'Major Barrier',
    description: 'Managers report customers expect clean, attractive products. Sanitation concerns with bring-your-own-container systems and labor costs present implementation challenges.'
  },
  {
    icon: 'mdi:office-building',
    iconBg: 'var(--sky)',
    title: 'Corporate Decisions',
    stat: 'Top-Down',
    description: 'Packaging choices are driven by corporate-level decisions. Extensive changes require extended implementation periods according to interviewed managers.'
  }
];

export default function KeyFindingsSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--sand)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Key Findings from Manager Interviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: finding.iconBg }}
              >
                <Icon
                  icon={finding.icon}
                  width={32}
                  style={{ color: 'white' }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {finding.title}
              </h3>

              {/* Stat */}
              <div
                className="text-4xl font-bold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: finding.iconBg
                }}
              >
                {finding.stat}
              </div>

              {/* Description */}
              <p className="text-[var(--gray-700)] leading-relaxed">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
