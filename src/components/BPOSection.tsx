import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, BarChart3, TrendingUp, FileText } from "lucide-react";
import bpoImage from "@/assets/bpo-financial-work.jpg";

const BPOSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Contas a Pagar",
      description: "Gestão completa do fluxo de pagamentos com controle total de prazos e fornecedores."
    },
    {
      icon: BarChart3,
      title: "Conciliação Bancária",
      description: "Reconciliação automática e precisa entre movimentações bancárias e registros contábeis."
    },
    {
      icon: TrendingUp,
      title: "Fluxo de Caixa",
      description: "Projeções financeiras estratégicas para garantir liquidez e crescimento sustentável."
    },
    {
      icon: FileText,
      title: "Relatórios Estratégicos",
      description: "Dashboards e análises financeiras que transformam dados em insights acionáveis."
    }
  ];

  return (
    <section id="bpo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={bpoImage}
              alt="Organização de documentos financeiros e dashboards"
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              O que é BPO Financeiro
            </h2>
            
            <div className="bg-gradient-accent p-6 rounded-xl shadow-accent mb-8">
              <p className="text-lg font-semibold text-accent-foreground leading-relaxed">
                <strong>BPO Financeiro</strong> é a terceirização da gestão financeira, garantindo clareza, 
                organização e tempo para o empresário focar no crescimento do seu negócio.
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com nossa solução, você não precisa mais se preocupar com planilhas desatualizadas, 
              contas em atraso ou decisões baseadas em "achismos". Cuidamos de toda a operação 
              financeira enquanto você se dedica ao que realmente importa: fazer sua empresa crescer.
            </p>

            <Button variant="cta" size="lg" className="mb-8">
              Quero terceirizar minha gestão financeira
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Nossos Serviços de BPO
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-accent transition-smooth">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BPOSection;