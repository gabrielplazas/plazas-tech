'use client'

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function CtaFinal() {
  const messageOptions = [
    {
      title: 'Solicitar Orçamento',
      text: 'Olá, gostaria de solicitar um orçamento para o desenvolvimento de um projeto com a Plazas Tech!',
      emoji: '💼',
      description: 'Ideal para quem já tem uma ideia definida e precisa de estimativas de valores e prazos.'
    },
    {
      title: 'Agendar Diagnóstico',
      text: 'Olá, gostaria de agendar um diagnóstico gratuito para entender a viabilidade do meu projeto.',
      emoji: '🗓️',
      description: 'Para alinhar objetivos, esclarecer pontos técnicos e planejar as etapas do seu projeto.'
    },
    {
      title: 'Dúvidas Gerais',
      text: 'Olá, tenho algumas dúvidas sobre os serviços da Plazas Tech e gostaria de conversar.',
      emoji: '💬',
      description: 'Caso queira entender melhor como trabalhamos ou tirar alguma outra dúvida pontual.'
    }
  ]

  const handleSendMessage = (messageText: string) => {
    const encodedText = encodeURIComponent(messageText)
    window.open(`https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodedText}`, '_blank')
  }

  return (
    <section id="contact" className="px-6 md:px-12 py-24 bg-gradient-to-b from-[#1E0A5C] via-[#12053b] to-[#0a0224] text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B21C8]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: content & info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
              Contato
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Vamos começar o seu projeto?
            </h2>
            <p className="text-gray-300 font-light text-base sm:text-lg mb-8 leading-relaxed">
              Fale conosco diretamente pelo WhatsApp. Escolha um dos assuntos ao lado para iniciar a conversa com uma mensagem pronta, ou utilize os nossos canais abaixo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Telefone / WhatsApp</p>
                  <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00D4FF] transition-colors font-medium text-base sm:text-lg">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">E-mail</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#00D4FF] transition-colors font-medium text-base sm:text-lg">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 text-[#00D4FF] group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 transition-all duration-300 shadow-inner">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Localização</p>
                  <p className="text-white font-medium text-base sm:text-lg">{siteConfig.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: WhatsApp Messages Selection */}
          <div className="bg-white/[0.02] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-xl" />
            <h3 className="text-xl font-bold mb-2">Selecione o assunto</h3>
            <p className="text-gray-400 text-sm font-light mb-6">
              Escolha uma das mensagens prontas abaixo para falar diretamente no WhatsApp:
            </p>
            
            <div className="space-y-4">
              {messageOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(option.text)}
                  className="w-full text-left bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#00D4FF]/60 rounded-2xl p-5 transition-all duration-300 flex items-start gap-4 group cursor-pointer shadow-lg hover:shadow-[#00D4FF]/5 hover:-translate-y-0.5"
                >
                  <span className="text-3xl p-2 bg-white/5 rounded-xl group-hover:bg-[#00D4FF]/10 transition-colors">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors flex items-center justify-between">
                      {option.title}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 text-[#00D4FF]" />
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors font-medium"
              >
                Ou envie uma mensagem em branco no WhatsApp →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
