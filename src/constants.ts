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
    category: 'Websites',
    title: 'Corporate Website & LMS',
    company: 'TalentInsight',
    description: 'A comprehensive corporate platform with integrated Learning Management System.',
    fullDescription: 'Designed and developed a scalable corporate website that serves as a central hub for TalentInsight. The project included a custom LMS solution for employee training, featuring course management, progress tracking, and interactive quizzes. The platform also integrates with internal CRM tools for seamless data flow.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'SCSS'],
    role: 'Lead Developer',
    images: ['/blue-element.png'],
    websiteUrl: 'https://talentinsight.com',
    githubUrl: 'https://github.com/username/talentinsight',
  },
  {
    category: 'Websites',
    title: 'E-commerce Platform',
    company: 'Noer Agency',
    description: 'High-performance online store with custom checkout flows.',
    fullDescription: 'Built a robust e-commerce solution focusing on conversion optimization and speed. Implemented a custom checkout process, integrated multiple payment gateways, and developed a real-time inventory management system. Key focus was on mobile responsiveness and SEO performance.',
    technologies: ['Vue 3', 'Pinia', 'Firebase', 'Stripe API'],
    role: 'Frontend Developer',
    images: ['/blue-element.png'],
    websiteUrl: 'https://shop.noeragency.com',
    githubUrl: 'https://github.com/username/noer-shop',
  },
  {
    category: 'UI / UX',
    title: 'Finance Dashboard',
    company: 'FinTech Corp',
    description: 'User-centered design for complex financial data visualization.',
    fullDescription: 'Redesigned a legacy financial dashboard to improve user experience and data readability. Created a comprehensive design system, high-fidelity prototypes, and conducted user testing to validate the new interface. The result was a 40% increase in user efficiency.',
    technologies: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    role: 'UI/UX Designer',
    images: ['/blue-element.png'],
    websiteUrl: 'https://fintech.com/dashboard',
    githubUrl: null,
  },
  {
    category: 'UI / UX',
    title: 'Travel App Concept',
    company: 'Personal Project',
    description: 'Mobile-first travel planning application with social features.',
    fullDescription: 'Conceptualized and designed a mobile application for social travel planning. The project involved deep user research, persona creation, and the design of a vibrant, engaging interface that encourages social interaction and itinerary sharing.',
    technologies: ['Figma', 'Mobile Design', 'Interaction Design'],
    role: 'Product Designer',
    images: ['/blue-element.png'],
    websiteUrl: null,
    githubUrl: 'https://github.com/username/travel-ui',
  },
  {
    category: 'Bots',
    title: 'Customer Support Bot',
    company: 'RetailChain',
    description: 'AI-powered Telegram bot for automated customer inquiries.',
    fullDescription: 'Developed an intelligent telegram bot to handle common customer support queries, reducing support ticket volume by 30%. The bot uses natural language processing to understand user intent and provides instant answers or routes complex issues to human agents.',
    technologies: ['Python', 'Telegram API', 'NLP', 'Docker'],
    role: 'Backend Developer',
    images: ['/blue-element.png'],
    websiteUrl: 'https://t.me/retail_support_bot',
    githubUrl: 'https://github.com/username/retail-bot',
  },
  {
    category: 'Bots',
    title: 'Crypto Price Tracker',
    company: 'Freelance',
    description: 'Real-time cryptocurrency price alerts and portfolio tracking.',
    fullDescription: 'Created a Telegram bot for tracking cryptocurrency prices in real-time. Users can set custom alerts, track their portfolio value, and receive daily market summaries. Built with a focus on low latency and high reliability.',
    technologies: ['Node.js', 'WebSockets', 'Telegram API', 'Redis'],
    role: 'Full Stack Developer',
    images: ['/blue-element.png'],
    websiteUrl: 'https://t.me/crypto_tracker_bot',
    githubUrl: 'https://github.com/username/crypto-bot',
  },
];
