import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 text-center" style={{ backgroundColor: 'var(--pastel-blue)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Get Involved
        </h2>

        <p className="text-lg md:text-xl max-w-[600px] mx-auto mb-8 text-[var(--gray-800)]">
          Together, we can make a difference. Join our movement to reduce plastic waste and
          create a sustainable future.
        </p>

        <Link
          href="/action#contact"
          className="inline-block px-8 py-4 rounded-[var(--radius-round)] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          style={{
            backgroundColor: 'var(--pastel-green)',
            color: 'var(--gray-900)',
            fontFamily: "'Nunito', 'Quicksand', sans-serif"
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
