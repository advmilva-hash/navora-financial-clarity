import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTAFinal = () => {
  const benefits = [
    "Fluxo de caixa sempre atualizado",
    "Relatórios estratégicos mensais",
    "Suporte especializado contínuo",
    "Consultoria em precificação",
    "Planejamento financeiro 12 meses"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Deixe a Návora cuidar das finanças para você focar no crescimento
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Pare de perder tempo com planilhas desatualizadas e decisões baseadas em "achismos". 
            Tenha uma gestão financeira profissional e foque no que você faz de melhor: 
            <span className="font-bold text-accent"> fazer sua empresa crescer</span>.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-primary-foreground">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-left">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="mb-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent transform hover:scale-105 transition-bounce text-xl px-12 py-6"
            >
              Quero contratar o BPO Návora
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Secondary CTA */}
          <p className="text-primary-foreground/80 mb-4">
            Ou fale conosco para uma consultoria gratuita:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              WhatsApp: (65) 99333.4113
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              contato@navora.digital.com.br
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm">
              ✓ Consultoria gratuita de 30 minutos  •  ✓ Sem compromisso  •  ✓ Resposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;