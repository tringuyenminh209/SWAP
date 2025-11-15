import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Initiative {
  image: string;
  imageAlt: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  detailsTitle: string;
  details: string[];
  linkHref: string;
}

const initiatives: Initiative[] = [
  {
    image: '/images/action.jpg',
    imageAlt: 'SWAP team members at Toyonaka City Hall Environmental Office',
    icon: 'mdi:office-building',
    iconBg: 'var(--pastel-green)',
    title: 'Toyonaka City Hall Partnership',
    description: "We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.",
    detailsTitle: "What We're Doing:",
    details: [
      'Organizing community workshops on plastic waste reduction',
      'Collaborating on city-wide sustainability initiatives',
      'Providing data and research to inform environmental policies',
      'Engaging with local residents through city-sponsored events'
    ],
    linkHref: '/toyonaka-partnership'
  },
  {
    image: '/images/eccaction2.jpg',
    imageAlt: 'SWAP team leading interactive workshop at ECC Volunteer Center',
    icon: 'mdi:account-group',
    iconBg: 'var(--pastel-blue)',
    title: 'ECC Volunteer Center',
    description: 'Through our partnership with the ECC Volunteer Center, we connect with students and community members who want to make a difference. This collaboration expands our reach and brings fresh perspectives to our movement.',
    detailsTitle: 'How to Get Involved:',
    details: [
      'Join our volunteer program through ECC',
      'Participate in monthly cleanup and awareness events',
      'Help with research and data collection at supermarkets',
      'Assist with social media and communication efforts'
    ],
    linkHref: '/ecc-volunteer'
  },
  {
    image: '/images/1.jpg',
    imageAlt: 'Petition campaign at supermarket plastic bags section',
    icon: 'mdi:store',
    iconBg: 'var(--mint)',
    title: 'Supermarket Engagement',
    description: 'We work directly with supermarkets to encourage the adoption of sustainable packaging alternatives. Our research-based approach helps businesses understand the environmental and economic benefits of reducing plastic waste.',
    detailsTitle: 'Our Approach:',
    details: [
      'Conducting comprehensive packaging audits at 6+ locations',
      'Presenting alternative packaging solutions to management',
      'Highlighting successful case studies from other regions',
      'Building relationships with store managers and corporate offices'
    ],
    linkHref: '/supermarket-engagement'
  }
];

export default function InitiativesSection() {
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
          Our Key Initiatives
        </h2>

        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-8"
          >
            {/* Image */}
            <div className="w-full h-[400px] md:h-[400px] rounded-[var(--radius-round)] overflow-hidden mb-6">
              <Image
                src={initiative.image}
                alt={initiative.imageAlt}
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <div
                className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-[var(--radius-round)]"
                style={{ backgroundColor: initiative.iconBg }}
              >
                <Icon icon={initiative.icon} width={40} style={{ color: 'var(--white)' }} />
              </div>

              <div className="flex-1">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {initiative.title}
                </h3>
                <p className="text-lg text-[var(--gray-700)] leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="border-t-2 pt-6" style={{ borderColor: 'var(--cream)' }}>
              <h4
                className="text-xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {initiative.detailsTitle}
              </h4>
              <ul className="list-none pl-0 mb-6">
                {initiative.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="py-3 pl-8 relative text-[var(--gray-700)]"
                  >
                    <span
                      className="absolute left-0 top-5 w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--pastel-green)' }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>

              <Link
                href={initiative.linkHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-white text-[var(--gray-900)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
              >
                <Icon icon="mdi:book-open-outline" width={20} />
                Read Full Story
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
