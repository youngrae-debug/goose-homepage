import { useTranslation } from 'react-i18next'

export function CalendarSection() {
  const { t } = useTranslation()

  return (
    <section className="max-w-8xl mx-auto flex flex-col items-center justify-center gap-12 rounded-xl bg-gray-50 px-6 py-16 shadow-sm md:flex-row md:px-12 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center md:flex-row">
        <div className="flex justify-center md:w-1/2 md:justify-start">
          <img
            src="https://placehold.co/380x760/F0F0F0/333333?text=Family+Calendar+App"
            alt="가족 캘린더 화면"
            className="rounded-xl border border-gray-200 shadow-lg"
          />
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h2 className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
            {t('calendar.title', { defaultValue: '가족 일정, 놓치지 마세요' })}
          </h2>
          <p className="text-lg leading-relaxed font-light text-gray-700 md:text-xl">
            {t('calendar.description', {
              defaultValue:
                '모두가 함께 사용하는 가족 캘린더 기능으로 중요한 기념일, 약속, 이벤트를 공유하고 관리하여 가족 모두가 한마음으로 움직일 수 있도록 돕습니다.',
            })}
          </p>
        </div>
      </div>
    </section>
  )
}