import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutTech from '../components/about/AboutTech';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import AboutEducation from '../components/about/AboutEducation';

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>


			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			exit={{ opacity: 0 }}
			className="container mx-auto mt-12"  // <-- added spacing
			>
			<AboutEducation />
			</motion.div>



			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutTech />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
