
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Settings } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 w-full z-20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-end">
            <Button 
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hover:text-cyan-400 transition-all duration-300"
            >
              <a 
                href="https://auth.zeeit.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Admin Services
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
