import { TrendingUp, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: Award,
      number: "250+",
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on project reviews"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "In software development"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy-600 to-navy-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
