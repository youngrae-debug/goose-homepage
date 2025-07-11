// src/components/CtaSection.tsx
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const CtaSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative bg-white text-gray-900 py-20 md:py-32 px-6 md:px-12 text-center min-h-[100vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/25 to-orange-400/25 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
            {t('cta.title', { defaultValue: '가족과 시간을 보낼 준비가 되셨나요?' })}
          </h2>
          
          <motion.button 
            className="group relative overflow-hidden px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-black text-xl rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              {t('cta.cta', { defaultValue: '앱스토어가기' })}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}