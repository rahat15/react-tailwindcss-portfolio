import Marquee from 'react-fast-marquee';

const CricketGallery = ({ data }) => {
    return (
        <section className="mb-12" id="cricket">
            <h3 className="text-xl font-general-medium mb-4 text-gray-900 dark:text-gray-200">
                Cricket
            </h3>

            <Marquee speed={30} gradient={false} pauseOnHover={false} className='mb-4 px-4'>
                {data.gallery.map((item, idx) => (
                    <div
                        key={idx}
                        // Inline styles FORCE size (overrides all CSS)
                        style={{
                            width: "256px",   // w-64 = 16rem = 256px
                            height: "192px",  // h-48 = 12rem = 192px (4:3 ratio)
                            marginRight: "24px", // mr-6 = 1.5rem = 24px
                            flexShrink: "0",
                            overflow: "hidden",
                            borderRadius: "8px", // rounded-lg
                            backgroundColor: "#e5e7eb", // bg-gray-200
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", // shadow-md
                        }}
                    >
                        <img
                            src={item.image}
                            alt={`Cricket ${idx}`}
                            // Inline styles prevent external overrides
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Marquee>


            <a
                href={data.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block border rounded-lg p-4 hover:shadow-lg transition"
            >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    {data.description}
                </p>
            </a>
        </section>
    );
};

export default CricketGallery;
