export interface Skill {
  name: string;
  level: 'primary' | 'secondary';
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface SkillCategory {
  category: string;
  groups: SkillGroup[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming',
    groups: [
      {
        name: 'Frontend',
        skills: [
          { name: 'React', level: 'primary' },
          { name: 'TypeScript', level: 'primary' },
          { name: 'Next.js', level: 'primary' },
          { name: 'Vue', level: 'primary' },
          { name: 'JavaScript', level: 'primary' },
          { name: 'HTML', level: 'primary' },
          { name: 'S/CSS', level: 'primary' },
          { name: 'Quasar', level: 'secondary' },
          { name: 'Storybook', level: 'secondary' },
          { name: 'Tailwind', level: 'secondary' },
          { name: 'MUI', level: 'secondary' },
        ],
      },
      {
        name: 'Backend',
        skills: [
          { name: 'FastAPI', level: 'primary' },
          { name: 'Python', level: 'primary' },
          { name: 'Node.js', level: 'primary' },
          { name: 'REST API', level: 'primary' },
          { name: 'SQL', level: 'primary' },
          { name: 'PostgreSQL', level: 'primary' },
          { name: 'LangChain / LangGraph', level: 'secondary' },
          { name: 'Celery', level: 'secondary' },
          { name: 'Redis', level: 'secondary' },
        ],
      },
      {
        name: 'Infrastructure',
        skills: [
          { name: 'AWS', level: 'primary' },
          { name: 'Docker', level: 'primary' },
          { name: 'Git', level: 'primary' },
          { name: 'Lambda', level: 'secondary' },
          { name: 'DynamoDB', level: 'secondary' },
          { name: 'API Gateway', level: 'secondary' },
          { name: 'Cognito', level: 'secondary' },
          { name: 'EC2', level: 'secondary' },
        ],
      },
    ],
  },
  {
    category: 'Design & Tools',
    groups: [
      {
        name: 'UI/UX',
        skills: [
          { name: 'Web & Mobile Interfaces', level: 'primary' },
          { name: 'Wireframes', level: 'primary' },
          { name: 'Prototypes', level: 'primary' },
          { name: 'Design Systems', level: 'primary' },
          { name: 'User Flows', level: 'secondary' },
        ],
      },
      {
        name: 'Tools',
        skills: [
          { name: 'Figma', level: 'primary' },
          { name: 'Jira', level: 'primary' },
          { name: 'WordPress', level: 'secondary' },
        ],
      },
    ],
  },
  {
    category: 'Languages',
    groups: [
      {
        name: 'Native',
        skills: [
          { name: 'Ukrainian', level: 'primary' },
          { name: 'Russian', level: 'primary' },
        ],
      },
      {
        name: 'Fluent',
        skills: [
          { name: 'German — C1', level: 'primary' },
          { name: 'English — B2', level: 'primary' },
        ],
      },
      {
        name: 'Basic',
        skills: [{ name: 'Polish — A2', level: 'secondary' }],
      },
    ],
  },
  {
    category: 'Soft Skills',
    groups: [
      {
        name: '',
        skills: [
          { name: 'Analytical Thinking', level: 'primary' },
          { name: 'Independent Work', level: 'primary' },
          { name: 'Remote Teamwork', level: 'primary' },
          { name: 'Quick Learner', level: 'primary' },
        ],
      },
    ],
  },
];

export const servicesData = [
  {
    area: 'Web Development',
    type: 'Full Cycle',
    description: [
      'Frontend & Backend development',
      'Responsive websites & landing pages',
      'CRM & internal tools',
      'Performance optimization',
    ],
  },
  {
    area: 'Cloud & Infrastructure',
    type: 'AWS',
    description: [
      'Serverless architecture (Lambda, API Gateway)',
      'Database setup (DynamoDB, PostgreSQL)',
      'Authentication (Cognito)',
      'Docker containerization',
    ],
  },
  {
    area: 'UI/UX Design',
    type: 'Product Design',
    description: ['Prototypes & Wireframes', 'Design Systems', 'Web & Mobile Interfaces'],
  },
  {
    area: 'Automation',
    type: 'Bots & Integrations',
    description: [
      'Telegram bots',
      'CRM integrations',
      'AI-powered data pipelines',
      'Workflow automation',
    ],
  },
];

export const experienceData = [
  {
    company: 'Aplora',
    position: 'Full-Stack Developer',
    period: 'Feb 2026 - Now',
    description: [
      'Building a full-stack AI-powered call analysis platform with React, FastAPI, LangGraph, and PostgreSQL. Interactive dashboards for funnel analytics and call evaluation. Containerized infrastructure with Docker Compose.',
    ],
    tags: ['React', 'FastAPI', 'AI', 'Docker'],
  },
  {
    company: 'TalentInsight',
    position: 'Web Developer',
    period: 'Jul 2025 - Now',
    description: [
      'Developed an internal CRM with React, TypeScript, and Tailwind — RBAC system with role-based data filtering. Designed and built a serverless AWS backend (Lambda, DynamoDB, API Gateway, Cognito). Sole developer responsible for the entire technical implementation.',
    ],
    tags: ['React', 'AWS', 'CRM'],
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: 'May 2024 - Jan 2025',
    description: [
      'Delivered client projects from concept to deployment — websites, landing pages, and custom web applications. Built Telegram bots for automating internal client processes, reducing manual effort by ~60%.',
    ],
    tags: ['WEB Dev', 'Bots', 'SEO'],
  },
  {
    company: 'Noer Agency',
    position: 'Frontend Developer',
    period: 'Nov 2021 - Sep 2023',
    description: [
      'Developed a SPA news & analytics platform with Vue, Vuex, and TypeScript in an international Scrum team. Built custom LMS modules on Adobe Captivate Prime API using Quasar Framework for 3+ tenants. Maintained and extended a Storybook component library.',
    ],
    tags: ['Vue', 'TypeScript', 'LMS'],
  },
];

export const educationData = [
  {
    institution: 'Wyższa Szkoła Nauk Społecznych i Bezpieczeństwa',
    degree: 'Bachelor`s in Internal Security (thesis pending)',
    period: '2022 - 2025',
    description: ['Internal Security'],
    tags: ['Łódź, Poland'],
  },
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
    company: 'ZonArt 🇬🇧',
    description:
      'ZON designs modern modular houses with smart architecture, fast delivery, and full customization.',
    fullDescription:
      'Developed a landing page for a modular house company, showcasing their innovative designs and services. The site features a clean, modern design with interactive elements to engage visitors and drive conversions. Implemented responsive design to ensure optimal viewing across all devices.',
    technologies: ['WordPress'],
    role: 'Lead Developer',
    images: [
      '/krechetov-cv/projects/zon/zon1.jpg',
      '/krechetov-cv/projects/zon/zon2.jpg',
      '/krechetov-cv/projects/zon/zon3.jpg',
      '/krechetov-cv/projects/zon/zon4.jpg',
    ],
    websiteUrl: 'https://zon-group.com/invest/',
  },
  {
    categories: ['Websites', 'UI / UX'],
    title: 'Corporate Website',
    company: 'UmzugsProfi 🇩🇪',
    description: 'High-performance online store with custom checkout flows.',
    fullDescription:
      'Built a WordPress website for a moving company, presenting their services and coverage areas. The site features a contact form for quote requests, clean layout optimized for trust and conversions, and full SEO configuration including meta tags, schema markup, and page speed optimization. Implemented responsive design for seamless browsing on all devices.',
    technologies: ['WordPress', 'SEO'],
    role: 'Lead Developer, Designer',
    images: [
      '/krechetov-cv/projects/umzugsprofi/umzug1.jpeg',
      '/krechetov-cv/projects/umzugsprofi/umzug2.jpeg',
      '/krechetov-cv/projects/umzugsprofi/umzug3.jpeg',
      '/krechetov-cv/projects/umzugsprofi/umzug4.jpeg',
      '/krechetov-cv/projects/umzugsprofi/umzug5.jpeg',
    ],
    websiteUrl: 'https://umzugsprofi.net/',
  },
  {
    categories: ['Websites'],
    title: 'Orders CRM',
    company: 'TalentInsight 🇨🇳🇩🇪',
    description: 'High-performance CRM  with custom flows',
    fullDescription:
      'TalentInsight Orders CRM — a web-based CRM for managing orders, clients, and trainers in the corporate training industry. Features include a sales analytics dashboard, session calendar, PDF invoice generation, role-based access control, and multi-currency support. Stack: React 19, TypeScript, Tailwind CSS, AWS (Cognito, API Gateway, Lambda, DynamoDB, S3), Vite',
    technologies: ['React', 'TS', 'AWS'],
    role: 'FullStack Developer',
    images: [
      '/krechetov-cv/projects/ti/ti1.jpg',
      '/krechetov-cv/projects/ti/ti2.jpg',
      '/krechetov-cv/projects/ti/ti3.jpg',
      '/krechetov-cv/projects/ti/ti4.jpg',
    ],
  },
  {
    categories: ['Bots'],
    title: 'Management Bot',
    company: 'TCC 🇺🇦',
    description: 'AI-powered Telegram bot for automated customer inquiries.',
    fullDescription:
      'Developed an intelligent telegram bot to handle common customer support queries, reducing support ticket volume by 30%. The bot uses natural language processing to understand user intent and provides instant answers or routes complex issues to human agents.',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    role: 'Backend Developer',
    images: ['/krechetov-cv/blue-element.png'],
  },
  {
    categories: ['Bots'],
    title: 'Random Restaurant Picker',
    company: 'Restomania',
    description: 'Telegram bot for discovering random restaurant',
    fullDescription:
      'Built a Telegram bot using Telethon for discovering random restaurants based on user-selected filters — region, price range, cuisine type, and rating. Features include a gamification system where users earn points through activity in a linked Telegram channel, a referral program for organic growth, built-in giveaway management for launching and running contests, and a broadcast system for sending targeted messages to users.',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    role: 'Backend Developer',
    images: ['/krechetov-cv/blue-element.png'],
    websiteUrl: 'https://t.me/randomRestoBot',
  },
];
