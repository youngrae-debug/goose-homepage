// src/components/home/WhySection.tsx
import { useTranslation } from 'react-i18next'

export function WhySection() {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-50 px-6 py-16 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-16 text-center text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          {t('why.title', { defaultValue: '왜 lifeGoose인가요?' })}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('why.items.0.title', { defaultValue: '가족만의 안전한 공간' })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('why.items.0.description', {
                defaultValue:
                  '외부의 방해 없이 오직 가족들만을 위한 프라이빗한 소통 공간을 제공합니다.',
              })}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('why.items.1.title', {
                defaultValue: '강력한 프라이버시 보호',
              })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('why.items.1.description', {
                defaultValue:
                  '모든 데이터는 안전하게 보호되며, 공유되지 않습니다.',
              })}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('why.items.2.title', { defaultValue: '감성적인 가족 연결' })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('why.items.2.description', {
                defaultValue:
                  '소중한 순간들을 함께 기록하고 공유하며 가족의 유대감을 더욱 깊게 만듭니다.',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}