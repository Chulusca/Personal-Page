import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Chulusca", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tomasczernuszka", label: "LinkedIn" },
    { icon: Mail, href: "mailto:czernuszkatomas@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-primary">
              Tomas Czernuszka
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollador full-stack apasionado, creando experiencias digitales excepcionales con tecnologías modernas y prácticas de código limpio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Links
            </h4>
            <nav className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/cv" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                CV
              </a>
              <a href="mailto:czernuszkatomas@email.com" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Tomas Czernuszka. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-4 md:mt-0">
            Hecho <Heart className="w-4 h-4 text-red-500" /> usando React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;