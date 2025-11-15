import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function HeroSection() {
  return (
    <section className="relative text-center py-16 md:py-24 min-h-[500px] flex items-center">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(255, 253, 208, 0.95) 0%, rgba(193, 240, 193, 0.95) 100%), url('/images/homeimg.webp') center/cover no-repeat`,
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <Icon
          icon="mdi:earth"
          width={80}
          style={{ color: 'var(--pastel-green)' }}
          className="mx-auto mb-4"
        />

        <h1
          className="text-[2.5rem] md:text-[4.5rem] font-extrabold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          SWAP
        </h1>

        <p
          className="text-[1.5rem] md:text-[2rem] font-semibold mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-700)'
          }}
        >
          Stop Waste And Plastic
        </p>

        <p className="text-base md:text-[1.25rem] max-w-[600px] mx-auto mb-8 text-[var(--gray-700)]">
          SWAP plastic for a better future! Join us in reducing plastic waste in Japanese supermarkets. 🌍
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/action"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: 'var(--pastel-green)',
              color: 'var(--gray-900)',
              fontFamily: "'Nunito', 'Quicksand', sans-serif"
            }}
          >
            <Icon icon="mdi:hand-heart" width={20} className="mr-2" />
            Join Our Movement
          </Link>

          <Link
            href="/action#petition"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: 'var(--pastel-blue)',
              color: 'var(--white)',
              fontFamily: "'Nunito', 'Quicksand', sans-serif"
            }}
          >
            <Icon icon="mdi:draw-pen" width={20} className="mr-2" />
            Sign Petition
          </Link>
        </div>
      </div>
    </section>
  );
}
