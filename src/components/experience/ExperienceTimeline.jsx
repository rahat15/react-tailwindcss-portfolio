import React, { useState } from 'react';

const ExperienceTimeline = ({ experiences }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-10">
      {Array.isArray(experiences) &&
        experiences.map((exp) =>
          exp.roles.map((role) => (
            <div
              key={role.id}
              onClick={() => toggleCard(role.id)}
              className="group relative cursor-pointer border border-blue-200 dark:border-gray-600 shadow-md rounded-lg bg-[#f9f9f9] dark:bg-[#1e293b] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-400 dark:hover:border-gray-400"
            >

              
              <div className="flex items-start gap-4 p-6 relative w-full" dir="ltr">
               
               
               {/* Right-side Arrow */}
               {expandedCard !== role.id && (
                <div 
                  className="experience-arrow text-black dark:text-white"
                  style={{
                    position: 'absolute',
                    left: '1.5rem',
                    top: '70%',
                    width: '24px',
                    transform: 'translateY(-50%)',
                    fontSize: '1.5rem',
                    pointerEvents: 'none',
                  }}
                >
                  ⌵
                </div>
              )}


                {/* Logo */}
                <div className="flex-shrink-0" style={{ width: '64px', height: '64px' }}>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded shadow-lg"
                    style={{ display: 'block' }}
                  />
                </div>

                {/* Experience Content */}
                <div className="flex-1">
                  <div className="mb-2">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{exp.company}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>

                  <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4 relative">
                    <div className="absolute -left-2 top-2 w-3 h-3 bg-blue-600 rounded-full shadow-md" />
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">{role.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {role.duration} · {role.mode}
                    </p>


                    {/* Expandable Content */}
                    {expandedCard === role.id && (
                      <div className="mt-4 space-y-8">
                        {Array.isArray(role.projects) &&
                          role.projects.map((proj, idx) => (
                            <div
                              key={idx}
                              className="space-y-3 border-b border-gray-200 dark:border-gray-600 pb-4"
                            >
                                  {proj.title && (
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">{proj.title}:</p>
                                  )}
                                  {proj.summary && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      <em>{proj.summary}</em>
                                    </p>
                                  )}
                                  {Array.isArray(proj.bullets) && proj.bullets.length > 0 && (
                                    <ul
                                      className="pl-6 text-sm text-gray-700 dark:text-gray-200 space-y-1"
                                      style={{ listStyleType: 'disc', paddingLeft: '1.75rem' }}
                                    >
                                      {proj.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                      ))}
                                    </ul>
                                  )}
                                  {Array.isArray(proj.skills) && proj.skills.length > 0 && (
                                    <div>
                                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-2 mb-2">Skills:</p>
                                  <div className="flex flex-wrap gap-2 mt-1">
                                    {proj.skills.map((skill) => (
                                      <span
                                        key={skill}
                                        className="px-4 py-1.5 text-sm font-normal rounded-md text-gray-800 border border-gray-500"
                                        style={{ backgroundColor: '#e5e7eb' }}
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 px-6 pb-4">
                {/* This invisible spacer matches the logo dimensions */}
                <div className="invisible flex-shrink-0" style={{ width: '64px', height: '64px' }}></div>

                <div className="flex-1">
                  <div className="border-l-2 border-transparent pl-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        role.type === 'Internship'
                          ? 'bg-blue-100 text-blue-800 dark:bg-transparent dark:text-gray-200'
                          : 'bg-green-100 text-green-800 dark:bg-transparent dark:text-gray-200'
                      }`}
                    >
                      {role.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default ExperienceTimeline;