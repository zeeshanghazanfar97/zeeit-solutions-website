
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ZeeIT Solutions transformed our business operations with their innovative software solution. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "The cloud migration project was seamless and efficient. Our performance improved significantly, and the cost savings are remarkable.",
      author: "Michael Chen",
      position: "CTO, DataFlow Systems",
      rating: 5
    },
    {
      quote: "Outstanding IT consulting services. They helped us modernize our infrastructure and implement best practices that drive real results.",
      author: "Emily Rodriguez",
      position: "Operations Director, GrowthCorp",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-navy-700">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
