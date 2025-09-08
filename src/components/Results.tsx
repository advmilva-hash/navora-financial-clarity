import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";
import successImage from "@/assets/business-success.jpg";

const Results = () => {
  const stats = [
    {
      icon: Star,
      value: "+90%",
      label: "Satisfação dos Clientes",
      description: "Empresários satisfeitos com nossa gestão"
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "Crescimento Médio",
      description: "Aumento na lucratividade dos clientes"
    },
    {
      icon: Users,
      value: "200+",
      label: "Empresas Atendidas",
      description: "Negócios transformados pela Návora"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de Experiência",
      description: "Expertise comprovada no mercado"
    }
  ];

  const testimonials = [
    {
      text: "Depois da Návora, consegui finalmente entender onde minha empresa ganhava e perdia dinheiro. O fluxo de caixa ficou cristalino e as decisões muito mais seguras.",
      author: "Maria Silva",
      role: "CEO, TechStart Solutions",
      rating: 5
    },
    {
      text: "A Gestão Financeira Terceirizada da Návora me deu tempo para focar no crescimento. Não preciso mais me preocupar com planilhas - tudo fica organizado e sempre atualizado.",
      author: "João Santos",
      role: "Fundador, Green Energy Co.",
      rating: 5
    },
    {
      text: "O Método 4PC transformou nossa precificação. Saímos do vermelho para ter a melhor margem do setor. Resultado: crescimento de 250% em 12 meses.",
      author: "Ana Costa",
      role: "Diretora, Fashion Trend",
      rating: 5
    }
  ];

  return (
    <section id="resultados" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Resultados que Comprovam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mais de 200 empresários já transformaram seus negócios com a Návora. 
            Conheça os resultados reais de quem saiu do achismo e chegou à certeza.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src={successImage}
            alt="Equipe celebrando resultados e conquistas empresariais"
            className="w-full h-96 object-cover rounded-2xl shadow-card"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            O que nossos clientes dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Quer resultados como esses?
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Junte-se aos mais de 200 empresários que já transformaram suas empresas com a Návora.
            </p>
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-smooth shadow-accent transform hover:scale-105">
              Quero esses resultados na minha empresa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;