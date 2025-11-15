import { Icon } from '@iconify/react';
import Image from 'next/image';

interface MetaItem {
  icon: string;
  text: string;
}

interface ArticleHeaderProps {
  meta: MetaItem[];
  title: string;
  subtitle: string;
  featuredImage: string;
  featuredImageAlt: string;
  gradient?: string;
}

export default function ArticleHeader({
  meta,
  title,
  subtitle,
  featuredImage,
  featuredImageAlt,
  gradient = 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)'
}: ArticleHeaderProps) {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24" style={{ background: gradient }}>
        <div className="container mx-auto px-6 max-w-[1200px]">
          {/* Meta */}
          <div className="flex gap-6 items-center mb-6 flex-wrap">
            {meta.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[var(--gray-800)] text-[0.9375rem]"
              >
                <Icon icon={item.icon} width={20} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-[3.5rem] font-extrabold mb-4 leading-tight"
            style={{
              fontFamily: "'Nunito', 'Quicksand', sans-serif",
              color: 'var(--gray-900)'
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-[1.375rem] text-[var(--gray-800)] leading-relaxed max-w-[900px]">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Featured Image with overlap effect */}
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="relative -mt-16 z-10">
          <Image
            src={featuredImage}
            alt={featuredImageAlt}
            width={1200}
            height={500}
            className="w-full h-[500px] md:h-[500px] object-cover rounded-[var(--radius-round)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          />
        </div>
      </div>
    </>
  );
}
