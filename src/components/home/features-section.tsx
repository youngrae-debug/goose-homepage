// src/components/home/FeaturesSection.tsx
import { useTranslation } from 'react-i18next'

export function FeaturesSection() {
  const { t } = useTranslation()

  const featureItems = t('features.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-16 text-center text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          {t('features.headline')}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-base font-medium text-gray-700">
          {t('features.paragraph')}
        </p>
      </div>
    </section>
  )
}