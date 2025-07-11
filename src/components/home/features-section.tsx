// src/components/home/FeaturesSection.tsx
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Image, Calendar } from 'lucide-react'

export function FeaturesSection() {
  const { t } = useTranslation()

  const featureItems = t('features.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  const icons = [MessageCircle, Image, Calendar]

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-4xl leading-tight font-black text-gray-900 md:text-5xl lg:text-6xl">
            {t('features.headline')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featureItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.p 
          className="mt-16 text-center text-lg font-medium text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('features.paragraph')}
        </motion.p>
      </div>
    </section>
  )
}