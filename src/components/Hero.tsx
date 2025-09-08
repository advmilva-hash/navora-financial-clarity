import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Target } from "lucide-react";
import heroImage from "@/assets/hero-business-meeting.jpg";

const Hero = () => {
  const highlights = [
    { icon: CheckCircle, text: "Preço Certo" },
    { icon: TrendingUp, text: "Previsibilidade" },
    { icon: Target, text: "Certeza" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Empresários analisando gráficos financeiros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Transformamos números em{" "}
            <span className="text-accent">clareza</span>, clareza em{" "}
            <span className="text-accent">lucro</span> e lucro em{" "}
            <span className="text-accent">impacto social</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Com a Návora, você tem gestão financeira profissional, previsibilidade e crescimento sustentável.
          </p>

          <div className="mb-8">
            <Button variant="hero" size="xl" className="mb-6">
              Quero conhecer a Gestão Financeira Terceirizada da Návora
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-primary-foreground">
                <item.icon className="w-6 h-6 text-accent" />
                <span className="font-medium text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Slogan */}
          <div className="mt-12">
            <p className="text-2xl font-bold text-accent italic">
              "Do achismo à certeza."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;