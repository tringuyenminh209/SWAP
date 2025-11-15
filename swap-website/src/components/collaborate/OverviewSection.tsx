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
          Partnership Philosophy
        </h2>

        <div className="max-w-[900px] mx-auto text-lg leading-relaxed text-[var(--gray-700)]">
          <p className="mb-6">
            We believe that lasting environmental change requires collaboration across
            sectors and communities. By partnering with local organizations, schools, and
            businesses, we amplify our impact and create sustainable solutions that work
            for everyone.
          </p>
          <p className="mb-6">
            Our partnerships are built on mutual respect, shared goals, and practical
            outcomes. We bring research, energy, and fresh perspectives. Our partners
            provide resources, expertise, and connections to broader communities.
          </p>
          <p>
            Together, we create programs that are more effective, more sustainable, and
            more impactful than any organization could achieve alone.
          </p>
        </div>
      </div>
    </section>
  );
}
