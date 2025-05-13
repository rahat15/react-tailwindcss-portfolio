// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import contributionsData from '../data/contributionsData';

// const ContributionsAndInterests = () => {
//   const { publications, creativeWork, passion } = contributionsData;
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleCard = (index) => {
//     setExpandedIndex(prev => (prev === index ? null : index));
//   };

//   const [bookExpanded, setBookExpanded] = useState(false);

// const toggleBookCard = () => {
//   setBookExpanded((prev) => !prev);
// };


//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       className="container mx-auto py-12"
//     >
//       <h2 className="text-3xl font-general-medium text-center mb-10 text-gray-900 dark:text-gray-200">Contributions & Interests</h2>

//       {/* Publications */}
//       <section className="mb-12">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Publications</h3>
//         <div className="grid gap-6" >
//           {publications.map((pub, idx) => (
//             <div
//               key={idx}
//               className="border rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-xl transition cursor-pointer"
//               onClick={() => toggleCard(idx)}
//             >
//               {/* Always visible */}
//               <h4 className="text-2xl font-bold text-primary-dark dark:text-gray-200 mb-1">{pub.title}</h4>
//               <p className="text-sm text-gray-500 dark:text-gray-200">
//                 {pub.event}
//               </p>

//               {/* Conditionally visible */}
//               {expandedIndex === idx && (
//                 <div className="mt-4">
//                   <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
//                     {pub.description}
//                   </p>

//                   {pub.link && (
//                     <div className="mb-4">
//                       <a
//                         href={pub.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block text-blue-600 dark:text-gray-200 font-medium hover:font-semibold hover:underline transition duration-150"
//                       >
//                         View Official Publication
//                       </a>
//                     </div>
//                   )}

//                   {pub.pdf && (
//                     <div className="w-full mb-4" style={{ height: '500px' }}>
//                     <iframe
//                       src={`${pub.pdf}#toolbar=0`}
//                       title={`Preview of ${pub.title}`}
//                       width="100%"
//                       height="100%"
//                       className="rounded-lg shadow-md"
//                       style={{ border: '1px solid #ccc' }}
//                     />
//                   </div>
                  
//                   )}

                  
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Poetry Book Preview */}
//       <section className="mb-12">
//         <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Poetry Book</h3>

//         <div
//           className="border rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-xl transition cursor-pointer"
//           onClick={toggleBookCard}
//         >
//           {/* Always visible */}
//           <h4 className="text-2xl font-bold text-primary-dark dark:text-gray-200 mb-1">{creativeWork.title}</h4>
//           <p className="text-sm text-gray-500 dark:text-gray-200">{creativeWork.published}</p>

//           {/* Expandable content */}
//           {bookExpanded && (
//             <div className="mt-4 space-y-4">
//               <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
//                 {creativeWork.description}
//               </p>

//               {creativeWork.link && (
//                 <div className="mb-4">
//                 <a
//                   href={creativeWork.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-blue-600 dark:text-gray-200  font-medium hover:font-semibold hover:underline transition duration-150"
//                 >
//                   Buy here
//                 </a>
//                 </div>
//               )}

//               {creativeWork.pdf && (
//                 <div className="w-full" style={{ height: '600px' }}>
//                   <iframe
//                     src={`${creativeWork.pdf}#toolbar=0`}
//                     title={`Preview of ${creativeWork.title}`}
//                     width="100%"
//                     height="100%"
//                     className="rounded-lg shadow-md"
//                     style={{ border: '1px solid #ccc' }}
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Passion: Cricket */}
//       <section className="mb-12">
//         <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">Cricket</h3>
//         <div className="marquee-container mb-4">
//           <div className="animate-marquee">
//             {passion.cricket.gallery &&
//               passion.cricket.gallery.map((item, idx) => (
//                 <div key={idx} className="flex-shrink-0 w-64">
//                   <img
//                     src={item.image}
//                     alt={item.caption}
//                     className="w-full h-40 object-cover rounded-lg shadow-md"
//                   />
//                   <p className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">{item.caption}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <a
//           href={passion.cricket.facebookLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block border rounded-lg p-4 hover:shadow-lg transition"
//         >
//           <p className="text-sm text-gray-700 dark:text-gray-300">{passion.cricket.description}</p>
//         </a>
//       </section>

//       {/* Passion: Mentoring & Workshops */}
//       <section className="mb-12">
//         <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">Mentoring & Workshops</h3>
//         <div className="marquee-container">
//           <div className="animate-marquee">
//             {passion.mentoring.map((item, idx) => (
//               <div key={idx} className="flex-shrink-0 w-64">
//                 <img
//                   src={item.image}
//                   alt={item.caption}
//                   className="w-full h-40 object-cover rounded-lg shadow-md"
//                 />
//                 <p className="text-xs mt-1 text-center text-gray-600 dark:text-gray-300">{item.caption}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default ContributionsAndInterests;


import { motion } from 'framer-motion';
import contributionsData from '../data/contributionsData';

import Publications from '../components/contributions/Publications';
import Books from '../components/contributions/Books';
import CricketGallery from '../components/contributions/CricketGallery';
import MentorGallery from '../components/contributions/MentorGallery';

const ContributionsAndInterests = () => {
  const { publications, creativeWork, passion } = contributionsData;


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="container mx-auto mt-12"
    >
      <h2 className="text-3xl font-general-medium text-center mb-10 text-gray-900 dark:text-gray-200">
        Contributions & Interests
      </h2>

      <Publications publications={publications} />
      <Books creativeWork={creativeWork} />
      <CricketGallery data={passion.cricket} />
      <MentorGallery data={passion.mentoring} />
    </motion.div>
  );
};

export default ContributionsAndInterests;
