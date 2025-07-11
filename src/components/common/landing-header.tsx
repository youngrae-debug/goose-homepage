// src/components/common/landing-header.tsx
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './language-switcher';

export const LandingHeader: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100/50 z-50 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <motion.div 
          className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          lifegoose
        </motion.div>
        <div className="space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
};