import Marquee from 'react-fast-marquee';

const MentorGallery = ({ data }) => {
    return (
        <section className="mb-12" id="mentoring">
            <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">
                Mentoring & Workshops
            </h3>

            <Marquee speed={30} gradient={false} pauseOnHover={false} className="mb-4 px-4">
                {data.map((item, idx) => (
                    <>
                        <div
                            key={idx}
                            className="flex-shrink-0"
                            style={{
                                width: "256px",
                                //transform: "translateX(12px)", // Half the gap
                                marginRight: "24px", // Other half
                            }}
                        >
                            <div
                                style={{
                                    width: "256px",
                                    height: "192px",
                                    flexShrink: "0",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                    backgroundColor: "#e5e7eb",
                                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={`Workshop ${idx}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-2 text-center" style={{ width: "100%" }}>
                                <p className="text-xs text-gray-900 dark:text-gray-200 truncate">
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    </>
                ))}
            </Marquee>
        </section>
    );
};

export default MentorGallery;