import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, TrendingUp, Globe } from "lucide-react";

const Purpose = () => {
  const impacts = [
    {
      icon: Users,
      title: "Famílias Fortalecidas",
      description: "Empresas mais lucrativas geram empregos estáveis e melhores condições para as famílias brasileiras."
    },
    {
      icon: TrendingUp,
      title: "Economia Local",
      description: "Negócios bem geridos movimentam a economia, criam oportunidades e fortalecem comunidades."
    },
    {
      icon: Globe,
      title: "Sustentabilidade",
      description: "Gestão financeira inteligente permite crescimento sustentável e responsabilidade social."
    },
    {
      icon: Heart,
      title: "Sonhos Realizados",
      description: "Transformamos sonhos empresariais em realidade através de gestão financeira profissional."
    }
  ];

  return (
    <section id="proposito" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nosso Propósito
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium mb-8">
              Números sustentam sonhos. Nosso propósito é transformar pequenos negócios em 
              <span className="text-primary font-bold"> empresas fortes</span>, 
              <span className="text-secondary font-bold"> lucrativas</span> e capazes de 
              <span className="text-accent font-bold"> impactar famílias e comunidades</span>.
            </p>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card shadow-card hover:shadow-accent transition-smooth group">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <impact.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{impact.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-card shadow-card max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Acreditamos no Poder Transformador da Gestão Financeira
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cada empresa que prospera com nossa ajuda não apenas gera mais lucro, mas cria empregos, 
                fortalece famílias e contribui para uma sociedade mais próspera. Quando um empresário 
                sai do achismo e chega à certeza, toda a comunidade ao seu redor se beneficia.
              </p>
            </div>
            
            <div className="bg-gradient-accent p-6 rounded-xl shadow-accent mb-8">
              <p className="text-lg font-semibold text-accent-foreground">
                "Nossa missão vai além dos números: é sobre transformar vidas através da educação financeira 
                e da gestão profissional."
              </p>
            </div>

            <Button variant="cta" size="xl" className="mx-auto">
              Faça parte desta transformação
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Purpose;