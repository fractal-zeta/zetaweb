import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { partnerLogos } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 z-0"></div>
      
      {/* Background decoration elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Building Scalable Software for the Future
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              We craft custom software solutions that help businesses transform, scale, and thrive in an ever-changing digital landscape.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-secondary text-white px-6 py-6 shadow-md"
                size="lg"
              >
                Get a Quote
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="border border-primary text-primary hover:bg-light px-6 py-6 shadow-md"
                size="lg"
              >
                See Our Work
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Abstract technology visualization" 
                className="rounded-lg shadow-xl object-cover w-full h-full" 
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-lg shadow-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="font-bold text-2xl">15+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <i className={`fab ${partner.icon} text-3xl ${partner.color}`} aria-hidden="true"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
