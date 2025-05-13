import { useState } from 'react';

const Books = ({ creativeWork }) => {
    const [bookExpanded, setBookExpanded] = useState(false);

    const toggleBookCard = () => {
        setBookExpanded((prev) => !prev);
    };

    return (
        <section className="mb-12" id="poetry">
            <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">Poetry Book</h3>

            <div
                className="mb-6 border rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-xl transition cursor-pointer"
                onClick={toggleBookCard}
            >
                <div className="flex items-center justify-between mb-1">
                    <h4 className="text-2xl font-bold text-primary-dark dark:text-gray-200">
                        {creativeWork.title}
                    </h4>
                    {!bookExpanded && (
                        <div
                            className="text-blue-400 dark:text-white"
                            style={{
                                color: '#60a5fa', // fallback
                                fontSize: '1.25rem',
                                marginLeft: '0.5rem',
                                pointerEvents: 'none',
                            }}
                        >
                            ⌵
                        </div>
                    )}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">{creativeWork.published}</p>

                {bookExpanded && (
                    <div className="mt-4 space-y-4">
                        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                            {creativeWork.description}
                        </p>

                        {creativeWork.link && (
                            <div className="mb-4">
                                <a
                                    href={creativeWork.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 dark:text-gray-200 font-medium hover:font-semibold hover:underline transition duration-150"
                                >
                                    Buy here
                                </a>
                            </div>
                        )}

                        {creativeWork.pdf && (
                            <div className="w-full" style={{ height: '600px' }}>
                                <iframe
                                    src={`${creativeWork.pdf}#toolbar=0`}
                                    title={`Preview of ${creativeWork.title}`}
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
        </section>
    );
};

export default Books;
