'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Header() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ja'>('en');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'ja' : 'en');
    // TODO: Implement actual language switching logic
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-[1200px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[2rem] font-extrabold no-underline transition-colors hover:opacity-80"
          style={{
            fontFamily: "'Nunito', 'Quicksand', sans-serif",
            color: 'var(--pastel-green)'
          }}
        >
          <Icon icon="mdi:leaf" width={32} />
          <span>SWAP</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 list-none">
          <li>
            <Link
              href="/"
              className="text-[var(--gray-700)] no-underline font-medium transition-colors hover:text-[var(--pastel-green)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[var(--gray-700)] no-underline font-medium transition-colors hover:text-[var(--pastel-green)]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/progress"
              className="text-[var(--gray-700)] no-underline font-medium transition-colors hover:text-[var(--pastel-green)]"
            >
              Progress
            </Link>
          </li>
          <li>
            <Link
              href="/action"
              className="text-[var(--gray-700)] no-underline font-medium transition-colors hover:text-[var(--pastel-green)]"
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              href="/goals"
              className="text-[var(--gray-700)] no-underline font-medium transition-colors hover:text-[var(--pastel-green)]"
            >
              Goals
            </Link>
          </li>
        </ul>

        {/* Language Switch Button */}
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 border-none rounded-[var(--radius-soft)] font-semibold cursor-pointer transition-transform hover:scale-105"
          style={{
            backgroundColor: 'var(--pastel-blue)',
            color: 'var(--gray-900)',
            fontFamily: "'Nunito', 'Quicksand', sans-serif"
          }}
        >
          <Icon
            icon="mdi:translate"
            width={20}
            className="inline align-middle mr-1"
          />
          {currentLang === 'en' ? '日本語' : 'English'}
        </button>
      </nav>
    </header>
  );
}
