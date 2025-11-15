import Image from 'next/image';
import { Icon } from '@iconify/react';

interface Partner {
  image: string;
  imageAlt: string;
  logo: string;
  logoBg: string;
  name: string;
  description: string;
  tags: string[];
}

const partners: Partner[] = [
  {
    image: '/images/action.jpg',
    imageAlt: 'Toyonaka City Hall partnership',
    logo: 'mdi:office-building',
    logoBg: 'var(--pastel-green)',
    name: 'Toyonaka City Hall',
    description: 'Official partnership with the environmental department of Toyonaka City Hall. This collaboration provides us with municipal support, resources, and access to city-wide initiatives for plastic waste reduction.',
    tags: ['Government', 'Active']
  },
  {
    image: '/images/eccaction.jpg',
    imageAlt: 'ECC Volunteer Center collaboration',
    logo: 'mdi:account-group',
    logoBg: 'var(--pastel-blue)',
    name: 'ECC Volunteer Center',
    description: 'Collaborative partnership connecting us with student volunteers and community members. ECC provides venue space for workshops and helps us reach broader audiences through their established networks.',
    tags: ['Education', 'Active']
  },
  {
    image: '/images/Marketvisit2.jpg',
    imageAlt: 'Supermarket collaboration',
    logo: 'mdi:store',
    logoBg: 'var(--mint)',
    name: 'Local Supermarkets',
    description: 'Working relationships with 6+ supermarket locations for research collaboration and pilot programs. Managers provide insights into operational challenges and opportunities for plastic reduction.',
    tags: ['Business', 'Research']
  }
];

export default function PartnersSection() {
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
          Our Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-[var(--radius-round)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="w-full h-[300px]">
                <Image
                  src={partner.image}
                  alt={partner.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-6"
                  style={{ backgroundColor: partner.logoBg }}
                >
                  <Icon icon={partner.logo} width={40} style={{ color: 'var(--white)' }} />
                </div>

                <h3
                  className="text-[1.75rem] font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {partner.name}
                </h3>

                <p className="text-[var(--gray-700)] mb-6">
                  {partner.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {partner.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-4 py-2 rounded-[var(--radius-soft)] text-sm font-semibold"
                      style={{
                        backgroundColor: 'var(--pastel-green)',
                        color: 'var(--gray-900)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
