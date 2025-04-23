import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-accent uppercase tracking-wide">About Us</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">Our story and mission</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="rounded-lg shadow-lg object-cover h-full w-full" 
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Building innovative solutions since 2008
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={itemVariants}
            >
              Fractal was founded with a single mission: to help businesses leverage technology to achieve their full potential. We believe that well-crafted software is a powerful tool for transformation, efficiency, and growth.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-10"
              variants={itemVariants}
            >
              Our team of passionate engineers, designers, and consultants brings deep expertise to every project, working closely with clients to understand their unique challenges and build solutions that drive real business outcomes.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="text-primary text-4xl mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="font-bold mb-1">Innovation</h4>
                <p className="text-sm text-gray-600">Always exploring new ideas and technologies</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="text-primary text-4xl mb-2">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="font-bold mb-1">Collaboration</h4>
                <p className="text-sm text-gray-600">Building true partnerships with our clients</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <div className="text-primary text-4xl mb-2">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="font-bold mb-1">Integrity</h4>
                <p className="text-sm text-gray-600">Delivering on our promises, every time</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
