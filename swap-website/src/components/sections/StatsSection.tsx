import { StatCard } from '@/components/ui/Card'

interface Stat {
  number: string | number
  label: string
}

interface StatsSectionProps {
  title?: string
  stats: Stat[]
  background?: 'white' | 'sand'
}

export function StatsSection({ title, stats, background = 'sand' }: StatsSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    sand: 'bg-sand',
  }

  return (
    <section className={`section ${bgClasses[background]}`}>
      <div className="container-swap">
        {title && (
          <h2 className="font-rounded text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
