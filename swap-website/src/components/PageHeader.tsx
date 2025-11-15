import { Icon } from '@iconify/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
  gradient?: string;
}

export default function PageHeader({ title, subtitle, icon, gradient = 'linear-gradient(135deg, var(--mint) 0%, var(--cream) 100%)' }: PageHeaderProps) {
  return (
    <section
      className="text-center py-16 md:py-24 px-6"
      style={{ background: gradient }}
    >
      <div className="container mx-auto max-w-[1200px]">
        <Icon
          icon={icon}
          width={80}
          style={{ color: 'var(--pastel-green)' }}
          className="mx-auto mb-4"
        />
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--gray-900)'
          }}
        >
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-[700px] mx-auto text-[var(--gray-700)]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
