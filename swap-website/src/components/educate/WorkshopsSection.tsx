import Image from 'next/image';
import { Icon } from '@iconify/react';

interface Workshop {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  stats: Array<{ icon: string; text: string }>;
}

const workshops: Workshop[] = [
  {
    image: '/images/eccaction.jpg',
    imageAlt: 'ECC Volunteer Center workshop',
    title: 'ECC Volunteer Center Workshop',
    description: 'Conducted comprehensive workshop at ECC Volunteer Center, presenting research findings and engaging participants in discussions about practical solutions for plastic waste reduction.',
    stats: [
      { icon: 'mdi:account-group', text: '25+ Participants' },
      { icon: 'mdi:clock-outline', text: '2 Hours' }
    ]
  },
  {
    image: '/images/eccaction2.jpg',
    imageAlt: 'Interactive education session',
    title: 'Interactive Learning Sessions',
    description: 'Hands-on education sessions using visual materials and group activities to help participants understand the lifecycle of plastic and identify reduction opportunities in their daily lives.',
    stats: [
      { icon: 'mdi:lightbulb', text: 'Activity-Based' },
      { icon: 'mdi:thumbs-up', text: 'High Engagement' }
    ]
  },
  {
    image: '/images/Marketvisit.jpg',
    imageAlt: 'Research presentation board',
    title: 'Research Presentations',
    description: 'Sharing our supermarket research findings through visual presentations, showing real examples of plastic packaging and discussing evidence-based solutions with community members.',
    stats: [
      { icon: 'mdi:chart-bar', text: 'Data-Driven' },
      { icon: 'mdi:image-multiple', text: 'Visual Evidence' }
    ]
  }
];

export default function WorkshopsSection() {
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
          Workshop Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] rounded-[var(--radius-round)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="w-full h-[250px]">
                <Image
                  src={workshop.image}
                  alt={workshop.imageAlt}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {workshop.title}
                </h3>

                <p className="text-[var(--gray-700)] mb-4">
                  {workshop.description}
                </p>

                <div className="flex gap-6 mt-6">
                  {workshop.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon icon={stat.icon} width={20} style={{ color: 'var(--pastel-blue)' }} />
                      <span className="font-semibold text-[var(--gray-800)]">
                        {stat.text}
                      </span>
                    </div>
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
