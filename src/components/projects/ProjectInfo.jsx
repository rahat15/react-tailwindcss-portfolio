// import { useContext } from 'react';
// import SingleProjectContext from '../../context/SingleProjectContext';

// const ProjectInfo = () => {
// 	const { singleProjectData } = useContext(SingleProjectContext);

// 	return (
// 		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
// 			<div className="w-full sm:w-1/3 text-left">
// 				{/* Single project client details */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
// 						{singleProjectData.ProjectInfo.ClientHeading}
// 					</p>
// 					<ul className="leading-loose">
// 						{singleProjectData.ProjectInfo.CompanyInfo.map(
// 							(info) => {
// 								return (
// 									<li
// 										className="font-general-regular text-ternary-dark dark:text-ternary-light"
// 										key={info.id}
// 									>
// 										<span>{info.title}: </span>
// 										<a
// 											href="https://stoman.me"
// 											className={
// 												info.title === 'Website' ||
// 												info.title === 'Phone'
// 													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
// 													: ''
// 											}
// 											aria-label="Project Website and Phone"
// 										>
// 											{info.details}
// 										</a>
// 									</li>
// 								);
// 							}
// 						)}
// 					</ul>
// 				</div>

// 				{/* Single project objectives */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.ObjectivesHeading}
// 					</p>
// 					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
// 						{singleProjectData.ProjectInfo.ObjectivesDetails}
// 					</p>
// 				</div>

// 				{/* Single project technologies */}
// 				<div className="mb-7">
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.Technologies[0].title}
// 					</p>
// 					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
// 						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
// 							', '
// 						)}
// 					</p>
// 				</div>

// 				{/* Single project social sharing */}
// 				<div>
// 					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
// 						{singleProjectData.ProjectInfo.SocialSharingHeading}
// 					</p>
// 					<div className="flex items-center gap-3 mt-5">
// 						{singleProjectData.ProjectInfo.SocialSharing.map(
// 							(social) => {
// 								return (
// 									<a
// 										key={social.id}
// 										href={social.url}
// 										target="__blank"
// 										aria-label="Share Project"
// 										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
// 									>
// 										<span className="text-lg lg:text-2xl">
// 											{social.icon}
// 										</span>
// 									</a>
// 								);
// 							}
// 						)}
// 					</div>
// 				</div>
// 			</div>

// 			{/*  Single project right section */}
// 			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
// 				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
// 					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
// 				</p>
// 				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
// 					return (
// 						<p
// 							key={details.id}
// 							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
// 						>
// 							{details.details}
// 						</p>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };

// export default ProjectInfo;


const ProjectInfo = ({ info }) => {
	if (!info) return null;

	const { description, technologies, challenges, companyInfo } = info;

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			{/* Left Column: Company Info & Technologies */}
			<div className="w-full sm:w-1/3 text-left">
				{/* Client Info */}
				<div className="mb-7">
					<p className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Client / Organization
					</p>
					<ul className="leading-loose">
						{companyInfo?.map((item, index) => (
							<li
								className="text-ternary-dark dark:text-ternary-light"
								key={index}
							>
								<span>{item.title}: </span>
								<a
									href={
										item.title.toLowerCase() === 'website'
											? item.details
											: undefined
									}
									target="_blank"
									rel="noopener noreferrer"
									className={
										item.title.toLowerCase() === 'website' ||
										item.title.toLowerCase() === 'contact'
											? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											: ''
									}
								>
									{item.details}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Technologies */}
				<div className="mb-7">
					<p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Tools & Technologies
					</p>
					<p className="text-primary-dark dark:text-ternary-light">
						{technologies?.join(', ')}
					</p>
				</div>
			</div>

			{/* Right Column: Description & Challenges */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="text-2xl font-bold mb-5 text-primary-dark dark:text-primary-light">
					Description
				</p>
				<p className="mb-10 text-lg text-ternary-dark dark:text-ternary-light">
					{description}
				</p>

				{challenges?.length > 0 && (
					<>
						<p className="text-2xl font-bold mb-5 text-primary-dark dark:text-primary-light">
							Challenges & Highlights
						</p>
						{challenges.map((item, idx) => (
							<p
								key={idx}
								className="mb-4 text-lg text-ternary-dark dark:text-ternary-light"
							>
								• {item}
							</p>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default ProjectInfo;
