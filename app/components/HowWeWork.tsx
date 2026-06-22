import { Search, Code, ShieldCheck, Rocket } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "1. Diagnóstico & Alinhamento",
      description: "Analisamos seu modelo de negócio, mapeamos as necessidades reais e elaboramos a especificação técnica ideal para o projeto.",
      borderHover: "hover:border-[#00D4FF]/40",
      bgLight: "bg-[#00D4FF]/5 text-[#00D4FF]",
      iconBgHover: "group-hover:bg-[#00D4FF] group-hover:text-[#1E0A5C]",
      numColorHover: "group-hover:text-[#00D4FF]/25"
    },
    {
      icon: Code,
      number: "02",
      title: "2. Desenvolvimento Ágil",
      description: "Escrevemos código limpo e escalável dividindo o progresso em entregas periódicas (sprints), permitindo que você valide o progresso em tempo real.",
      borderHover: "hover:border-[#6366F1]/40",
      bgLight: "bg-[#6366F1]/5 text-[#6366F1]",
      iconBgHover: "group-hover:bg-[#6366F1] group-hover:text-white",
      numColorHover: "group-hover:text-[#6366F1]/25"
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "3. QA & Testes de Qualidade",
      description: "Realizamos testes de performance, segurança e usabilidade em diferentes dispositivos antes de qualquer deploy em produção.",
      borderHover: "hover:border-[#8B5CF6]/40",
      bgLight: "bg-[#8B5CF6]/5 text-[#8B5CF6]",
      iconBgHover: "group-hover:bg-[#8B5CF6] group-hover:text-white",
      numColorHover: "group-hover:text-[#8B5CF6]/25"
    },
    {
      icon: Rocket,
      number: "04",
      title: "4. Deploy & Evolução",
      description: "Cuidamos de toda a infraestrutura na nuvem e lojas de apps. Oferecemos suporte contínuo para manter seu sistema atualizado e seguro.",
      borderHover: "hover:border-[#D946EF]/40",
      bgLight: "bg-[#D946EF]/5 text-[#D946EF]",
      iconBgHover: "group-hover:bg-[#D946EF] group-hover:text-white",
      numColorHover: "group-hover:text-[#D946EF]/25"
    }
  ]

  return (
    <section id="how-we-work" className="relative overflow-hidden px-6 md:px-12 py-24 min-h-screen flex flex-col justify-center bg-purple-700/40 text-[#1E0A5C]">
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
          {/* <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            Nosso Processo
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Como Trabalhamos
          </h2>
          <p className="text-white/80 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Garantimos previsibilidade e excelência técnica do primeiro contato ao suporte contínuo.
          </p>
        </div>

        {/* Dashed connector line for desktop layout - Styled with a Chromatic Gradient */}
        <div className="hidden lg:block absolute top-[44%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#00D4FF] via-[#6366F1] via-[#8B5CF6] to-[#D946EF] opacity-40 pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className={`bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 ${step.borderHover} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl transition-all duration-300 shadow-inner ${step.bgLight} ${step.iconBgHover}`}>
                      <IconComponent className="w-6 h-6 transition-colors duration-300" />
                    </div>
                    <span className={`text-4xl font-extrabold text-gray transition-all duration-300 ${step.numColorHover}`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#1E0A5C] group-hover:text-[#1E0A5C]/90">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm sm:text-base leading-relaxed">
                    {step.description}
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
