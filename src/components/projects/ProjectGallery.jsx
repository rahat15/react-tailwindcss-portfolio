// import { useContext } from 'react';
// import SingleProjectContext from '../../context/SingleProjectContext';

// const ProjectGallery = () => {
// 	const { singleProjectData } = useContext(SingleProjectContext);

// 	return (
// 		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
// 			{singleProjectData.ProjectImages.map((project) => {
// 				return (
// 					<div className="mb-10 sm:mb-0" key={project.id}>
// 						<img
// 							src={project.img}
// 							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
// 							alt={project.title}
// 							key={project.id}
// 						/>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default ProjectGallery;

const ProjectGallery = ({ projectImages }) => {
	if (!projectImages || !projectImages.length) return null;
  
	return (
	  <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		{projectImages.map((image, index) => (
		  <div className="mb-10 sm:mb-0" key={index}>
			<img
			  src={image}
			  alt={`Project Image ${index + 1}`}
			  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
			/>
		  </div>
		))}
	  </div>
	);
  };
  

export default ProjectGallery;
