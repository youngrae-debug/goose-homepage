// src/pages/home/index.tsx
import { Footer } from '#components/common/footer'
import { LandingHeader } from '#components/common/landing-header'
import { CtaSection } from '#components/CtaSection'
import { CalendarSection } from '#components/home/calendar-section'
import { FeaturesSection } from '#components/home/features-section'
import { HeroSection } from '#components/home/hero-section'
import { SecurityGrowthSection } from '#components/home/security-growth-section'
import { WhySection } from '#components/home/why-section'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
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
      <LandingHeader />
      <HeroSection />
      <WhySection />
      <FeaturesSection />
      <CalendarSection />
      <SecurityGrowthSection />
      <CtaSection />
      <Footer />
    </motion.div>
  )
}

export default Home
