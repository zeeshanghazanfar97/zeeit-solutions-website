import { Mail, ExternalLink, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="ZeeIT Solutions Logo" className="h-8 w-auto" />
              <h3 className="text-2xl font-bold">
                <span className="text-cyan-400">ZeeIT</span> Solutions
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering businesses with scalable software solutions. We transform ideas into powerful technology that drives growth and innovation.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm text-gray-300">
                <div className="font-semibold text-white">ZEEIT TECH SOLUTIONS LTD</div>
                <div>Company No. 16417245</div>
                <div>Registered in England and Wales</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href="mailto:hello@zeeit.dev" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@zeeit.dev
              </a>
              <a 
                href="https://zeeit.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                zeeit.dev
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-white mb-1">Office Address</div>
                  <div>45 Fitzroy Street</div>
                  <div>Fitzrovia, London</div>
                  <div>W1T 6EB</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-white font-medium mb-2">Quick Links</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2019-2025 ZeeIT Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
