import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { Heading as TechPageHeading } from '../data/TechData';
import { techStack as TechStackJson } from '../data/TechData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const Heading = TechPageHeading;

	const [techStack, setTechData] = useState(TechStackJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				Heading,
				techStack,
				setTechData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
