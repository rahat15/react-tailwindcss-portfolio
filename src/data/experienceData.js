const experienceData = [
  {
    company: 'Washington State University, under AgAID',
    location: 'Prosser, WA, USA',
    logo: '/images/experience/wsu-agaid.png',
    roles: [
      {
        id: 1,
        title: 'Software Developer Intern (Research)',
        duration: 'Jun 2024 - Sept 2024',
        mode: 'On-site',
        type: 'Internship',
        projects: [
          {
            title: 'Adaptive Path Planning for Warthog Robot',
            summary: 'Designed intelligent path-making for autonomous navigation within fields and orchard lanes using ROS and SLAM techniques.',
            bullets: [
              'Developed adaptive path planning for the Warthog robot using ROS, SLAM, and AMCL; improved LiDAR-based navigation.',
              'Optimized maneuverability and real-time accuracy in apple and grape orchards, tested with Gazebo and Rviz.'
            ],
            skills: ['ROS', 'SLAM', 'AMCL', 'Gazebo', 'Rviz']
          },
          {
            title: 'Low Power Thermal-RGB Imagery System for Heat Stress Management',
            summary: 'Developed a low-power system using STM32 to predict grapevine heat stress.',
            bullets: [
              'Built thermal-RGB system with OpenMV and FLIR; upgraded from Raspberry Pi to STM32 for better efficiency and lower power.',
              'Integrated TFLite and CNN models for precise heat stress prediction and detection.'
            ],
            skills: ['STM32', 'OpenMV', 'FLIR', 'TFLite', 'CNN']
          }
        ]
      }
    ]
  },
  {
    company: 'Indian Institute of Technology, under AWaDH',
    location: 'Ropar, Punjab, India',
    logo: '/images/experience/iit-awadh.png',
    roles: [
      {
        id: 2,
        title: 'Machine Learning Intern (Research)',
        duration: 'Jul 2023 - Jan 2024',
        mode: 'On-site',
        type: 'Internship',
        projects: [
          {
            title: 'Bumblebee Pollination Tracking System',
            summary: 'Led development of a bee tracking system to enhance pollination in sunflower fields.',
            bullets: [
              'Utilized YOLO V8 to build real-time detection models for tracking bumblebees using camera data.',
              'Managed project timelines, team coordination, detailed documentation and optimized tracking accuracy.'
            ],
            skills: ['YOLOv8', 'Computer Vision', 'Python']
          }
        ]
      }
    ]
  },
  {
    company: 'Terafac Technologies Pvt. Ltd.',
    location: 'Mohali, Punjab, India',
    logo: '/images/experience/terafac.png',
    roles: [
      {
        id: 3,
        title: 'Student Intern',
        duration: 'Jun 2023 - Jul 2023',
        mode: 'On-site',
        type: 'Internship',
        projects: [
          {
            title: 'Robotic Arm Automation for Package Sorting',
            summary: 'Programmed PLCs to automate a robotic arm prototype for package sorting.',
            bullets: [
              'Programmed PLCs with Ladder Logic for industrial automation, focusing on IoT integration.'
            ],
            skills: ['PLC Programming', 'Ladder Logic', 'IoT']
          }
        ]
      }
    ]
  },
  {
    company: 'ACM Student Chapter',
    location: 'Eastern Washington University',
    logo: '/images/experience/acm.png',
    roles: [
      {
        id: 4,
        title: 'President',
        duration: 'Fall 2023 - Present',
        mode: 'On-site',
        type: 'Leadership',
        projects: [
          {
            title: 'Student-Led Technical Initiatives',
            summary: 'Organized university-wide tech events and led community-building initiatives.',
            bullets: [
              'Led workshops on Machine Learning and Advanced Programming Exam (APE); organized CodeFest 2024, EWU\'s first hackathon.'
            ],
            skills: ['Leadership', 'Workshop Facilitation', 'Event Planning']
          }
        ]
      }
    ]
  },
  {
    company: 'Google Developer Group on Campus',
    location: 'Eastern Washington University',
    logo: '../images/experience/gdg.png',
    roles: [
      {
        id: 5,
        title: 'Campus Lead',
        duration: 'Fall 2024 - Present',
        mode: 'On-site',
        type: 'Leadership',
        projects: [
          {
            title: 'Tech Community Leadership & AI Outreach',
            summary: 'Expanded developer community through hands-on sessions and AI outreach.',
            bullets: [
              'Led workshops on Google technologies for ML, Deep Learning, and AI; organized hackathons to expand the developer community.'
            ],
            skills: ['Google AI', 'Community Building', 'Public Speaking']
          }
        ]
      }
    ]
  }
];

export default experienceData;
