
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <img src="/logo.png" alt="ZeeIT Solutions Logo" className="h-24 mb-6" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-800">
            <span className="text-blue-600">ZeeIT</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-slate-600 font-light">
            Empowering Businesses with Scalable Software Solutions
          </p>
          <p className="text-lg md:text-xl mb-10 text-slate-500 max-w-2xl mx-auto">
            We transform your ideas into powerful, scalable software solutions that drive business growth and innovation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
        <svg className="w-full h-12 text-white" viewBox="0 0 1440 48" fill="currentColor">
          <path d="M0,48 L60,40 L120,44 L180,36 L240,42 L300,38 L360,44 L420,40 L480,36 L540,42 L600,38 L660,44 L720,40 L780,36 L840,42 L900,38 L960,44 L1020,40 L1080,36 L1140,42 L1200,38 L1260,44 L1320,40 L1380,36 L1440,42 L1440,48 L0,48 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
