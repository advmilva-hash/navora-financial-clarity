import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "(65) 99333.4113",
      description: "Atendimento direto e rápido",
      link: "https://wa.me/5565993334113"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@navora.digital.com.br",
      description: "Resposta em até 24 horas",
      link: "mailto:contato@navora.digital.com.br"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@josegrestaofinanceira",
      description: "Dicas diárias de gestão",
      link: "https://instagram.com/josegrestaofinanceira"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@milvafinancasparaempresas",
      description: "Conteúdo especializado",
      link: "https://instagram.com/milvafinancasparaempresas"
    }
  ];

  const workingHours = [
    { day: "Segunda a Sexta", time: "08:00 - 18:00" },
    { day: "Sábado", time: "08:00 - 12:00" },
    { day: "Domingo", time: "Fechado" }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar a gestão financeira da sua empresa? 
            Fale conosco e agende sua consultoria gratuita de 30 minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Solicite sua Consultoria Gratuita
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="(65) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Faturamento Mensal Aproximado
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth">
                  <option value="">Selecione uma faixa</option>
                  <option value="0-10k">Até R$ 10.000</option>
                  <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                  <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                  <option value="500k+">Acima de R$ 500.000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Principais Desafios Financeiros
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="Conte-nos sobre os principais desafios que sua empresa enfrenta na gestão financeira..."
                ></textarea>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Agendar Consultoria Gratuita
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Campos obrigatórios. Responderemos em até 24 horas.
              </p>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-secondary transition-smooth font-medium"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium text-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-primary">Localização</h4>
              </div>
              <p className="text-muted-foreground">
                Atendemos empresas em todo o Brasil de forma remota, 
                com sede em Cuiabá - MT.
              </p>
            </Card>

            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-hero shadow-card text-center">
              <h4 className="text-xl font-semibold text-primary-foreground mb-4">
                Precisa falar agora?
              </h4>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato direto pelo WhatsApp e tenha uma resposta imediata.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="https://wa.me/5565993334113" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;