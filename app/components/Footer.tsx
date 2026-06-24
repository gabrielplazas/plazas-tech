import Image from 'next/image'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-400 py-16 px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Plazas Tech Logo"
                width={75}
                height={35}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm font-light max-w-sm leading-relaxed text-gray-400">
              Conectamos sua ideia ao código. Desenvolvemos sites de alto impacto, sistemas web otimizados e aplicativos sob medida com comprometimento real do início ao fim.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#for-who" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Para quem</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Como trabalhamos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Contato</a>
              </li>
            </ul>
          </div>

          {/* Legal / Social placeholder */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Outros</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/termos-de-uso" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Termos de Uso</a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 inline-block">Política de Privacidade</a>
              </li>
              <li>
                <span className="text-xs text-gray-600 block mt-2">{siteConfig.contact.location}</span>
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
