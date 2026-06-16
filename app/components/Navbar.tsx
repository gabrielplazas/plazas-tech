import Image from 'next/image'

export default function Navbar() {
  const menuItems = [
    { href: '#for-who', label: 'Para quem' },
    { href: '#services', label: 'Serviços' },
    { href: '#how-we-work', label: 'Como trabalhamos' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="flex items-center justify-between px-8 h-20 border-b sticky top-0 bg-white backdrop-blur-sm z-20">
      <Image
        src="/logo.png"
        alt="Plazas Tech"
        width={70}
        height={20}
      />
      <nav>
        <ul className="flex gap-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="https://wa.me/5517981629037"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00D4FF] text-[#1E0A5C] font-medium text-sm px-5 py-2.5 hover:opacity-90 transition-opacity"
      >
        Vamos conversar →
      </a>
    </header>
  )
}