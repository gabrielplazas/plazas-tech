import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <Image
        src="/logo.png"
        alt="Plazas Tech"
        width={120}
        height={40}
      />
      <a
        href="https://wa.me/5517981629037"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00D4FF] text-[#1E0A5C] font-medium text-sm px-5 py-2.5 hover:opacity-90 transition-opacity"
      >
        Vamos conversar →
      </a>
    </nav>
  )
}