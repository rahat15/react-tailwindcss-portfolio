// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const ProjectSingle = ({ title, category, image }) => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1, delay: 1 }}
// 			transition={{
// 				ease: 'easeInOut',
// 				duration: 0.7,
// 				delay: 0.15,
// 			}}
// 		>
// 			<Link to="/projects/single-project" aria-label="Single Project">
// 				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
// 					<div>
// 						<img
// 							src={image}
// 							className="rounded-t-xl border-none"
// 							alt="Single Project"
// 						/>
// 					</div>
// 					<div className="text-center px-4 py-6">
// 						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
// 							{title}
// 						</p>
// 						<span className="text-lg text-ternary-dark dark:text-ternary-light">
// 							{category}
// 						</span>
// 					</div>
// 				</div>
// 			</Link>
// 		</motion.div>
// 	);
// };

// export default ProjectSingle;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={`/project/${id}`} aria-label={`Project: ${title}`}>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={Array.isArray(image) ? image[0] : image}
							className="rounded-t-xl border-none object-cover w-full h-52"
							alt={`Preview of ${title}`}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<div className="text-sm text-ternary-dark dark:text-ternary-light">
							{Array.isArray(category) ? category.join(' | ') : category}
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
