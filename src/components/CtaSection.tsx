// src/components/CtaSection.tsx
import { useTranslation } from 'react-i18next';

export const CtaSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-12 text-center rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
          {t('cta.title', { defaultValue: '가족과 시간을 보낼 준비가 되셨나요?' })}
        </h2>
        <button className="px-12 py-4 bg-white text-gray-900 font-extrabold text-xl rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md">
          {t('cta.cta', { defaultValue: '앱스토어가기' })}
        </button>
      </div>
    </section>
  );
};