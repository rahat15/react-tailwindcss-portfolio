import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutTechSingle from './AboutTechSingle';

const AboutTech = () => {
	const { techStack, Heading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{Heading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{techStack.map((client) => (
					<AboutTechSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutTech;
