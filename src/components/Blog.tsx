import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Como Calcular o Preço Certo: Guia Completo de Precificação",
      excerpt: "Descubra a metodologia para definir preços que garantam lucratividade e competitividade no mercado.",
      author: "Milva Cavalheiro",
      date: "15 Mar 2024",
      category: "Precificação",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fluxo de Caixa: A Ferramenta que Todo Empresário Deve Dominar",
      excerpt: "Aprenda a criar e gerenciar um fluxo de caixa eficiente que antecipe problemas e identifique oportunidades.",
      author: "José Francisco Mazzucco",
      date: "10 Mar 2024",
      category: "Fluxo de Caixa",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "5 Sinais de que sua Empresa Precisa de Gestão Financeira Terceirizada",
      excerpt: "Identifique os indicadores que mostram quando é hora de terceirizar a gestão financeira do seu negócio.",
      author: "Equipe Návora",
      date: "05 Mar 2024",
      category: "Gestão Financeira Terceirizada",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Crescimento Sustentável: Expandindo sem Comprometer o Fluxo",
      excerpt: "Estratégias para crescer de forma consistente mantendo a saúde financeira da empresa em primeiro lugar.",
      author: "José Francisco Mazzucco",
      date: "28 Fev 2024",
      category: "Gestão",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["Todos", "Precificação", "Fluxo de Caixa", "Gestão Financeira Terceirizada", "Gestão"];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Blog Návora
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conteúdo exclusivo sobre gestão financeira, precificação, fluxo de caixa e crescimento sustentável. 
            Aprenda com nossos especialistas e transforme seu negócio.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card shadow-card hover:shadow-accent transition-smooth group">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime} de leitura</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-smooth">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-secondary">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-hero text-center shadow-card">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Receba nossos conteúdos exclusivos
          </h3>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed">
            Cadastre-se em nossa newsletter e receba semanalmente dicas, insights e estratégias 
            para transformar a gestão financeira da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Inscrever-se
            </Button>
          </div>
          <p className="text-primary-foreground/70 text-sm mt-4">
            ✓ Conteúdo exclusivo  •  ✓ Sem spam  •  ✓ Cancele quando quiser
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Blog;