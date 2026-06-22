'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuItems = [
    { href: '#for-who', label: 'Para quem' },
    { href: '#services', label: 'Serviços' },
    { href: '#how-we-work', label: 'Como trabalhamos' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-12 h-20 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-30 transition-all duration-300">
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="Plazas Tech"
            width={75}
            height={35}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-500 hover:text-[#1E0A5C] hover:scale-105 transition-all duration-200 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#1E0A5C] font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Vamos conversar →
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-500 hover:text-[#1E0A5C] rounded-lg md:hidden transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer — full screen, fora do header */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Botão fechar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-[#1E0A5C] transition-colors focus:outline-none"
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-gray-600 hover:text-[#1E0A5C] transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center bg-[#00D4FF] text-[#1E0A5C] font-bold text-base py-4 px-10 rounded-2xl shadow-md"
        >
          Vamos conversar →
        </a>
      </div>
    </>
  )
}