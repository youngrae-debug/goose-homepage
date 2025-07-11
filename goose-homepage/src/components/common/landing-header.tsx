// src/components/common/landing-header.tsx
import { LanguageSwitcher } from './language-switcher';

export const LandingHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="text-3xl font-extrabold text-gray-900 tracking-tight">lifegoose</div>
        <div className="space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};