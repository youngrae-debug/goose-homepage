// src/components/common/footer.tsx
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-400 py-10 px-6 md:px-12 text-center overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mb-8 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="#" 
            className="relative hover:text-white transition-colors duration-200 font-medium group"
            whileHover={{ y: -2 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="relative hover:text-white transition-colors duration-200 font-medium group"
            whileHover={{ y: -2 }}
          >
            Terms
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="relative hover:text-white transition-colors duration-200 font-medium group"
            whileHover={{ y: -2 }}
          >
            Privacy
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#" 
            className="relative hover:text-white transition-colors duration-200 font-medium group"
            whileHover={{ y: -2 }}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.div>
        <motion.p 
          className="mt-6 text-gray-500 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          © 2025 lifeGoose. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};