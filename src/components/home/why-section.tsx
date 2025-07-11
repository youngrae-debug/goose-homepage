// src/components/home/WhySection.tsx
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Shield, Lock, Heart } from 'lucide-react'

export function WhySection() {
  const { t } = useTranslation()

  const icons = [Shield, Lock, Heart]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative bg-white px-6 py-20 md:px-12 md:py-32 min-h-[100vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-300/25 to-orange-300/25 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-4xl leading-tight font-black bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl drop-shadow-sm">
            {t('why.title', { defaultValue: '왜 lifeGoose인가요?' })}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[0, 1, 2].map((index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50" />
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {t(`why.items.${index}.title`)}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      {t(`why.items.${index}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}