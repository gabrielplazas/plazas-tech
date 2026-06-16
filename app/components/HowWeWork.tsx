import { Search, Code, ShieldCheck, Rocket } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[#00D4FF]" />,
      number: "01",
      title: "Entendimento & Diagnóstico",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id tristique diam. Vestibulum ac tellus nec eros egestas tempor vitae ac leo."
    },
    {
      icon: <Code className="w-8 h-8 text-[#00D4FF]" />,
      number: "02",
      title: "Desenvolvimento Ágil",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00D4FF]" />,
      number: "03",
      title: "Testes & Qualidade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus dui ut elementum cursus. Cras imperdiet felis in neque imperdiet lacinia."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#00D4FF]" />,
      number: "04",
      title: "Lançamento & Evolução",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. In hac habitasse platea dictumst. Proin hendrerit, leo non imperdiet egestas."
    }
  ]

  return (
    <section id="how-we-work" className="px-8 py-24 min-h-screen flex flex-col justify-center bg-gray-50 text-[#1E0A5C]">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
          Nosso Processo
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Como trabalhamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#00D4FF] hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#1E0A5C]/5 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-extrabold text-gray-100 group-hover:text-[#00D4FF]/20 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1E0A5C]">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
