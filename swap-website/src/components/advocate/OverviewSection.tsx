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
          Our Advocacy Approach
        </h2>

        <div className="max-w-[900px] mx-auto text-lg leading-relaxed text-[var(--gray-700)]">
          <p className="mb-6">
            We believe in evidence-based advocacy that balances environmental goals with
            business realities. Through direct engagement with supermarkets and businesses,
            we work to identify practical solutions for reducing plastic waste while
            maintaining operational efficiency.
          </p>
          <p className="mb-6">
            Our approach combines research-backed recommendations with an understanding of
            the challenges businesses face. We don't just point out problems – we collaborate
            on implementable solutions that work for both the environment and business operations.
          </p>
          <p>
            From manager interviews to corporate-level discussions, we advocate for policies
            and practices that make sustainable packaging the easy choice, not the difficult one.
          </p>
        </div>
      </div>
    </section>
  );
}
