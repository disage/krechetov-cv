export const skillsData = [
  {
    area: 'Programming',
    type: 'Frontend',
    description: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Vue 2-3',
      'React',
      'VueX',
      'Pinia',
      'Jest',
      'Quasar',
      'StoryBook',
      'Handlebars',
      'A11y',
      'SEO',
    ],
  },
  {
    area: '',
    type: 'Backend',
    description: ['Node JS', 'Python', 'SQL', 'Nest JS', 'Prisma', 'Databases', 'Firebase'],
  },
  {
    area: '',
    type: 'Tools & Platforms',
    description: ['AWS', 'GitHub', 'Jira', 'Moodle', 'Wordpress', 'Docker'],
  },
  {
    area: 'Design',
    type: 'UI/UX',
    description: [
      'Web & Mobile Interfaces',
      'Wireframes',
      'Prototypes',
      'Design Systems',
      'User Flows',
    ],
  },
  {
    area: '',
    type: 'Graphic Design',
    description: ['Logos', 'Branding', 'Print Design', 'Social Media Assets', 'Presentations'],
  },
  {
    area: '',
    type: 'Tools',
    description: ['Figma', 'Canva', 'Photoshop', 'Lottielab', 'PowerPoint'],
  },
  {
    area: 'Languages',
    type: 'Native',
    description: ['Ukrainian', 'Russian'],
  },
  {
    area: '',
    type: 'Working proficiency',
    description: ['English', 'German'],
  },
  {
    area: 'Soft Skills',
    type: '',
    description: [
      'Effective Communication',
      'Cross-Functional Collaboration',
      'Feedback Handling',
      'Agile Mindset',
      'Remote Work',
      'Discipline',
      'Continuous Learning',
    ],
  },
];

export const servicesData = [
  {
    area: 'Web Development',
    type: 'Full Cycle',
    description: ['Frontend & Backend development', 'Performance optimization', 'A11y compliance'],
  },
  {
    area: 'UI/UX Design',
    type: 'Product Design',
    description: ['Prototypes', 'Wireframes', 'Design Systems', 'User Testing'],
  },
  {
    area: 'Branding',
    type: 'Identity',
    description: ['Logo design', 'Brand guidelines', 'Marketing materials'],
  },
  {
    area: 'Consulting',
    type: 'Strategy',
    description: ['Product roadmap', 'Technical audit', 'Team mentoring'],
  },
];

export const experienceData = [
  {
    company: 'TalentInsight',
    position: 'Web Developer',
    period: 'Jun 2025 - Now',
    description: [
      'Built and maintained a corporate website with LMS and automation features. Developed an internal CRM with automated workflows and invoicing using AWS serverless architecture.',
    ],
    tags: ['WEB Dev', 'CRM', 'Design'],
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: 'Dec 2023 - Apr 2025',
    description: [
      'Developed business websites and web applications from concept to deployment. Built Telegram bots with Python and implemented SEO strategies to improve online visibility.',
    ],
    tags: ['WEB Dev', 'SEO', 'Bots', 'Design'],
  },
  {
    company: 'Noer Agency',
    position: 'Frontend Developer',
    period: 'Nov 2021 - Sep 2023',
    description: [
      'Built scalable LMS solutions and contributed to a large enterprise information platform with high performance and reliability requirements. Expanded a Storybook component library and implemented accessibility standards',
    ],
    tags: ['WEB Dev'],
  },
];

export const educationData = [
  {
    institution: 'KROK University',
    degree: 'Junior Specialist Degree in Software Engineering',
    period: '2017 - 2021',
    description: ['Specialized in development of web applications and databases.'],
    tags: ['Kyiv, Ukraine'],
  },
];

export const projectsData = [
  {
    categories: ['Websites'],
    title: 'Landing Page',
    company: 'ZonArt',
    description:
      'ZON designs modern modular houses with smart architecture, fast delivery, and full customization.',
    fullDescription:
      'Developed a landing page for a modular house company, showcasing their innovative designs and services. The site features a clean, modern design with interactive elements to engage visitors and drive conversions. Implemented responsive design to ensure optimal viewing across all devices.',
    technologies: ['WordPress'],
    role: 'Lead Developer',
    images: ['/krechetov-cv-2025/project-zonArt.png', '/krechetov-cv-2025/blue-element.png'],
    websiteUrl: 'https://zon-group.com/',
  },
  {
    categories: ['Websites', 'UI / UX'],
    title: 'Corporate website',
    company: 'UmzugsProfi',
    description: 'High-performance online store with custom checkout flows.',
    fullDescription:
      'Built a robust e-commerce solution focusing on conversion optimization and speed. Implemented a custom checkout process, integrated multiple payment gateways, and developed a real-time inventory management system. Key focus was on mobile responsiveness and SEO performance.',
    technologies: ['WordPress', 'SEO'],
    role: 'Lead Developer, Designer',
    images: [
      '/krechetov-cv-2025/projects/umzugsprofi/umzug1.jpeg',
      '/krechetov-cv-2025/projects/umzugsprofi/umzug2.jpeg',
      '/krechetov-cv-2025/projects/umzugsprofi/umzug3.jpeg',
      '/krechetov-cv-2025/projects/umzugsprofi/umzug4.jpeg',
      '/krechetov-cv-2025/projects/umzugsprofi/umzug5.jpeg',
    ],
    websiteUrl: 'https://umzugsprofi.net/',
  },
  {
    categories: ['Websites'],
    title: 'Orders CRM',
    company: 'TalentInsight',
    description: 'High-performance CRM  with custom flows',
    fullDescription:
      'Built a robust e-commerce solution focusing on conversion optimization and speed. Implemented a custom checkout process, integrated multiple payment gateways, and developed a real-time inventory management system. Key focus was on mobile responsiveness and SEO performance.',
    technologies: ['React', 'TS', 'AWS'],
    role: 'FullStack Developer',
    images: ['/krechetov-cv-2025/blue-element.png'],
    githubUrl: 'https://github.com/username/noer-shop',
  },
  {
    categories: ['Bots'],
    title: 'Management Bot',
    company: 'TCC',
    description: 'AI-powered Telegram bot for automated customer inquiries.',
    fullDescription:
      'Developed an intelligent telegram bot to handle common customer support queries, reducing support ticket volume by 30%. The bot uses natural language processing to understand user intent and provides instant answers or routes complex issues to human agents.',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    role: 'Backend Developer',
    images: ['/krechetov-cv-2025/blue-element.png'],
  },
  {
    categories: ['Bots'],
    title: 'Random Restaurant Picker',
    company: 'Restomania',
    description: 'Real-time cryptocurrency price alerts and portfolio tracking.',
    fullDescription:
      'Created a Telegram bot for tracking cryptocurrency prices in real-time. Users can set custom alerts, track their portfolio value, and receive daily market summaries. Built with a focus on low latency and high reliability.',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    role: 'Backend Developer',
    images: ['/krechetov-cv-2025/blue-element.png'],
    websiteUrl: 'https://t.me/randomRestoBot',
  },
];
