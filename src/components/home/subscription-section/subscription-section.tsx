import NewsletterAgreementModal from '#components/home/newsletter-agreement-modal/newsletter-agreement-modal.tsx'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

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
    <section className="bg-white px-6 py-20 text-center text-black">
      <div className="flex justify-center mb-6">
        <motion.div
          className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Mail className="w-8 h-8 text-purple-600" />
        </motion.div>
      </div>

      <motion.h2
        className="mb-4 text-2xl font-semibold sm:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('newsletter.title')}
      </motion.h2>

      <motion.p
        className="mx-auto mb-8 max-w-xl text-center text-sm whitespace-pre-line text-gray-700 sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {t('newsletter.description')}
      </motion.p>

      <motion.form
        className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          className="flex-1 rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300"
        />
        <motion.button
          onClick={handleSubscribeClick}
          className="rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('newsletter.button')}
        </motion.button>
      </motion.form>
      
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
              transition={{ duration: 0.25 }}
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