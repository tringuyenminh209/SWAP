import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 text-center"
      style={{ backgroundColor: 'var(--pastel-blue)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Ready to Make a Difference?
        </h2>

        <p className="text-lg md:text-xl max-w-[700px] mx-auto mb-8 text-[var(--gray-800)]">
          Contact us to learn more about our initiatives, volunteer opportunities,
          or partnership possibilities.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="mailto:swapplastictogreen@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-[var(--gray-900)] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:email-outline" width={20} />
            Email Us
          </Link>

          <Link
            href="https://www.instagram.com/swapplastictogreen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline bg-white text-[var(--gray-900)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
          >
            <Icon icon="mdi:instagram" width={20} />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
