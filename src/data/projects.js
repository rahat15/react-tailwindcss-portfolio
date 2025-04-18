
// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	
	// Project 1
	{
		id: 1,
		title: 'AI Crop Health Detection',
		category: ['Web Application', 'AI/ML', 'Generative AI'],
		images: [WebImage2, WebImage1, MobileImage1], // example images
		ProjectHeader: {
		  title: 'Vision-Based System using CLIP, YOLO, and RAG',
		  publishDate: 'Jul 2023',
		  tags: 'CLIP / YOLO / Faster R-CNN / LangChain / OpenAI',
		},
		projectInfo: {
		  description:
			'Developed a vision-based system for crop disease and weed detection using CLIP, YOLOv5, and RAG to enhance agricultural diagnostics.',
		  technologies: ['CLIP', 'YOLOv5', 'Faster R-CNN', 'LangChain', 'OpenAI API', 'Python'],
		  challenges: [
			'Integrated CLIP with custom datasets to evaluate zero-shot detection performance.',
			'Compared object detection accuracy with YOLOv5 and Faster R-CNN under field conditions.',
			'Built a RAG system using LangChain for intelligent responses to agricultural queries.',
			'Presented at EWU Symposium with practical use-case demonstrations.',
		  ],
		  companyInfo: [
			{ title: 'Client/Company', details: 'EWU Capstone Program' },
			{ title: 'Role', details: 'Full Stack ML Engineer' },
			{ title: 'Website', details: 'https://example.com' },
			{ title: 'Contact', details: 'info@example.com' },
		  ],
		},
	  },
	 
	  
	// Project 2
	{
		id: 2,
		title: 'Adaptive Path Planning',
		category: ['Robotics', 'AI/ML', 'Embedded Systems'],
		images: [WebImage2, WebImage1, MobileImage1], // example images
		ProjectHeader: {
		  title: 'Warthog Robot Navigation in Orchards',
		  publishDate: 'Sep 2024',
		  tags: 'ROS / SLAM / AMCL / LiDAR / Gazebo',
		},
		projectInfo: {
		  description:
			'Designed an adaptive path planning system for the Warthog robot using ROS and SLAM to enable autonomous navigation in orchard environments.',
		  technologies: ['ROS', 'SLAM', 'AMCL', 'LiDAR', 'Gazebo', 'Rviz'],
		  challenges: [
			'Implemented SLAM-based environment mapping to localize the robot in complex orchard layouts.',
			'Utilized Adaptive Monte Carlo Localization (AMCL) for real-time robot positioning.',
			'Tested the system in simulation using Gazebo and Rviz before deployment.',
			'Optimized for row-following and obstacle avoidance in narrow field corridors.',
		  ],
		  companyInfo: [
			{ title: 'Client/Company', details: 'Smart AgriTech Research Group' },
			{ title: 'Role', details: 'Robotics Developer' },
			{ title: 'Website', details: 'https://example.com' },
			{ title: 'Contact', details: 'contact@smartagritech.org' },
		  ],
		},
	  },


	// Project 3
	{
		id: 3,
		title: 'FarmFriend Chatbot',
		category: ['Web Application', 'AI/ML', 'Generative AI'],
		images: [WebImage2, WebImage1, MobileImage1], // example images,
		ProjectHeader: {
		  title: 'Multilingual Agricultural Chatbot',
		  publishDate: 'Apr 2024',
		  tags: 'LangChain / OpenAI API / ChromaDB / EWU Symposium',
		},
		projectInfo: {
		  description:
			'FarmFriend is a multilingual AI-powered chatbot developed to assist farmers with queries related to crops, weather, and farming practices. It leverages LangChain and OpenAI to generate accurate, contextual responses across languages.',
		  technologies: ['LangChain', 'OpenAI API', 'ChromaDB', 'Streamlit', 'Python'],
		  challenges: [
			'Integrated LangChain with OpenAI API to handle multilingual question-answering.',
			'Implemented ChromaDB for vector-based semantic retrieval of agricultural documents.',
			'Designed a user-friendly interface using Streamlit for farmers with minimal tech experience.',
			'Demonstrated practical applications at EWU Symposium 2024 with real-world examples.',
		  ],
		  companyInfo: [
			{ title: 'Client/Company', details: 'EWU Faculty-Mentored Project' },
			{ title: 'Role', details: 'AI Research Intern' },
			{ title: 'Website', details: 'https://example.com/farmfriend' },
			{ title: 'Contact', details: 'support@farmfriend.ai' },
		  ],
		},
	  },
	  

	// Project 4

	{
		id: 4,
		title: 'SmartBot Autonomous Vehicle',
		category: ['Robotics', 'AI/ML', 'Embedded Systems'],
		images: [WebImage2, WebImage1, MobileImage1], // example images,
		ProjectHeader: {
			title: 'Real-Time Navigation with Obstacle Detection',
			publishDate: 'May 2024',
			tags: 'NVIDIA Jetson / ROS / OpenCV / TensorFlow',
		},
		projectInfo: {
			description:
			'SmartBot is an AI-powered autonomous vehicle developed to navigate complex outdoor environments with real-time decision-making and obstacle avoidance.',
			technologies: ['NVIDIA Jetson Nano', 'OpenCV', 'ROS', 'TensorFlow', 'Python'],
			challenges: [
			'Implemented real-time lane detection using computer vision on the NVIDIA Jetson Nano.',
			'Used ROS for sensor integration, control flow, and decision-making.',
			'Developed a navigation stack that included obstacle avoidance and path correction.',
			'Showcased SmartBot at EWU Symposium 2024 as a prototype for smart field mobility.',
			],
			companyInfo: [
			{ title: 'Client/Company', details: 'Undergraduate Research Project (EWU)' },
			{ title: 'Role', details: 'Lead Developer / Computer Vision Engineer' },
			{ title: 'Website', details: 'https://example.com/smartbot' },
			{ title: 'Contact', details: 'team@smartbotai.dev' },
			],
		},
	},


	// Project 5

	{
		id: 5,
		title: 'IoT Security with ML',
		category: ['Cybersecurity', 'AI/ML'],
		images: [WebImage2, WebImage1, MobileImage1], // example images
		ProjectHeader: {
		  title: 'Penetration Testing & Intrusion Detection',
		  publishDate: 'Dec 2023',
		  tags: 'XGBoost / GAN / Auto-encoders / SDR / ZigBee',
		},
		projectInfo: {
		  description:
			'This project explored penetration testing and real-time intrusion detection in IoT environments using machine learning. It combined hardware security testing with AI-driven anomaly detection techniques.',
		  technologies: ['XGBoost', 'GAN', 'Auto-encoders', 'SDR', 'ZigBee', 'Bluetooth', 'Python'],
		  challenges: [
			'Performed penetration testing on IoT devices using SDR, ZigBee, and Bluetooth hacking tools.',
			'Built anomaly detection models using Auto-encoders, GANs, and XGBoost for real-time threat recognition.',
			'Simulated attacks and evaluated the system’s performance under multiple intrusion scenarios.',
			'Documented findings and submitted results as part of an advanced cybersecurity directed study.',
		  ],
		  companyInfo: [
			{ title: 'Client/Company', details: 'Directed Study (EWU - Cybersecurity)' },
			{ title: 'Role', details: 'Security Analyst / ML Engineer' },
			{ title: 'Website', details: 'https://example.com/iotsecurity' },
			{ title: 'Contact', details: 'security@ml-iot.org' },
		  ],
		},
	  },

	  
	// Project 6

	{
		id: 6,
		title: 'Heat Stress System',
		category: ['AI/ML', 'Embedded Systems'],
		images: [WebImage2, WebImage1, MobileImage1], // example images
		ProjectHeader: {
			title: 'Grapevine Heat Stress Detection with STM32',
			publishDate: 'Aug 2023',
			tags: 'STM32 / OpenMV / FLIR / TFLite / CNN',
		},
		projectInfo: {
			description:
			'Developed a low-power embedded system using RGB and thermal cameras to predict and monitor heat stress in grapevines. The system was optimized for energy efficiency and precision in field conditions.',
			technologies: ['STM32', 'OpenMV', 'FLIR', 'TensorFlow Lite', 'CNN', 'Python'],
			challenges: [
			'Built a thermal-RGB fusion system using OpenMV and FLIR cameras for accurate heat detection.',
			'Migrated from Raspberry Pi to STM32 for lower power consumption and faster inference times.',
			'Trained CNN models using TensorFlow Lite to detect plant heat stress based on temperature patterns.',
			'Designed and tested the system in real grapevine environments under varying climate conditions.',
			],
			companyInfo: [
			{ title: 'Client/Company', details: 'AgAID Internship - Washington State University' },
			{ title: 'Role', details: 'Embedded Systems Research Intern' },
			{ title: 'Website', details: 'https://example.com/thermal-rgb' },
			{ title: 'Contact', details: 'agtech@grapestresslab.edu' },
			],
		},
	},


	// Project 7

	{
		id: 7,
		title: 'Robotic Arm Automation',
		category: ['Industial IoT', 'Embedded Systems', 'Robotics'],
		images: [WebImage2, WebImage1, MobileImage1], // example images
		ProjectHeader: {
		  title: 'PLC Programmed Package Sorting Arm',
		  publishDate: 'Jul 2022',
		  tags: 'PLC / Ladder Logic / IoT Integration',
		},
		projectInfo: {
		  description:
			'This project involved designing and programming a robotic arm prototype for automating package sorting tasks in an industrial setting. The system was built using PLCs with IoT-ready capabilities.',
		  technologies: ['PLC', 'Ladder Logic', 'IoT', 'Automation Studio'],
		  challenges: [
			'Developed ladder logic programs to control the robotic arm’s movements based on input from sensors.',
			'Integrated IoT modules for remote monitoring of arm status and telemetry.',
			'Simulated real-time package detection and sorting using proximity and weight sensors.',
			'Improved sorting accuracy by optimizing actuator timings and feedback loops.',
		  ],
		  companyInfo: [
			{ title: 'Client/Company', details: 'Industrial Automation Internship' },
			{ title: 'Role', details: 'Automation Engineer Intern' },
			{ title: 'Website', details: 'https://example.com/robotic-arm' },
			{ title: 'Contact', details: 'automation@smartindustries.io' },
		  ],
		},
	  },
	  
];
