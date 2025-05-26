import { Code, Cloud, Users, Database, Smartphone, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and scale with your growth. From web applications to enterprise systems."
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your IT infrastructure and drive digital transformation. Expert advice on tech stack selection and architecture."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud architecture and migration services to modernize your business operations. AWS, Azure, and Google Cloud expertise."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Database design, optimization, and management services to ensure your data is secure, accessible, and performing at peak efficiency."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices."
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      description: "Streamline your development pipeline with CI/CD implementation, infrastructure automation, and monitoring solutions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions to accelerate your business success and drive innovation across all aspects of your digital infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-navy-700 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
