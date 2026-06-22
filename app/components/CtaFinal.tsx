'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function CtaFinal() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 bg-gradient-to-b from-[#1E0A5C] via-[#12053b] to-[#0a0224] text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B21C8]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left side: Value proposition & Main WhatsApp CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
              Contato
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Vamos começar o seu projeto?
            </h2>
            <p className="text-gray-300 font-light text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Fale conosco diretamente pelo WhatsApp para iniciar o seu atendimento e obter uma estimativa de prazo e valor para o seu projeto de forma rápida e descomplicada.
            </p>

            {/* Primary Action Button (WhatsApp) */}
            <div className="w-full sm:w-auto">
              <a
                href={`https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de conversar sobre um projeto com a Plazas Tech.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#21b858] text-white font-bold px-10 py-5 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-lg w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.436 2.5 1.173 3.473l-.766 2.801 2.868-.752a5.736 5.736 0 0 0 2.493.575h.002c3.182 0 5.767-2.586 5.768-5.766-.001-3.18-2.585-5.767-5.766-5.767zm3.411 8.212c-.149.419-.748.767-1.032.813-.258.043-.594.077-1.803-.423-1.424-.588-2.33-2.038-2.401-2.132-.072-.093-.578-.769-.578-1.464 0-.696.362-1.038.496-1.181.114-.12.258-.168.346-.168.088 0 .176.002.253.006.082.004.193-.031.302.235.114.277.39.95.424 1.02.035.07.057.151.01.246-.047.095-.07.156-.14.238-.07.082-.148.182-.211.246-.07.07-.144.147-.062.289.082.141.367.607.788.981.54.482 1.002.632 1.144.703.141.07.224.059.308-.037.082-.096.362-.423.459-.567.098-.144.196-.12.33-.07.134.05.852.402.999.475.147.073.245.109.281.172.036.063.036.368-.113.787zM12 2C6.477 2 2 6.477 2 12c0 2.01.593 3.88 1.614 5.447L2.09 22.062l4.733-1.24A9.945 9.945 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.834 0-3.541-.532-4.98-1.454l-.356-.226-2.955.775.789-2.883-.247-.393A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                </svg>
                Conversar no WhatsApp
              </a>

              {/* Status / Trust indicator
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Resposta imediata • Online agora</span>
              </div> */}
            </div>
          </div>

          {/* Right side: Secondary Contacts Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle top-right glow in the card */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
                Outros canais de contato
              </h3>

              <div className="space-y-6">
                {/* Phone Link (direct phone call for mobile) */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Ligar direto</p>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-white hover:text-[#00D4FF] transition-colors font-medium text-base">
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email Link */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">E-mail</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#00D4FF] transition-colors font-medium text-base">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Localização</p>
                    <p className="text-white font-medium text-base">{siteConfig.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
