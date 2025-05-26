
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <WhyChooseUs />
      <Process />
      <Stats />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
