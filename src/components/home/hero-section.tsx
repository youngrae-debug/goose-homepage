// src/components/home/HeroSection.tsx
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function HeroSection() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      return
    }
    alert('시작 준비 완료! 🚀')
  }

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-16 md:flex-row md:px-12 md:py-24">
        <motion.div 
          className="mb-12 text-center md:mb-0 md:w-1/2 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="mb-6 text-5xl leading-tight font-black tracking-tight bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-6xl lg:text-7xl drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="mb-10 text-xl leading-relaxed font-medium text-gray-700 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('hero.emailPlaceholder')}
                className={`w-full sm:w-80 rounded-3xl border-0 bg-white shadow-xl px-6 py-4 text-base text-gray-800 placeholder-gray-500 ring-1 ring-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 hover:shadow-2xl ${isShaking ? 'animate-shake' : ''}`}
                required
                aria-label="이메일 입력"
              />
            </div>
            <motion.button
              type="submit"
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-orange-600 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </motion.button>
          </motion.form>
        </motion.div>
        
        <motion.div 
          className="flex justify-center md:w-1/2 md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-3xl blur-2xl transform rotate-6" />
            <img
              src="https://placehold.co/320x640/E0E0E0/333333?text=lifegoose+App"
              alt="스마트폰 프리뷰"
              className="relative rounded-3xl border border-white/50 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          .animate-shake {
            animation: shake 0.3s ease-in-out;
          }
        `}
      </style>
    </section>
  )
}