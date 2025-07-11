import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function NewsletterVerifyFail() {
  const { t } = useTranslation()

  const navigate = useNavigate()

  useEffect(() => {
    const referer = document.referrer
    const allowList = ['https://newsletter.lifegoose.com']

    const isAllowed = allowList.some((allowedUrl) =>
      referer?.startsWith(allowedUrl)
    )

    if (!isAllowed) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{t('newsletter.verify.fail.title')}</title>
        <meta
          property="og:title"
          content={t('newsletter.verify.fail.ogTitle')}
        />
        <meta
          property="og:description"
          content={t('newsletter.verify.fail.ogDesc')}
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black"
      >
        <h1 className="mb-4 text-3xl font-bold">
          {t('newsletter.verify.fail.heading')}
        </h1>
        <p className="mb-6 max-w-md text-sm text-gray-700 sm:text-base">
          {t('newsletter.verify.fail.description')}
        </p>
        <a
          href="/"
          className="rounded-md bg-black px-6 py-2 text-sm text-white transition hover:bg-gray-800"
        >
          {t('newsletter.verify.backButton')}
        </a>
      </motion.div>
    </>
  )
}

export default NewsletterVerifyFail
