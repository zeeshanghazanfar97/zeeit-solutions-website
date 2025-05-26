
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <svg viewBox="0 0 365.386 365.386" xml:space="preserve" className="absolute w-40 h-40 text-white top-4 left-4 z-10">
          <g>
              <path fill="currentColor" d="M301.234,96.464c0,8.896-1.058,17.531-2.919,25.869c-21.407-42.175-65.08-71.142-115.622-71.142
                  c-50.536,0-94.212,28.961-115.622,71.136c-1.859-8.338-2.916-16.973-2.916-25.869c0-29.264,10.625-65.407,28.199-96.458
                  C52.731,46.147,26.863,115.292,26.863,167.669c0,68.494,44.205,126.614,105.633,147.517l50.197,50.2l50.2-50.2
                  c61.423-20.902,105.63-79.022,105.63-147.517c0-52.377-25.856-121.522-65.488-167.657C290.605,31.051,301.234,67.2,301.234,96.464
                  z"/>
          </g>
        </svg>
        <img src="/logo.png" alt="ZeeIT Solutions Logo" className="absolute top-8 left-8 h-32 z-20" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-cyan-400">ZeeIT</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
            Empowering Businesses with Scalable Software Solutions
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            We transform your ideas into powerful, scalable software solutions that drive business growth and innovation.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-navy-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <a href="mailto:hello@zeeit.dev" className="inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 text-gray-50" viewBox="0 0 1440 48" fill="currentColor">
          <path d="M0,48 L60,40 L120,44 L180,36 L240,42 L300,38 L360,44 L420,40 L480,36 L540,42 L600,38 L660,44 L720,40 L780,36 L840,42 L900,38 L960,44 L1020,40 L1080,36 L1140,42 L1200,38 L1260,44 L1320,40 L1380,36 L1440,42 L1440,48 L0,48 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
