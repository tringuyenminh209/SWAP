import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <nav className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[var(--gray-700)] no-underline transition-colors hover:text-[var(--pastel-green)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--pastel-blue)] font-semibold">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="text-[var(--gray-700)]">/</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
