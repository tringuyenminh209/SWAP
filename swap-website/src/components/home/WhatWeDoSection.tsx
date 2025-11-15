import Link from 'next/link';
import { Icon } from '@iconify/react';

interface ActionCard {
  icon: string;
  title: string;
  description: string;
  href: string;
  bgColor: string;
}

const actions: ActionCard[] = [
  {
    icon: 'mdi:bullhorn',
    title: 'Advocate',
    description: 'We work with supermarkets and businesses to reduce single-use plastic packaging and promote sustainable alternatives.',
    href: '/advocate',
    bgColor: 'var(--pastel-green)'
  },
  {
    icon: 'mdi:book-open-outline',
    title: 'Educate',
    description: 'Through workshops and campaigns, we raise awareness about the environmental impact of plastic waste in our communities.',
    href: '/educate',
    bgColor: 'var(--pastel-blue)'
  },
  {
    icon: 'mdi:handshake',
    title: 'Collaborate',
    description: 'We partner with local organizations, schools, and businesses to create practical solutions for reducing plastic waste.',
    href: '/collaborate',
    bgColor: 'var(--mint)'
  }
];

export default function WhatWeDoSection() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--sand)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-[2rem] md:text-[3rem] font-bold text-center mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="no-underline text-inherit"
            >
              <div
                className="bg-white p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: action.bgColor }}
                >
                  <Icon icon={action.icon} width={32} style={{ color: 'var(--white)' }} />
                </div>

                <h3
                  className="text-[1.5rem] font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {action.title}
                </h3>

                <p className="text-[var(--gray-700)]">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
