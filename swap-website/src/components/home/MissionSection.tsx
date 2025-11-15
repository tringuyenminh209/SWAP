export default function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-[2rem] md:text-[3rem] font-bold text-center mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Mission
        </h2>

        <div className="max-w-[800px] mx-auto text-[1.125rem] leading-[1.8] text-[var(--gray-700)]">
          <p>
            SWAP (Stop Waste And Plastic) is a student-led initiative dedicated to reducing plastic waste in Japanese supermarkets.
            We believe that sustainable change starts at the local level, and through advocacy, education, and collaboration,
            we can create a future where unnecessary plastic packaging is replaced with eco-friendly alternatives.
          </p>
          <p className="mt-6">
            Our mission is to work directly with supermarkets, educate our communities about the environmental impact of plastic waste,
            and build partnerships that lead to practical, sustainable solutions. Together, we can make a difference—one grocery trip at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
