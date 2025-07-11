// src/App.tsx
import { Toaster } from './components/common/toaster';
import { usePageTracking } from './hooks/use-page-tracking'; // 가정: hooks 디렉토리에 존재
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { LandingHeader } from './components/common/landing-header';
import { Footer } from './components/common/footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { i18n } = useTranslation();

  usePageTracking();

  if (!i18n.isInitialized) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <HelmetProvider>
      <Toaster />
      <LandingHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={i18n.language + location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;