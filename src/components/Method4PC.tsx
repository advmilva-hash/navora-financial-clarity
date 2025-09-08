import { Card } from "@/components/ui/card";
import { DollarSign, LineChart, Calendar, CheckCircle } from "lucide-react";

const Method4PC = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "Preço",
      subtitle: "Cálculo com lucro real",
      description: "Definimos sua precificação baseada em custos reais, margem de contribuição e análise de mercado, garantindo lucratividade sustentável.",
      color: "bg-gradient-to-br from-accent to-accent/80"
    },
    {
      icon: LineChart,
      title: "Projeção",
      subtitle: "Planejamento financeiro",
      description: "Criamos projeções detalhadas de receitas, custos e investimentos, alinhando expectativas com a realidade do mercado.",
      color: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      icon: Calendar,
      title: "Previsibilidade",
      subtitle: "Fluxo de caixa claro",
      description: "Desenvolvemos fluxo de caixa preditivo que antecipa necessidades e oportunidades, eliminando surpresas financeiras.",
      color: "bg-gradient-to-br from-secondary to-secondary/80"
    },
    {
      icon: CheckCircle,
      title: "Certeza",
      subtitle: "Decisões baseadas em dados",
      description: "Fornecemos relatórios e dashboards que transformam informações em insights, permitindo decisões estratégicas seguras.",
      color: "bg-gradient-to-br from-accent to-secondary"
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Método Návora 4PC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-accent">Do achismo à certeza:</strong> a jornada financeira 
            que transforma empresários em gestores estratégicos e visionários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden p-8 text-center shadow-card hover:shadow-accent transition-smooth group">
              {/* Background gradient */}
              <div className={`absolute inset-0 ${step.color} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Step number */}
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-secondary font-semibold mb-4">{step.subtitle}</p>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Hover effect border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-hero scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Pronto para sair do achismo?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Implemente o Método 4PC na sua empresa e transforme incertezas em oportunidades de crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-semibold transition-smooth shadow-soft">
                Agendar Consultoria Gratuita
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-smooth">
                Baixar Material do Método
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method4PC;