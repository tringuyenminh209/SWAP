interface Stat {
  number: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    number: '75+',
    label: 'Active Volunteers',
    gradient: 'linear-gradient(135deg, var(--pastel-green), var(--mint))'
  },
  {
    number: '6+',
    label: 'Supermarkets Researched',
    gradient: 'linear-gradient(135deg, var(--pastel-blue), var(--sky))'
  },
  {
    number: '8,000+',
    label: 'People Reached',
    gradient: 'linear-gradient(135deg, var(--mint), var(--pastel-green))'
  },
  {
    number: '1,200+',
    label: 'Volunteer Hours',
    gradient: 'linear-gradient(135deg, var(--sky), var(--mint))'
  },
  {
    number: '36+',
    label: 'Community Events',
    gradient: 'linear-gradient(135deg, var(--pastel-green), var(--mint))'
  },
  {
    number: '500+',
    label: 'Products Documented',
    gradient: 'linear-gradient(135deg, var(--mint), var(--sky))'
  }
];

export default function ImpactStatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          Our Impact by Numbers
        </h2>
        <p className="text-lg text-center max-w-[800px] mx-auto mb-12 text-[var(--gray-700)]">
          Measuring the difference we're making together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-[var(--radius-round)] text-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              style={{ background: stat.gradient }}
            >
              <div
                className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
                style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}
              >
                {stat.number}
              </div>
              <div
                className="text-lg font-semibold"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
