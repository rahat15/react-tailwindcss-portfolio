import React from 'react';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import experienceData from '../data/experienceData';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="container mx-auto py-12"
    >
     <h1 className="text-3xl sm:text-4xl font-general-medium text-center mb-10 text-gray-900 dark:text-gray-200">
        Experience
     </h1>
     

      <ExperienceTimeline experiences={experienceData} />
    </motion.div>
  );
};

export default Experience;
