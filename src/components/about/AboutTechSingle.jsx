const AboutTechSingle = ({ title, image }) => {
	return (
		<div
			title={title}
			className="transform hover:scale-105 transition-transform duration-200 ease-in-out flex items-center justify-center h-12 w-20 bg-secondary-light border border-ternary-light dark:border-ternary-dark shadow-sm rounded-md mb-4 cursor-pointer p-2"
		>
			<img
				src={image}
				alt={title}
				className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
			/>
		</div>
	);
};

export default AboutTechSingle;
