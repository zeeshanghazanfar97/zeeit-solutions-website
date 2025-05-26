import { Target, Eye, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 mb-4">
              About ZeeIT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking software and consulting agency dedicated to empowering businesses through innovative technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy-700 mb-6">
                Driving Digital Innovation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At ZeeIT Solutions, we believe that technology should be a catalyst for growth, not a barrier. Our team of experienced developers and consultants work closely with businesses to understand their unique challenges and deliver solutions that drive real results.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From startups to enterprise organizations, we've helped countless businesses transform their operations, improve efficiency, and achieve their strategic goals through the power of well-crafted software solutions.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-700 mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To empower businesses with scalable, innovative software solutions that drive growth and operational excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-700 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To be the trusted technology partner that businesses rely on for their digital transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
