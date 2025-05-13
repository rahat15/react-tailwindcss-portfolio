import { useState } from 'react';

const Publications = ({ publications }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);


    const toggleCard = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="mb-12" id="publications">
            <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">Publications</h3>
            <div className="flex flex-col space-y-10">
                {publications.map((pub, idx) => (
                    <div
                        key={idx}
                        className="mb-6 border rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-xl transition cursor-pointer"
                        onClick={() => toggleCard(idx)}
                    >

                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold text-primary-dark dark:text-gray-200 mb-1">
                                {pub.title}
                            </h4>
                            {expandedIndex !== idx && (
                                <div
                                    className="text-sky-400 dark:text-white"
                                    style={{
                                        color: '#60a5fa',
                                        fontSize: '1.25rem',
                                        marginLeft: '0.5rem',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    ⌵
                                </div>
                            )}
                        </div>

                        <p className="text-m text-gray-500 dark:text-gray-400 mb-1">{pub.authors}</p>

                        <p className="text-sm text-gray-500 dark:text-gray-400">{pub.event}</p>



                        {expandedIndex === idx && (
                            <div className="mt-4">
                                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                                    {pub.description}
                                </p>

                                {pub.link && (
                                    <div className="mb-4">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-blue-600 dark:text-gray-200 font-medium hover:font-semibold hover:underline transition duration-150"
                                        >
                                            View Official Publication
                                        </a>
                                    </div>
                                )}

                                {pub.pdf && (
                                    <div className="w-full mb-4" style={{ height: '500px' }}>
                                        <iframe
                                            src={`${pub.pdf}#toolbar=0`}
                                            title={`Preview of ${pub.title}`}
                                            width="100%"
                                            height="100%"
                                            className="rounded-lg shadow-md"
                                            style={{ border: '1px solid #ccc' }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
