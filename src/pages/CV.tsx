import { Calendar, MapPin, Phone, Mail, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {useState} from "react";

const CV = () => {
  const experience = [
    {
      title: "Pasante de Desarrollo Low-Code",
      company: "Softtek",
      location: "Buenos aires, Argentina",
      period: "Oct 2024 - Nov 2024",
      description: [
        "Mentoría con expertos en desarrollo low-code",
        "Proyecto de Ecommerce con Power Apps y Microsoft Power Platform",
      ],
      technologies: ["Power Apps", "Microsoft Power Platform", "Low-Code"]
    }
  ];

  const education = [
    {
      degree: "Estudiante de Ingeniería Informática",
      school: "ITBA",
      location: "Buenos Aires, Argentina",
      period: "2025 - Actualidad",
      achievements: ["Python"]
    },
    {
      degree: "Bachiller en Informática con certificación jurisdiccional en diseño y desarrollo de aplicaciones web",
      school: "ORT Argentina",
      location: "Buenos Aires, Argentina",
      period: "2019 - 2024",
      achievements: ["JavaScript", "React", "Node.js", "HTML5", "CSS3", "Python", "C#", "SQL Server", "PostgreSQL", "Google Cloud Platform"]
    },
  ];

  const certifications = [
  {
    name: "HackerRank: SQL Advanced Certificate",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQHl1OHoNMtTqA/profile-treasury-image-shrink_800_800/B4DZgZ4sKyHAAY-/0/1752780951781?e=1753387200&v=beta&t=BvDJ-zEoTRW0MzgOO6k7NesrGfXkbsHDneWMB-65ZPU",
  },
  {
    name: "Educacion IT: Blockchain Ethereum Solidity",
    image: "https://api.educacionit.com/pdf/certificados/tomas-czernuszka-1028491/71835?content_type=jpeg",
  },  
  {
    name: "Google Cloud: Cloud Computing Fundamentals",
    image: "https://cdn.qwiklabs.com/KBM55i60HvsjEpmnNOFSwSbmgeNi1vEjNuFy9vRJBfI%3D",
  },
  {
    name: "Google Cloud: Infrastructure in Google Cloud",
    image: "https://cdn.qwiklabs.com/KBM55i60HvsjEpmnNOFSwSbmgeNi1vEjNuFy9vRJBfI%3D",
  },
];

const reconocimientos = [
  {
    name: "World ORT TAUB Young Entrepreneurship Program 2023",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFhRO2m740WGA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732193914224?e=1753387200&v=beta&t=JeAGoKad5pAdWJllEBBfCM0tboddYmF3B9t53oPYrWk",
  },
  {
    name: "Segundo puesto UMAI UX Challenge",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFsJ0UitMLs9w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719431970376?e=1753387200&v=beta&t=u6nyhtPDU8L5BDedHuHMpPC6TDPzKQDbl3BZJVE4CfQ",
  },
];

const [selectedImage, setSelectedImage] = useState<string | null>(null);
const [imageAlt, setImageAlt] = useState<string | null>(null);

const openModal = (image: string, alt: string) => {
  setSelectedImage(image);
  setImageAlt(alt);
};

const closeModal = () => {
  setSelectedImage(null);
  setImageAlt(null);
};
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Mi experiencia en detalle, educación y habilidades.
          </p>
          <Button className="bg-gradient-primary hover:shadow-hover">
            Descarga la versión PDF
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8 bg-gradient-card shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Phone className="w-5 h-5 text-primary" />
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">czernuszkatomas@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">+54 9 11-6376-7268</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Buenos aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">www.linkedin.com/tomasczernuszka</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="mb-8 bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Briefcase className="w-5 h-5 text-primary" />
              Experiencia Profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                <div className="mb-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {job.title}
                  </h3>
                  <p className="text-primary font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8 bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <GraduationCap className="w-5 h-5 text-primary" />
              Educación
            </CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium">{edu.school}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <Badge key={achievement} variant="outline" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className="space-y-6">
        <Card className="bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Award className="w-5 h-5 text-primary" />
              Certificados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <button
                  key={cert.name}
                  onClick={() => openModal(cert.image, cert.name)}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors w-full text-left"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{cert.name}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reconocimientos */}
        <Card className="bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Award className="w-5 h-5 text-primary" />
              Reconocimientos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reconocimientos.map((rec) => (
                <button
                  key={rec.name}
                  onClick={() => openModal(rec.image, rec.name)}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors w-full text-left"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{rec.name}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-background rounded-lg p-4 w-full max-w-xl relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-red-400 transition"
            >
              ✕
            </button>
            <div className="w-full h-[500px] flex items-center justify-center overflow-hidden rounded-md">
              <img
                src={selectedImage}
                alt={imageAlt ?? "Certificado"}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-sm text-center text-muted-foreground mt-3">
              {imageAlt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV;