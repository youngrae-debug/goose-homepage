import { useTranslation } from 'react-i18next'

export default function NewsletterAgreementModal({
  onAgree,
  onCancel,
}: {
  onAgree: () => void
  onCancel: () => void
}) {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          {t('newsletter.modal.title')}
        </h2>

        <p className="mb-2 text-sm">{t('newsletter.modal.description1')}</p>

        <ul className="mb-4 list-outside list-disc pl-5 text-left text-sm leading-relaxed text-gray-600">
          <li>
            <strong>{t('newsletter.modal.item1.title')}</strong>{' '}
            {t('newsletter.modal.item1.desc')}
          </li>
          <li>
            <strong>{t('newsletter.modal.item2.title')}</strong>{' '}
            {t('newsletter.modal.item2.desc')}
          </li>
          <li>
            <strong>{t('newsletter.modal.item3.title')}</strong>{' '}
            {t('newsletter.modal.item3.desc')}
          </li>
          <li>{t('newsletter.modal.item4')}</li>
        </ul>

        <p className="mb-4 text-sm">{t('newsletter.modal.description2')}</p>

        <div className="flex flex-row justify-end gap-3">
          <button
            onClick={onCancel}
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            {t('newsletter.modal.cancel')}
          </button>
          <button
            onClick={onAgree}
            className="rounded bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
          >
            {t('newsletter.modal.agree')}
          </button>
        </div>
      </div>
    </div>
  )
}
