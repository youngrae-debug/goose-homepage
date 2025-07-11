import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function CalendarSection() {
  const { t } = useTranslation()

  return (
    <section className="relative max-w-8xl mx-auto px-6 py-20 md:px-12 md:py-32 min-h-[100vh] flex items-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-16 md:flex-row">
        <motion.div 
          className="flex justify-center md:w-1/2 md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 transform rotate-3" />
            
            <motion.img
              src="https://placehold.co/380x760/F0F0F0/333333?text=Family+Calendar+App"
              alt="가족 캘린더 화면"
              className="relative rounded-3xl border border-white/50 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center md:w-1/2 md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="mb-8 text-4xl leading-tight font-black bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-5xl drop-shadow-sm">
            {t('calendar.title', { defaultValue: '가족 일정, 놓치지 마세요' })}
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-8 mx-auto md:mx-0 rounded-full" />
          
          <p className="text-xl leading-relaxed font-medium text-gray-800 md:text-2xl">
            {t('calendar.description', {
              defaultValue:
                '모두가 함께 사용하는 가족 캘린더 기능으로 중요한 기념일, 약속, 이벤트를 공유하고 관리하여 가족 모두가 한마음으로 움직일 수 있도록 돕습니다.',
            })}
          </p>
        </motion.div>
      </div>
    </section>
  )
}