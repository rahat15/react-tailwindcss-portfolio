import React, { useState } from 'react';
import educationData from '../../data/educationData';

const AboutEducation = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-10 px-4 py-12 container mx-auto">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        Education
			</p>

      {educationData.map((edu, index) => (
        <div
          key={index}
          onClick={() => toggleCard(index)}
          className="group relative cursor-pointer border border-blue-200 dark:border-gray-600 shadow-md rounded-lg bg-[#f9f9f9] dark:bg-[#1e293b] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-400 dark:hover:border-gray-400"
        >
          <div className="flex items-start gap-4 p-6 relative w-full">
            
            {/* Logo */}
            <div className="flex-shrink-0" style={{ width: '64px', height: '64px' }}>
              <img
                src={edu.logo}
                onError={(e) => (e.target.src = '/logos/default.png')}
                alt={edu.institution}
                className="w-full h-full object-contain rounded shadow-md"
              />
            </div>

            {/* Education Content */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{edu.degree}</h3>

                {/* Specialization */}
                {edu.specialization && (
                    <p className="text-sm text-gray-700 dark:text-gray-200">Specialization: { edu.specialization}</p>
                )}

                <p className="text-sm italic text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.duration}</p>

                {/* Expandable Details */}
                {expandedCard === index && (
                    <ul className="mt-4 pl-5 list-disc text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {edu.bulletPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                    </ul>
                )}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutEducation;
