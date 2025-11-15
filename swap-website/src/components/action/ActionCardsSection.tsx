import Link from 'next/link';
import { Icon } from '@iconify/react';

interface ActionCard {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  gradient: string;
  iconColor: string;
  buttonStyle: 'primary' | 'secondary';
}

const actions: ActionCard[] = [
  {
    icon: 'mdi:draw-pen',
    title: 'Sign Our Petition',
    description: 'Add your voice to our Change.org petition calling for Japanese supermarkets to reduce single-use plastic packaging.',
    buttonText: 'Sign Petition',
    buttonHref: '#petition',
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)',
    iconColor: 'var(--pastel-green)',
    buttonStyle: 'primary'
  },
  {
    icon: 'mdi:share-variant',
    title: 'Spread Awareness',
    description: 'Share our message on social media and help educate others about the plastic waste problem in supermarkets.',
    buttonText: 'Share Now',
    buttonHref: 'https://www.instagram.com/swapplastictogreen/',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)',
    iconColor: 'var(--pastel-blue)',
    buttonStyle: 'secondary'
  },
  {
    icon: 'mdi:email-outline',
    title: 'Contact Us',
    description: 'Get in touch to volunteer, collaborate, or learn more about our initiatives and how you can contribute.',
    buttonText: 'Get In Touch',
    buttonHref: '#contact',
    gradient: 'linear-gradient(135deg, var(--cream) 0%, var(--sand) 100%)',
    iconColor: 'var(--gray-900)',
    buttonStyle: 'secondary'
  }
];

export default function ActionCardsSection() {
  return (
    <section id="petition" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          How You Can Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              style={{ background: action.gradient }}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white rounded-full">
                <Icon icon={action.icon} width={48} style={{ color: action.iconColor }} />
              </div>

              <h3
                className="text-[1.75rem] font-bold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {action.title}
              </h3>

              <p className="text-[var(--gray-800)] mb-6 leading-relaxed flex-1">
                {action.description}
              </p>

              <Link
                href={action.buttonHref}
                target={action.buttonHref.startsWith('http') ? '_blank' : undefined}
                rel={action.buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] ${
                  action.buttonStyle === 'primary'
                    ? 'bg-[var(--gray-900)] text-white'
                    : 'bg-white text-[var(--gray-900)]'
                }`}
                style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
              >
                <Icon icon={action.icon} width={20} />
                {action.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
