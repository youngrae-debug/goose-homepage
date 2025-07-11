import NewsletterAgreementModal from '#components/home/newsletter-agreement-modal/newsletter-agreement-modal.tsx'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'

export function SubscriptionSection() {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubscribeClick = () => {
    if (!email) {
      toast.error(t('newsletter.alert.inputEmail'))
      return
    }
    setShowModal(true)
  }

  const handleAgree = async () => {
    try {
      await axios.post(
        'https://newsletter.lifegoose.com/newsletter/subscribe',
        {
          email,
        }
      )

      toast.success(t('newsletter.alert.success'))

      setEmail('')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        toast.error(t('newsletter.alert.fail'))
      } else {
        toast.error(t('newsletter.alert.unknown'))
      }
    } finally {
      setShowModal(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 px-6 py-24 text-center text-black overflow-hidden min-h-[100vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
        >
          <Mail size={32} />
        </motion.div>

        <motion.h2
          className="mb-6 text-4xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('newsletter.title')}
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-center text-lg whitespace-pre-line text-gray-700 sm:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {t('newsletter.description')}
        </motion.p>

        <motion.form
          className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className="w-full rounded-2xl border-0 bg-white/80 backdrop-blur-sm px-6 py-4 text-base text-gray-800 placeholder-gray-500 shadow-lg ring-1 ring-gray-200/50 focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all duration-300"
            />
          </div>
          <motion.button
            onClick={handleSubscribeClick}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t('newsletter.button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
            >
              <NewsletterAgreementModal
                onAgree={handleAgree}
                onCancel={() => setShowModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}