export default function StorySection() {
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
          Our Story
        </h2>
        <div className="max-w-[900px] mx-auto text-lg leading-relaxed text-[var(--gray-700)]">
          <p className="mb-6">
            SWAP (Stop Waste And Plastic) was founded by a group of passionate high school students
            who recognized the urgent need to address plastic waste in Japanese supermarkets.
            What started as a school project quickly evolved into a full-fledged movement to
            create lasting change in our community.
          </p>
          <p className="mb-6">
            We believe that young people have the power to drive environmental change. Through
            research, advocacy, and community engagement, we're working to reduce single-use
            plastics and promote sustainable alternatives in supermarkets across Japan.
          </p>
          <p>
            Our approach combines grassroots activism with evidence-based research. We've visited
            multiple supermarket locations, documented packaging practices, collected data, and
            engaged with both consumers and business owners to understand the challenges and
            opportunities for reducing plastic waste.
          </p>
        </div>
      </div>
    </section>
  );
}
