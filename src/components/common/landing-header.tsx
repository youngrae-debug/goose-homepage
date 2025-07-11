// src/components/common/landing-header.tsx
import { LanguageSwitcher } from './language-switcher'
import { motion } from 'framer-motion'

export const LandingHeader: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/20 z-50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <motion.div 
          className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          lifegoose
        </motion.div>
        <div className="space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}