import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: ["React", "React Native", "Next.js", "Expo", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "RESTful APIs", "ASP.NET", "MVC", "C#"],
    },
    {
      title: "Lenguajes de Programación",
      skills: ["JavaScript", "Python", "C#", "C++", "TypeScript"],
    },
    {
      title: "Herramientas & Plataformas",
      skills: [".NET Framework", "Expo Go", "Git", "VS Code", "Visual Studio", "npm"],
    },
    {
    title: "Cloud & Servicios",
    skills: ["Firebase", "Google Cloud Platform", "Ngrok", "Vercel"],
    },
    {
    title: "Bases de Datos",
    skills: ["SQL Server", "PostgreSQL", "Supabase"],
  },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Tecnologias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y frameworks que he aprendido y practicado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;