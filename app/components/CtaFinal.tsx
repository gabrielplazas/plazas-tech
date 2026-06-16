'use client'

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

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
    window.open(`https://wa.me/5517981629037?text=${encodedText}`, '_blank')
  }

  return (
    <section id="contact" className="px-8 py-24 bg-[#1E0A5C] text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B21C8]/10 rounded-full blur-3xl pointer-events-none" />

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
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#00D4FF]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5517981629037" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00D4FF] transition-colors font-medium">
                    +55 (17) 98162-9037
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#00D4FF]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">E-mail</p>
                  <a href="mailto:contato@plazas.tech" className="text-white hover:text-[#00D4FF] transition-colors font-medium">
                    contato@plazas.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#00D4FF]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Localização</p>
                  <p className="text-white font-medium">São José do Rio Preto - SP, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: WhatsApp Messages Selection */}
          <div className="bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Selecione o assunto</h3>
            <p className="text-gray-400 text-sm font-light mb-6">
              Escolha uma das mensagens prontas abaixo para falar diretamente no WhatsApp:
            </p>
            
            <div className="space-y-4">
              {messageOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(option.text)}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D4FF] rounded-2xl p-5 transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                >
                  <span className="text-3xl p-2 bg-white/5 rounded-xl group-hover:bg-[#00D4FF]/10 transition-colors">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors flex items-center justify-between">
                      {option.title}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 text-[#00D4FF]" />
                    </h4>
                    <p className="text-gray-400 text-xs font-light mt-1 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <a
                href="https://wa.me/5517981629037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#00D4FF] hover:underline"
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
