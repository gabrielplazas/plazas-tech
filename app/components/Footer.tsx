import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Plazas Tech Logo"
                width={80}
                height={23}
                className="brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm font-light max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat metus at diam convallis, sit amet scelerisque eros tristique.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#for-who" className="hover:text-white transition-colors">Para quem</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-white transition-colors">Como trabalhamos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Legal / Social placeholder */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Outros</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <span className="text-xs text-gray-600 block mt-2">São José do Rio Preto, SP</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Plazas Tech. Todos os direitos reservados.</p>
          <p className="text-gray-600">
            Desenvolvido com carinho por Plazas Tech.
          </p>
        </div>
      </div>
    </footer>
  )
}
