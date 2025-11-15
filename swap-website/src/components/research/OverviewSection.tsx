import Image from 'next/image';

export default function OverviewSection() {
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
          Research Overview
        </h2>

        {/* Research image */}
        <div className="max-w-[900px] mx-auto mb-12 rounded-[var(--radius-round)] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/Marketvisit.jpg"
            alt="SWAP research documentation board showing plastic packaging examples from different product categories"
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Overview content */}
        <div className="max-w-[900px] mx-auto text-lg leading-relaxed text-[var(--gray-700)]">
          <p className="mb-6">
            Our research focuses on understanding packaging decisions and plastic waste practices
            in Japanese supermarkets through direct manager interviews and on-site documentation.
            Since January 2025, we've conducted systematic research across multiple supermarket
            locations to gather evidence-based insights.
          </p>
          <p className="mb-6">
            Our methodology combines qualitative manager interviews with photo documentation of
            packaging practices. We speak directly with supermarket managers to understand their
            perspective on plastic usage, recycling systems, customer expectations, and barriers
            to reduction. This approach provides authentic insights into the challenges and
            opportunities for sustainable packaging.
          </p>
          <p>
            All research findings are documented and shared to promote transparency and
            evidence-based advocacy. We focus on identifying practical, implementable solutions
            that balance environmental concerns with business realities.
          </p>
        </div>
      </div>
    </section>
  );
}
