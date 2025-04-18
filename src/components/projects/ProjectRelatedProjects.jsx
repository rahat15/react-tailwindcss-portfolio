// import { useContext } from 'react';
// import SingleProjectContext from '../../context/SingleProjectContext';

// const ProjectRelatedProjects = () => {
// 	const { singleProjectData } = useContext(SingleProjectContext);

// 	return (
// 		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
// 			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
// 				{singleProjectData.RelatedProject.title}
// 			</p>

// 			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
// 				{singleProjectData.RelatedProject.Projects.map((project) => {
// 					return (
// 						<img
// 							src={project.img}
// 							className="rounded-xl cursor-pointer"
// 							alt={project.title}
// 							key={project.id}
// 						/>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default ProjectRelatedProjects;


import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';

const ProjectRelatedProjects = ({ currentId }) => {
	// Get 3 projects that aren't the current one
	const related = projectsData
		.filter(project => project.id !== currentId)
		.slice(0, 3); // You can randomize or filter smarter later

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Related Projects
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
				{related.map((project) => (
					<Link to={`/project/${project.id}`} key={project.id}>
						<div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
							<img
								src={project.images[0]}
								alt={project.title}
								className="rounded-xl cursor-pointer object-cover w-full h-48"
							/>
							<p className="mt-4 text-center text-lg font-medium text-ternary-dark dark:text-ternary-light">
								{project.title}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
