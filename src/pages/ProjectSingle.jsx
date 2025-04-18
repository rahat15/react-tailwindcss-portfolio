import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';

const ProjectSingle = () => {
	

	const { id } = useParams();
	console.log('URL param ID:', id);

	const project = projectsData.find((p) => String(p.id) === String(id));
	console.log('Loaded project:', project);


	if (!project) {
		return (
			<div className="text-center py-20 text-red-600 text-xl">
				🚫 Project with id "{id}" not found.
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader data={project.ProjectHeader} />
			<ProjectGallery projectImages={project.images} />
			<ProjectInfo info={project.projectInfo} />
			<ProjectRelatedProjects currentId={project.id} />
		</motion.div>
	);
};

export default ProjectSingle;
