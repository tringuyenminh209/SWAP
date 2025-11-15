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
          Our Educational Mission
        </h2>

        <div className="max-w-[900px] mx-auto text-lg leading-relaxed text-[var(--gray-700)]">
          <p className="mb-6">
            Education is at the heart of lasting change. We believe that when people understand
            the true impact of plastic waste on our environment, communities, and future,
            they become powerful advocates for change.
          </p>
          <p className="mb-6">
            Through engaging workshops, interactive campaigns, and accessible educational
            materials, we make environmental science approachable and actionable. We don't
            just share facts – we inspire action through stories, data, and practical solutions.
          </p>
          <p>
            Our education programs reach students, families, and community members across
            Toyonaka, creating a ripple effect of environmental awareness and sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
}
