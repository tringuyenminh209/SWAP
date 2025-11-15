import { Icon } from '@iconify/react';

interface HelpWay {
  icon: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
}

const helpWays: HelpWay[] = [
  {
    icon: 'mdi:shopping-outline',
    title: 'Shop Smart',
    description: 'Choose products with minimal packaging and bring reusable bags'
  },
  {
    icon: 'mdi:lightbulb',
    title: 'Educate Others',
    description: 'Talk to friends and family about plastic waste impacts'
  },
  {
    icon: 'mdi:currency-usd',
    title: 'Support Our Work',
    description: 'Help fund our research and awareness campaigns'
  },
  {
    icon: 'mdi:bullhorn',
    title: 'Advocate',
    description: 'Contact your local supermarkets and request plastic-free options'
  },
  {
    icon: 'mdi:calendar',
    title: 'Join Events',
    description: 'Attend our workshops and community cleanup activities'
  },
  {
    icon: 'mdi:instagram',
    title: 'Follow Us',
    description: 'Stay updated on Instagram @swapplastictogreen',
    href: 'https://www.instagram.com/swapplastictogreen/',
    external: true
  }
];

export default function WaysToHelpSection() {
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
          More Ways to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpWays.map((way, index) => {
            const content = (
              <div className="bg-[var(--sand)] p-6 rounded-[var(--radius-round)] text-center h-full">
                <Icon
                  icon={way.icon}
                  width={48}
                  style={{ color: 'var(--pastel-green)' }}
                  className="mx-auto mb-4"
                />
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {way.title}
                </h4>
                <p className="text-sm text-[var(--gray-700)]">
                  {way.description}
                </p>
              </div>
            );

            if (way.href) {
              return (
                <a
                  key={index}
                  href={way.href}
                  target={way.external ? '_blank' : undefined}
                  rel={way.external ? 'noopener noreferrer' : undefined}
                  className="no-underline text-inherit block transition-transform hover:scale-105"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
