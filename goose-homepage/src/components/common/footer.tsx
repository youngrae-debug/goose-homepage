// src/components/common/footer.tsx
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mb-8 text-base">
          <a href="#" className="hover:text-white transition-colors duration-200 font-medium">About</a>
          <a href="#" className="hover:text-white transition-colors duration-200 font-medium">Terms</a>
          <a href="#" className="hover:text-white transition-colors duration-200 font-medium">Privacy</a>
          <a href="#" className="hover:text-white transition-colors duration-200 font-medium">Contact</a>
        </div>
        <p className="mt-6 text-gray-500 text-xs">© 2025 lifeGoose. All rights reserved.</p>
      </div>
    </footer>
  );
};