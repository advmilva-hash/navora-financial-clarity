import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Gestão Financeira Terceirizada", href: "#bpo" },
    { name: "Método 4PC", href: "#metodo" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Gestão Financeira Terceirizada",
    "Fluxo de Caixa",
    "Consultoria em Precificação",
    "Relatórios Estratégicos",
    "Conciliação Bancária",
    "Planejamento Financeiro"
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/josegrestaofinanceira",
      label: "@josegrestaofinanceira"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/milvafinancasparaempresas",
      label: "@milvafinancasparaempresas"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Návora</h3>
                  <p className="text-sm text-primary-foreground/80">Inteligência Financeira</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Transformamos a gestão financeira de empresários brasileiros, 
                levando clareza onde existe confusão e certeza onde há achismo.
              </p>
              
              <p className="text-accent font-bold text-lg italic mb-6">
                "Do achismo à certeza."
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5565993334113" 
                  className="flex items-center space-x-3 text-primary-foreground/90 hover:text-accent transition-smooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  <span>(65) 99333.4113</span>
                </a>
                <a 
                  href="mailto:contato@navora.digital.com.br" 
                  className="flex items-center space-x-3 text-primary-foreground/90 hover:text-accent transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@navora.digital.com.br</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6">Navegação</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6">Conecte-se Conosco</h4>
              
              {/* Social Links */}
              <div className="space-y-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Newsletter</h5>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Receba dicas exclusivas de gestão financeira.
                </p>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="px-3 py-2 rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button className="bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-accent/90 transition-smooth">
                    Inscrever
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Návora Inteligência Financeira. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                LGPD
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-xs text-center">
              Desenvolvido com ❤️ para transformar a gestão financeira de empresários brasileiros.
              <br />
              Cuiabá - MT | Atendemos todo o Brasil remotamente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;