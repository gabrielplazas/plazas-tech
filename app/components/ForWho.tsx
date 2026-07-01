import { UserCheck, Eye, Zap } from 'lucide-react'

export default function ForWho() {
  const benefits = [
    {
      icon: UserCheck,
      title: "O Empreendedor",
      description: "Você tem uma ideia genial para um app ou sistema, mas não entende de programação para tirar do papel."
    },
    {
      icon: Zap,
      title: 'A Startup "Faça Você Mesmo"',
      description: "Você usou Inteligência Artificial para gerar o código do seu sistema, mas travou na hora de colocar no ar (deploy) e garantir que ele seja seguro de verdade."
    },
    {
      icon: Eye,
      title: "A Empresa",
      description: "Seu negócio precisa de um site profissional ou um sistema interno para automatizar processos e parar de perder tempo com planilhas."
    },
  ]

  return (
    <section id="for-who" className="relative overflow-hidden px-6 md:px-12 py-24 bg-[#1E0A5C] text-white min-h-screen flex flex-col justify-center">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B21C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center flex flex-col items-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
            Para quem é a Plazas Tech
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Você foca no seu negócio. <br className="hidden sm:inline" />
            <span className="text-[#00D4FF]">Nós focamos no código.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light mt-6 leading-relaxed">
            A Plazas Tech nasceu para ajudar quem precisa de tecnologia, mas não quer complicação. Nós somos o parceiro ideal se você se encaixa em um desses cenários:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00D4FF]/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="p-4 bg-[#00D4FF]/10 text-[#00D4FF] rounded-2xl shadow-inner mb-2">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}