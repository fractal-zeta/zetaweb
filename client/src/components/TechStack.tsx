import { techStackItems } from "@/lib/utils";
import { motion } from "framer-motion";

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="tech-stack" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold text-accent uppercase tracking-wide">Tech Stack</h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">Our Technical Expertise</p>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We leverage the latest technologies to build robust, scalable solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStackItems.map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i className={`fab ${tech.icon} text-5xl text-primary`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
