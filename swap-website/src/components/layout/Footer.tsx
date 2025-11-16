import Link from 'next/link'
import { Leaf, Mail, Instagram, PenTool } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/progress', label: 'Progress' },
      { href: '/action', label: 'Take Action' },
      { href: '/goals', label: 'Goals' },
    ],
    contact: [
      {
        icon: <Mail className="w-4 h-4" />,
        label: 'swapplastictogreen@gmail.com',
        href: 'mailto:swapplastictogreen@gmail.com',
      },
      {
        icon: <Instagram className="w-4 h-4" />,
        label: '@swapplastictogreen',
        href: 'https://www.instagram.com/swapplastictogreen/',
        external: true,
      },
      {
        icon: <PenTool className="w-4 h-4" />,
        label: 'Sign our petition',
        href: '#',
      },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-swap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-pastel-green" />
              <h4 className="font-rounded text-xl font-bold text-pastel-green">SWAP</h4>
            </div>
            <p className="text-sm text-gray-100 mb-4">
              Stop Waste And Plastic
            </p>
            <p className="text-sm text-gray-100">
              High school student-led initiative tackling plastic waste in Japanese supermarkets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rounded text-xl font-bold text-pastel-green mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-pastel-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rounded text-xl font-bold text-pastel-green mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-100 hover:text-pastel-green transition-colors text-sm"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6 text-center">
          <p className="text-gray-100 text-sm">
            &copy; {currentYear} SWAP - Stop Waste And Plastic. Made with 💚 by SWAP Team.
          </p>
        </div>
      </div>
    </footer>
  )
}
