import { Icon } from '@iconify/react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Who can join SWAP?',
    answer: 'SWAP welcomes anyone passionate about reducing plastic waste! While we started as a high school student initiative, we now have volunteers from all backgrounds including university students, young professionals, and community members. No prior experience in environmental activism is required.'
  },
  {
    question: 'How much time commitment is required?',
    answer: 'We offer flexible volunteer opportunities! Most volunteers commit 4-8 hours per month, but you can participate as much or as little as your schedule allows. We have one-time events, ongoing projects, and leadership roles available.'
  },
  {
    question: 'Do I need to speak Japanese?',
    answer: 'Not necessarily! While some of our work involves engaging with Japanese-speaking supermarket managers and community members, we have many roles that don\'t require Japanese fluency. We have a bilingual team and can match you with tasks that fit your language abilities.'
  },
  {
    question: 'What kind of activities does SWAP do?',
    answer: 'SWAP\'s work includes: supermarket packaging research and data collection, community workshops and educational events, advocacy meetings with businesses and government, social media campaigns, petition drives, and collaboration with partner organizations. There\'s something for everyone!'
  },
  {
    question: 'How can businesses partner with SWAP?',
    answer: 'We welcome partnerships with businesses committed to sustainability! Supermarkets can work with us on packaging audits and pilot programs. Other businesses can sponsor events, provide resources, or collaborate on community initiatives. Contact us at swapplastictogreen@gmail.com to discuss partnership opportunities.'
  },
  {
    question: 'Has SWAP achieved any concrete results?',
    answer: 'Yes! We\'ve documented packaging practices at 6+ supermarket locations, reached over 8,000 people through events and campaigns, established official partnerships with Toyonaka City Hall and ECC, and contributed research to municipal sustainability planning. Some supermarkets we\'ve engaged with have started pilot programs for plastic reduction.'
  },
  {
    question: 'How can I support SWAP if I can\'t volunteer?',
    answer: 'There are many ways to support our mission! Sign our petition, follow us on Instagram (@swapplastictogreen), share our posts to spread awareness, choose products with minimal packaging when shopping, bring reusable bags and containers, and talk to your friends and family about plastic waste. Every action counts!'
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          Everything you need to know about SWAP
        </p>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--sand)] p-6 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <Icon
                  icon="mdi:help-circle"
                  width={24}
                  style={{ color: 'var(--pastel-green)' }}
                  className="flex-shrink-0 mt-1"
                />
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {faq.question}
                </h3>
              </div>
              <p className="text-[var(--gray-700)] leading-relaxed pl-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
