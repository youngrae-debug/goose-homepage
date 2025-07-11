import { Footer } from '#components/common/footer'
import { LandingHeader } from '#components/common/landing-header'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <LandingHeader />

      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center text-black">
        <motion.h1
          className="mb-3 text-2xl font-semibold sm:text-3xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('notfound.subtitle')}
        </motion.h1>

        <motion.p
          className="mb-6 max-w-md text-sm whitespace-pre-line text-gray-600 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('notfound.description')}
        </motion.p>

        <motion.a
          href="/"
          className="inline-block rounded-lg border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t('notfound.cta')}
        </motion.a>
      </main>

      <Footer />
    </>
  )
}

export default NotFound
