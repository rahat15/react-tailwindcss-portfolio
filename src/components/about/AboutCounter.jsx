import { useCountUp } from 'react-countup';
import { useEffect, useState } from 'react';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'projectsCounter', end: 5, duration: 2 });
	useCountUp({ ref: 'eventsCounter', end: 10, duration: 2 });
	useCountUp({ ref: 'internshipsCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'publicationsCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'leadershipCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'bookCounter', end: 1, duration: 2 });

	const [views, setViews] = useState(null);

	// useCountUp for dynamic visitor counter (initialized to 0)
	const { start, update } = useCountUp({
		ref: 'viewsCounter',
		start: 0,
		end: views ?? 0,
		duration: 2,
		reDraw: true,
	});

	useEffect(() => {
		fetch('/api/views')
			.then((res) => res.json())
			.then((data) => {
				setViews(data.views);
				update(data.views);
			})
			.catch((err) => console.error('Visitor counter error:', err));
	}, [update]);

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 flex flex-col items-center justify-center">

				{/* Top Row */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full text-center">
					<CounterItem
						title="Research Projects"
						counter={<span id="projectsCounter" />}
						measurement="+"
					/>
					<CounterItem
						title="Hackathons & Workshops"
						counter={<span id="eventsCounter" />}
						measurement="+"
					/>
					<CounterItem
						title="Internships"
						counter={<span id="internshipsCounter" />}
						measurement=""
					/>
				</div>

				{/* Bottom Row */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full text-center">
					<CounterItem
						title="Publications"
						counter={<span id="publicationsCounter" />}
						measurement=""
					/>
					<CounterItem
						title="Leadership Roles"
						counter={<span id="leadershipCounter" />}
						measurement=""
					/>
					<CounterItem
						title="Books Authored"
						counter={<span id="bookCounter" />}
						measurement=""
					/>
				</div>

				{/* Website Views */}
				<div className="grid grid-cols-1 sm:grid-cols-1 gap-8 w-full text-center">
					<CounterItem
						title="Website Views"
						counter={<span id="viewsCounter">{views !== null ? `${Math.round(views / 10) * 10}+` : ''}</span>}
						measurement=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutCounter;
