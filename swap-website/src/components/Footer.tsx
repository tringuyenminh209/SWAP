import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] text-white py-12 px-0">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--pastel-green)'
              }}
            >
              SWAP
            </h4>
            <p className="text-[var(--gray-100)]">Stop Waste And Plastic</p>
            <p className="text-[var(--gray-100)] mt-4">
              High school student-led initiative tackling plastic waste in Japanese supermarkets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--pastel-green)'
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/progress"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                Progress
              </Link>
              <Link
                href="/action"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                Take Action
              </Link>
              <Link
                href="/research"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                Research
              </Link>
              <Link
                href="/goals"
                className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
              >
                Goals
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{
                fontFamily: "'Nunito', 'Quicksand', sans-serif",
                color: 'var(--pastel-green)'
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <p className="text-[var(--gray-100)]">
                <Icon icon="mdi:email-outline" width={16} className="inline align-middle mr-1" />
                swapplastictogreen@gmail.com
              </p>
              <p>
                <Icon icon="mdi:instagram" width={16} className="inline align-middle mr-1" />
                <a
                  href="https://www.instagram.com/swapplastictogreen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
                >
                  @swapplastictogreen
                </a>
              </p>
              <p>
                <Icon icon="mdi:draw-pen" width={16} className="inline align-middle mr-1" />
                <Link
                  href="/action#petition"
                  className="text-[var(--gray-100)] no-underline hover:text-[var(--pastel-green)] transition-colors"
                >
                  Sign our petition
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-[var(--gray-700)]">
          <p className="text-[var(--gray-100)]">
            &copy; 2024 SWAP - Stop Waste And Plastic. Made with 💚 by SWAP Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
