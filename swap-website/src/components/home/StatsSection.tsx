interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '6+', label: 'Supermarket Locations' },
  { value: '100+', label: 'Petition Signatures' },
  { value: '1000+', label: 'People Reached' }
];

export default function StatsSection() {
  return (
    <section className="py-16 text-center" style={{ backgroundColor: 'var(--pastel-green)' }}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-[2rem] md:text-[3rem] font-bold mb-8"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h4
                className="text-[2.5rem] md:text-[3rem] font-extrabold"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {stat.value}
              </h4>
              <p className="text-base md:text-[1.125rem] mt-4 text-[var(--gray-800)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
