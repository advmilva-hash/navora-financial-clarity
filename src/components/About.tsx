import { Card } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";

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
      description: "Ser referência em Gestão Financeira Terceirizada, criando clareza onde existe confusão."
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
      description: "Eu sou a Milva Cavalheiro – contadora, advogada, mediadora, especialista em finanças para empresas e ex-consultora do SEBRAE. Tenho mais de 25 anos de experiência ajudando empreendedores a enxergarem seus números e tomarem decisões seguras. Venho de uma família de pequenos empresários do Paraná, que trabalharam duro, mas nunca souberam precificar corretamente ou organizar as finanças. Cresci vendo de perto os prejuízos do achismo financeiro: esforço sem retorno, noites sem dormir e sonhos que nunca se realizaram. Transformei essa dor em meu propósito de vida: ensinar empresários a prosperarem com clareza e segurança financeira, para que nenhum negócio precise fechar as portas por falta de gestão.",
      image: "/lovable-uploads/b2dc1879-45ad-4afb-98c9-c0ad311a4c24.png"
    },
    {
      name: "José Francisco Mazzucco",
      role: "Administrador Financeiro",
      description: "Eu sou o José Francisco Mazzucco. Tenho mais de 25 anos de experiência em gestão financeira e controladoria de negócios, sou formado em Administração Financeira, com pós-graduação em Controladoria e atuei como CEO e CFO de grandes empresas. Minha história começa no Rio Grande do Sul, onde meus pais tinham uma pequena empresa. Trabalhavam duro, mas sem gestão de caixa, sem clareza financeira. Quando vieram as crises, a falta de visão sobre os números levou o negócio à falência. Esse episódio marcou minha vida. Eu prometi a mim mesmo que buscaria o conhecimento que faltou para os meus pais e que ajudaria outros empreendedores a não passarem pela mesma dor. Hoje, depois de décadas liderando finanças em grandes corporações, meu propósito é democratizar essa clareza: levar aos pequenos e médios empresários as mesmas ferramentas de gestão financeira que sustentam os grandes negócios. Porque eu sei, na pele, o que acontece quando o empresário não enxerga o caixa… e sei também o poder transformador que surge quando ele conquista clareza, previsibilidade e segurança financeira.",
      image: "/lovable-uploads/06b295ef-d321-4852-8ca3-a128f526815c.png"
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