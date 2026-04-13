export interface Skill {
  id?: string;
  name: string;
  level: 'primary' | 'secondary';
}

export interface SkillGroup {
  id: string;
  skills: Skill[];
}

export interface SkillCategory {
  id: string;
  groups: SkillGroup[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    groups: [
      {
        id: 'frontend',
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
        id: 'backend',
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
        id: 'infrastructure',
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
    id: 'designTools',
    groups: [
      {
        id: 'uiUx',
        skills: [
          { id: 'webMobileInterfaces', name: 'Web & Mobile Interfaces', level: 'primary' },
          { id: 'wireframes', name: 'Wireframes', level: 'primary' },
          { id: 'prototypes', name: 'Prototypes', level: 'primary' },
          { id: 'designSystems', name: 'Design Systems', level: 'primary' },
          { id: 'userFlows', name: 'User Flows', level: 'secondary' },
        ],
      },
      {
        id: 'tools',
        skills: [
          { name: 'Figma', level: 'primary' },
          { name: 'Jira', level: 'primary' },
          { name: 'WordPress', level: 'secondary' },
        ],
      },
    ],
  },
  {
    id: 'languages',
    groups: [
      {
        id: 'native',
        skills: [
          { id: 'ukrainian', name: 'Ukrainian', level: 'primary' },
          { id: 'russian', name: 'Russian', level: 'primary' },
        ],
      },
      {
        id: 'fluent',
        skills: [
          { id: 'germanC1', name: 'German — C1', level: 'primary' },
          { id: 'englishB2', name: 'English — B2', level: 'primary' },
        ],
      },
      {
        id: 'basic',
        skills: [{ id: 'polishA2', name: 'Polish — A2', level: 'secondary' }],
      },
    ],
  },
  {
    id: 'softSkills',
    groups: [
      {
        id: '',
        skills: [
          { id: 'analyticalThinking', name: 'Analytical Thinking', level: 'primary' },
          { id: 'independentWork', name: 'Independent Work', level: 'primary' },
          { id: 'remoteTeamwork', name: 'Remote Teamwork', level: 'primary' },
          { id: 'quickLearner', name: 'Quick Learner', level: 'primary' },
        ],
      },
    ],
  },
];

export interface ServiceEntry {
  id: string;
}

export const servicesData: ServiceEntry[] = [
  { id: 'webDev' },
  { id: 'cloud' },
  { id: 'uiux' },
  { id: 'automation' },
];

export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  tags: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 'aplora',
    company: 'Aplora',
    period: 'Feb 2026 - {{now}}',
    tags: ['React', 'FastAPI', 'AI', 'Docker'],
  },
  {
    id: 'talentInsight',
    company: 'TalentInsight',
    period: 'Jul 2025 - {{now}}',
    tags: ['React', 'AWS', 'CRM'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    period: 'May 2024 - Jan 2025',
    tags: ['WEB Dev', 'Bots', 'SEO'],
  },
  {
    id: 'noer',
    company: 'Noer Agency',
    period: 'Nov 2021 - Sep 2023',
    tags: ['Vue', 'TypeScript', 'LMS'],
  },
];

export interface EducationEntry {
  id: string;
  institution: string;
  period: string;
}

export const educationData: EducationEntry[] = [
  {
    id: 'wsnsib',
    institution: 'Wyższa Szkoła Nauk Społecznych i Bezpieczeństwa',
    period: '2022 - 2025',
  },
  {
    id: 'krok',
    institution: 'KROK University',
    period: '2017 - 2021',
  },
];

export interface ProjectEntry {
  id: string;
  categories: string[];
  company: string;
  technologies: string[];
  images?: string[];
  websiteUrl?: string;
}

export const projectsData: ProjectEntry[] = [
  {
    id: 'zon',
    categories: ['websites'],
    company: 'ZonArt 🇬🇧',
    technologies: ['WordPress'],
    images: [
      '/krechetov-cv/projects/zon/zon1.jpg',
      '/krechetov-cv/projects/zon/zon2.jpg',
      '/krechetov-cv/projects/zon/zon3.jpg',
      '/krechetov-cv/projects/zon/zon4.jpg',
    ],
    websiteUrl: 'https://zon-group.com/invest/',
  },
  {
    id: 'umzugsprofi',
    categories: ['websites', 'ui_ux'],
    company: 'UmzugsProfi 🇩🇪',
    technologies: ['WordPress', 'SEO'],
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
    id: 'talentInsightCrm',
    categories: ['websites'],
    company: 'TalentInsight 🇨🇳🇩🇪',
    technologies: ['React', 'TS', 'AWS'],
    images: [
      '/krechetov-cv/projects/ti/ti1.jpg',
      '/krechetov-cv/projects/ti/ti2.jpg',
      '/krechetov-cv/projects/ti/ti3.jpg',
      '/krechetov-cv/projects/ti/ti4.jpg',
    ],
  },
  {
    id: 'tccBot',
    categories: ['bots'],
    company: 'TCC 🇺🇦',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    images: ['/krechetov-cv/blue-element.png'],
  },
  {
    id: 'restomania',
    categories: ['bots'],
    company: 'Restomania',
    technologies: ['Python', 'Telegram API', 'Telethon', 'SQLite'],
    images: ['/krechetov-cv/blue-element.png'],
    websiteUrl: 'https://t.me/randomRestoBot',
  },
];
