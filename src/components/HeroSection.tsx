import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Tomas Czernuszka
            <span className="block bg-gradient-primary bg-clip-text text-white/70">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
           Desarrollador orientado a la creación de soluciones simples, funcionales y bien diseñadas.
            Enfocado en desarrollo web y mobile. 
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Edad", value: "18" },
              { label: "Proyectos Personales", value: "5+" },
              { label: "Tecnologías", value: "12+" },
              { label: "Horas de Aprendizaje", value: "500+" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="font-heading font-bold text-2xl text-primary/100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground/100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;