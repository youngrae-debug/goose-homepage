// // src/components/home/TestimonialsSection.tsx
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { useEffect, useRef } from 'react';

// export const TestimonialsSection: React.FC = () => {
//   const { t } = useTranslation();
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           sectionRef.current?.classList.add('visible');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 md:py-28 px-6 md:px-12 bg-gray-50 animate-on-scroll"
//     >
//       <div className="max-w-7xl mx-auto w-full">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 leading-tight"
//           initial="hidden"
//           animate={sectionRef.current?.classList.contains('visible') ? 'visible' : 'hidden'}
//           variants={childVariants}
//         >
//           {t('testimonials.title', { defaultValue: '가족들의 생생한 후기' })}
//         </motion.h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate={sectionRef.current?.classList.contains('visible') ? 'visible' : 'hidden'}
//           variants={containerVariants}
//         >
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300"
//             variants={childVariants}
//           >
//             <img
//               src="https://placehold.co/100x100/E0E0E0/333333?text=김+지현"
//               alt="김지현님 사진"
//               className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200 shadow-sm"
//             />
//             <p className="text-lg font-semibold text-gray-900 mb-2">
//               {t('testimonials.items.0.name', { defaultValue: '김지현님' })}
//             </p>
//             <p className="text-gray-700 italic leading-relaxed text-sm">
//               {t('testimonials.items.0.review', { defaultValue: '“아이들과의 소통이 훨씬 쉬워졌고, 앨범 기능 덕분에 추억도 많이 쌓고 있어요!”' })}
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300"
//             variants={childVariants}
//           >
//             <img
//               src="https://placehold.co/100x100/E0E0E0/333333?text=박+민준"
//               alt="박민준님 사진"
//               className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200 shadow-sm"
//             />
//             <p className="text-lg font-semibold text-gray-900 mb-2">
//               {t('testimonials.items.1.name', { defaultValue: '박민준님' })}
//             </p>
//             <p className="text-gray-700 italic leading-relaxed text-sm">
//               {t('testimonials.items.1.review', { defaultValue: '“가족들에 대해서 알아가고 있어요. 정말 든든해요.”' })}
//             </p>
//           </motion.div>
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300"
//             variants={childVariants}
//           >
//             <img
//               src="https://placehold.co/100x100/E0E0E0/333333?text=이+수영"
//               alt="이수영님 사진"
//               className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200 shadow-sm"
//             />
//             <p className="text-lg font-semibold text-gray-900 mb-2">
//               {t('testimonials.items.2.name', { defaultValue: '이수영님' })}
//             </p>
//             <p className="text-gray-700 italic leading-relaxed text-sm">
//               {t('testimonials.items.2.review', { defaultValue: '“가족 캘린더로 모두의 일정을 한눈에 보니, 이제 약속 겹칠 일이 없어졌어요. 강력 추천합니다!”' })}
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
