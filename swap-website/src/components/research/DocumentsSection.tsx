import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Document {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  linkUrl: string;
  gradient: string;
}

const documents: Document[] = [
  {
    icon: 'mdi:file-document',
    iconColor: 'var(--pastel-blue)',
    title: 'Supermarket Survey Report',
    description: 'Comprehensive analysis of plastic packaging practices across 6+ supermarket locations. Includes data tables, photos, and recommendations.',
    linkUrl: '#',
    gradient: 'linear-gradient(135deg, var(--pastel-blue) 0%, var(--sky) 100%)'
  },
  {
    icon: 'mdi:chart-bar',
    iconColor: 'var(--pastel-green)',
    title: 'Data Analysis & Trends',
    description: 'Statistical analysis of packaging trends, material types, and comparison between different supermarket chains.',
    linkUrl: '#',
    gradient: 'linear-gradient(135deg, var(--pastel-green) 0%, var(--mint) 100%)'
  },
  {
    icon: 'mdi:image-multiple',
    iconColor: 'var(--gray-700)',
    title: 'Photo Documentation',
    description: 'Visual evidence of packaging practices, including examples of excessive wrapping and sustainable alternatives.',
    linkUrl: '#',
    gradient: 'linear-gradient(135deg, var(--cream) 0%, var(--sand) 100%)'
  }
];

export default function DocumentsSection() {
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
          Research Documents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="p-8 rounded-[var(--radius-round)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              style={{ background: doc.gradient }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-[var(--radius-round)] mb-6"
                style={{ backgroundColor: 'white' }}
              >
                <Icon
                  icon={doc.icon}
                  width={32}
                  style={{ color: doc.iconColor }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  color: 'var(--gray-900)'
                }}
              >
                {doc.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--gray-800)] mb-6 leading-relaxed">
                {doc.description}
              </p>

              {/* Link */}
              <Link
                href={doc.linkUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-round)] font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                style={{
                  fontFamily: "'Nunito', 'Quicksand', sans-serif",
                  backgroundColor: 'white',
                  color: 'var(--gray-900)'
                }}
              >
                <Icon icon="mdi:open-in-new" width={20} />
                View on Google Docs
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
