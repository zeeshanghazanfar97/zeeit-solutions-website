import { Lightbulb, FileText, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.",
      step: "01"
    },
    {
      icon: FileText,
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture, ensuring scalability and performance.",
      step: "02"
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Agile development with continuous testing, code reviews, and regular client feedback integration.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "Smooth deployment to production with ongoing maintenance, monitoring, and feature enhancements.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-navy-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch and beyond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-500 text-cyan-400 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
