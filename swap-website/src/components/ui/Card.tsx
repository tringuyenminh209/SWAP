import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`card ${hover ? 'hover:shadow-medium hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  )
}

interface StatCardProps {
  number: string | number
  label: string
  className?: string
}

export function StatCard({ number, label, className = '' }: StatCardProps) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

interface IconCardProps {
  icon: ReactNode
  title: string
  description: string
  iconBgColor?: string
}

export function IconCard({
  icon,
  title,
  description,
  iconBgColor = 'bg-pastel-green',
}: IconCardProps) {
  return (
    <Card>
      <div className={`icon-circle ${iconBgColor} text-white mb-6`}>
        {icon}
      </div>
      <h3 className="font-rounded text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </Card>
  )
}
