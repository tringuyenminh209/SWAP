import { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  icon?: ReactNode
  title: string
  subtitle: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
    icon?: ReactNode
  }
  secondaryCTA?: {
    label: string
    href: string
    icon?: ReactNode
  }
  gradient?: 'green' | 'blue' | 'green-blue'
}

export function Hero({
  icon,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  gradient = 'green',
}: HeroProps) {
  const gradientClasses = {
    green: 'bg-gradient-green',
    blue: 'bg-gradient-blue',
    'green-blue': 'bg-gradient-green-blue',
  }

  return (
    <section className={`${gradientClasses[gradient]} py-16 md:py-24`}>
      <div className="container-swap text-center">
        {icon && (
          <div className="flex justify-center mb-6 animate-fade-in">
            {icon}
          </div>
        )}

        <h1 className="font-rounded text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 animate-fade-in">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-8 animate-fade-in">
          {subtitle}
        </p>

        {description && (
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-fade-in">
            {description}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            {primaryCTA && (
              <Button variant="primary" href={primaryCTA.href}>
                {primaryCTA.icon}
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button variant="secondary" href={secondaryCTA.href}>
                {secondaryCTA.icon}
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
