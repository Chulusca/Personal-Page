import { Calendar, MapPin, Phone, Mail, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CV = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Built real-time analytics dashboard using React and Node.js"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY", 
      period: "2020 - 2022",
      description: [
        "Developed customer-facing web applications from scratch",
        "Integrated third-party APIs and payment systems",
        "Optimized database queries improving response time by 40%",
        "Collaborated with design team to implement responsive interfaces"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Stripe API", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Inc",
      location: "Austin, TX",
      period: "2019 - 2020", 
      description: [
        "Created responsive websites for various clients",
        "Implemented modern CSS techniques and animations",
        "Collaborated with UX/UI designers on user experience",
        "Maintained and updated existing client websites"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "SASS", "WordPress"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "California, USA",
      period: "2015 - 2019",
      achievements: ["Magna Cum Laude", "Dean's List 6 semesters", "Computer Science Society President"]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer", 
    "Certified Kubernetes Administrator",
    "MongoDB Certified Developer"
  ];

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
            Detailed professional experience and qualifications
          </p>
          <Button className="bg-gradient-primary hover:shadow-hover">
            Download PDF Version
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8 bg-gradient-card shadow-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Phone className="w-5 h-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">linkedin.com/in/johndoe</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card className="mb-8 bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
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
              Education
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
        <Card className="bg-gradient-card shadow-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading text-xl">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
      <Footer />
    </div>
  );
};

export default CV;