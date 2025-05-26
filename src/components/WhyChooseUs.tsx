
import { CheckCircle, Shield, Zap, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects across various industries with 98% client satisfaction rate."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance with industry standards including SOC 2 and ISO 27001."
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Agile methodology ensures fast delivery without compromising quality. MVP in 2-4 weeks."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Senior developers with 5+ years experience in cutting-edge technologies and frameworks."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing processes including automated testing, code reviews, and performance optimization."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 mb-4">
            Why Choose ZeeIT Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that not only work but drive measurable results for your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-700 mb-3 group-hover:text-cyan-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
