// src/components/common/language-switcher.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <motion.button
        onClick={() => changeLanguage('ko')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          i18n.language === 'ko'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        한국어
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          i18n.language === 'en'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        English
      </motion.button>
    </div>
  );
};