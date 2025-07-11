// src/components/home/SecurityGrowthSection.tsx
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Fingerprint, RotateCw, Lightbulb } from 'lucide-react'

export function SecurityGrowthSection() {
  const { t } = useTranslation()

  const icons = [Fingerprint, RotateCw, Lightbulb]
  const colors = ['purple', 'green', 'yellow']

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
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 px-6 py-20 md:px-12 md:py-32 min-h-[100vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
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
          <h2
            className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl"
            dangerouslySetInnerHTML={{
              __html: t('security.title', {
                defaultValue:
                  '🛡️ 보안은 기본,<br class="block md:hidden"> 우리는 계속 발전합니다',
              }),
            }}
          />
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
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
            const color = colors[index]
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-8 text-center border border-white/20 transition-all duration-500 hover:bg-white/15 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${
                        color === 'purple' ? 'from-purple-500 to-purple-600' :
                        color === 'green' ? 'from-green-500 to-green-600' :
                        'from-yellow-500 to-yellow-600'
                      } text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                      {t(`security.items.${index + 1}.title`)}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {t(`security.items.${index + 1}.description`)}
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