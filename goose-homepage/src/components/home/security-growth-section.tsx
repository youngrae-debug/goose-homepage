// src/components/home/SecurityGrowthSection.tsx
import { useTranslation } from 'react-i18next'

export function SecurityGrowthSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-50 px-6 py-16 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <h2
          className="mb-16 text-center text-3xl leading-tight font-bold text-gray-900 md:text-4xl"
          dangerouslySetInnerHTML={{
            __html: t('security.title', {
              defaultValue:
                '🛡️ 보안은 기본,<br class="block md:hidden"> 우리는 계속 발전합니다',
            }),
          }}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-fingerprint"
              >
                <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 2.22-1.23 4.16-3.11 5.17l-1.52 1.66c-.3.3-.7.44-1.1.44H7.73c-.4 0-.8-.14-1.1-.44L5.11 17.17C3.23 16.16 2 14.22 2 12Z" />
                <path d="M12 2v6" />
                <path d="M12 18v4" />
                <path d="M16.2 14.5a7 7 0 0 0-8.4 0" />
                <path d="M18.8 11.4a9.9 9.9 0 0 0-13.6 0" />
                <path d="M11.2 1.7a10 10 0 0 1 1.6 0" />
                <path d="M8.5 19.3c.6.9 1.5 1.7 2.5 2.2" />
                <path d="M13.5 19.3a4.7 4.7 0 0 0-2.5 2.2" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('security.items.1.title', {
                defaultValue: '엄격한 접근 통제',
              })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('security.items.1.description', {
                defaultValue:
                  '권한이 있는 가족 구성원만 데이터에 접근할 수 있습니다.',
              })}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rotate-cw"
              >
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('security.items.2.title', {
                defaultValue: '지속적인 보안 업데이트',
              })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('security.items.2.description', {
                defaultValue:
                  '최신 보안 위협에 대비하여 끊임없이 업데이트됩니다.',
              })}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="mb-6 text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb"
              >
                <path d="M15 14c.2-.84.5-1.54.9-2.2c.55-.91.9-2.06.9-3.2A6 6 0 0 0 6 9c0 1.14.34 2.29.9 3.2s.7 1.36.9 2.2" />
                <path d="M12 22q1.5 0 3-2c-.5-1.5-2-3-3-3s-2.5 1.5-3 3c1.5 2 3 2 3 2Z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {t('security.items.3.title', {
                defaultValue: '투명한 소통 약속',
              })}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {t('security.items.3.description', {
                defaultValue:
                  '사용자 피드백을 적극 반영하여 더 나은 서비스를 만듭니다.',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
