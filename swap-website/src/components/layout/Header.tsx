'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Leaf, Menu, X, Globe } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/progress', label: 'Progress' },
    { href: '/action', label: 'Action' },
    { href: '/goals', label: 'Goals' },
  ]

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <nav className="container-swap">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-rounded text-3xl font-extrabold text-pastel-green hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-8 h-8" />
            <span>SWAP</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-pastel-green font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-pastel-blue text-gray-900 rounded-soft font-rounded font-semibold hover:opacity-90 transition-opacity"
          >
            <Globe className="w-5 h-5" />
            <span>日本語</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pastel-green transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-pastel-green font-medium transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-2 px-4 py-2 bg-pastel-blue text-gray-900 rounded-soft font-rounded font-semibold">
                  <Globe className="w-5 h-5" />
                  <span>日本語</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
