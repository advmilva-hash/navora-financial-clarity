import { Card } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";
import milvaImage from "@/assets/milva-portrait.jpg";
import joseImage from "@/assets/jose-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar a gestão financeira de pequenos negócios em vantagem competitiva sustentável."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em BPO Financeiro, criando clareza onde existe confusão."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Transparência, excelência, confiança e impacto social positivo."
    }
  ];

  const team = [
    {
      name: "Milva Cavalheiro",
      role: "Contadora e Advogada",
      description: "Especialista em finanças empresariais com vasta experiência em controladoria e gestão estratégica.",
      image: milvaImage
    },
    {
      name: "José Francisco Mazzucco",
      role: "Administrador Financeiro",
      description: "CEO/CFO com 25+ anos de experiência e pós-graduação em Controladoria, especialista em crescimento sustentável.",
      image: joseImage
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Návora nasceu para acabar com o achismo financeiro e dar clareza real aos empresários brasileiros.
            Somos especialistas em transformar números complexos em decisões simples e lucrativas.
          </p>
        </div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-lg object-cover shadow-soft"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;