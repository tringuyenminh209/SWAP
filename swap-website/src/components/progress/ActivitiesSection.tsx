import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Activity {
  image: string;
  imageAlt: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const activities: Activity[] = [
  {
    image: '/images/Marketvisit26th2025.jpg',
    imageAlt: 'SWAP team with supermarket manager during interview on February 26, 2025',
    icon: 'mdi:account-voice',
    iconBg: 'var(--pastel-blue)',
    title: 'Manager Interviews',
    description: 'Direct conversations with supermarket managers to understand packaging decisions, recycling systems, and barriers to plastic reduction. Gathering insights on customer expectations, sanitation concerns, and corporate-level policies.',
    linkText: 'View Research Findings',
    linkHref: '/research'
  },
  {
    image: '/images/Marketvisit.jpg',
    imageAlt: 'Research documentation board showing plastic packaging examples from supermarkets',
    icon: 'mdi:recycle',
    iconBg: 'var(--pastel-green)',
    title: 'Recycling Systems Analysis',
    description: 'Documenting existing recycling methods including reusable packaging return systems and エフピコ方式 (Efpico method). Evaluating effectiveness and identifying challenges like labor costs and contamination issues.',
    linkText: 'Learn More',
    linkHref: '/research'
  },
  {
    image: '/images/eccaction.jpg',
    imageAlt: 'SWAP team presenting research findings at ECC Volunteer Center workshop',
    icon: 'mdi:lightbulb-on',
    iconBg: 'var(--mint)',
    title: 'Practical Solutions Development',
    description: 'Developing evidence-based, implementable solutions like employee training programs to ask before adding extra bags. Balancing immediate actions with long-term corporate policy advocacy for sustainable packaging alternatives.',
    linkText: 'Get Involved',
    linkHref: '/action'
  }
];

export default function ActivitiesSection() {
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
          Our Key Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] rounded-[var(--radius-round)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="w-full h-[250px]">
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-20 h-20 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ backgroundColor: activity.iconBg }}
                  >
                    <Icon
                      icon={activity.icon}
                      width={32}
                      style={{ color: 'white' }}
                    />
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-semibold"
                    style={{
                      fontFamily: "'Nunito', 'Quicksand', sans-serif",
                      color: 'var(--gray-900)'
                    }}
                  >
                    {activity.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--gray-700)] mb-6 leading-relaxed">
                  {activity.description}
                </p>

                {/* Link */}
                <Link
                  href={activity.linkHref}
                  className="inline-flex items-center gap-2 font-semibold no-underline transition-all hover:gap-3"
                  style={{ color: 'var(--pastel-green)' }}
                >
                  {activity.linkText}
                  <Icon icon="mdi:arrow-right" width={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
