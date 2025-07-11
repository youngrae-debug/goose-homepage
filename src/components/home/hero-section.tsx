// src/components/home/HeroSection.tsx
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-16 text-gray-900 md:flex-row md:px-12 md:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center md:flex-row">
        <div className="mb-12 text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mb-10 text-xl leading-relaxed font-light opacity-90 md:text-2xl">
            {t('hero.description')}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start"
          >
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('hero.emailPlaceholder')}
              className={`rounded-lg border border-gray-200 bg-gray-50 px-6 py-3 text-base text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none ${isShaking ? 'animate-shake' : ''}`}
              required
              aria-label="이메일 입력"
            />
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-gray-700"
            >
              {t('hero.cta')}
            </button>
          </form>
        </div>
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <img
            src="https://placehold.co/320x640/E0E0E0/333333?text=lifegoose+App"
            alt="스마트폰 프리뷰"
            className="rounded-xl border border-gray-200 shadow-lg"
          />
        </div>
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