// src/components/common/language-switcher.tsx
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button
        onClick={() => changeLanguage('ko')}
        className="text-gray-600 hover:text-gray-900"
      >
        한국어
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="text-gray-600 hover:text-gray-900 ml-2"
      >
        English
      </button>
    </>
  );
};