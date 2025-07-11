// src/pages/home/index.tsx
import { Footer } from '#components/common/footer'
import { CtaSection } from '#components/CtaSection'
import { CalendarSection } from '#components/home/calendar-section'
import { FeaturesSection } from '#components/home/features-section'
import { HeroSection } from '#components/home/hero-section'
import { SecurityGrowthSection } from '#components/home/security-growth-section'
import { SubscriptionSection } from '#components/home/subscription-section/subscription-section'
import { WhySection } from '#components/home/why-section'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>{t('home.title', { defaultValue: 'lifegoose' })}</title>
      </Helmet>
      <HeroSection />
      <WhySection />
      <FeaturesSection />
      <CalendarSection />
      <SecurityGrowthSection />
      <SubscriptionSection />
      <CtaSection />
      <Footer />
    </motion.div>
  )
}

export default Home