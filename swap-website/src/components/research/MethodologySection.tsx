import Image from 'next/image';

interface MethodStep {
  number: number;
  title: string;
  description: string;
}

const methodSteps: MethodStep[] = [
  {
    number: 1,
    title: 'Site Visit & Photo Documentation',
    description: 'Initial visits to supermarkets to observe and photograph packaging practices across different product categories. We document both in-store wrapping and distributor packaging methods, categorizing by product type (food trays, pet bottles, milk packs, transparent food trays, steel cans, aluminum cans).'
  },
  {
    number: 2,
    title: 'Manager Interviews',
    description: 'Direct conversations with supermarket managers to understand decision-making processes behind packaging choices. We ask about plastic usage rationale, existing recycling systems, customer expectations, implementation challenges, and corporate policies. This provides insider perspective on barriers and opportunities.'
  },
  {
    number: 3,
    title: 'Recycling Systems Evaluation',
    description: 'Investigating existing recycling methods like reusable packaging return systems and エフピコ方式 (Efpico method). We assess effectiveness, evaluate labor costs, contamination issues, and identify practical improvements that can be implemented without major system overhauls.'
  },
  {
    number: 4,
    title: 'Solution Development',
    description: 'Based on interview insights, we identify practical solutions that balance environmental goals with business realities. Focus on implementable changes like employee training programs (asking before adding extra bags) while building evidence for long-term corporate policy changes.'
  }
];

export default function MethodologySection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--sand)' }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Methodology
        </h2>

        {/* Methodology image */}
        <div className="max-w-[900px] mx-auto mb-12 rounded-[var(--radius-round)] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/Marketvisit2.jpg"
            alt="SWAP team member with supermarket staff during on-site research visit"
            width={900}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Method steps */}
        <div className="max-w-[900px] mx-auto space-y-6">
          {methodSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-[var(--radius-round)]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                {/* Number */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--pastel-green)',
                    color: 'white'
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Nunito', 'Quicksand', sans-serif",
                    color: 'var(--gray-900)'
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--gray-700)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
