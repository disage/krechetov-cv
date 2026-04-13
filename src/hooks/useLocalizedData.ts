import { useTranslation } from 'react-i18next';
import {
  experienceData,
  educationData,
  projectsData,
  servicesData,
  skillsData,
  type Skill,
} from '../constants';

export interface LocalizedExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  tags: string[];
}

export function useLocalizedExperience(): LocalizedExperience[] {
  const { t } = useTranslation();
  const now = t('experience.now');
  return experienceData.map((e) => ({
    id: e.id,
    company: e.company,
    tags: e.tags,
    position: t(`experience.${e.id}.position`),
    description: t(`experience.${e.id}.description`, { returnObjects: true }) as string[],
    period: e.period.replace('{{now}}', now),
  }));
}

export interface LocalizedEducation {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string[];
  tags: string[];
}

export function useLocalizedEducation(): LocalizedEducation[] {
  const { t } = useTranslation();
  return educationData.map((e) => ({
    id: e.id,
    institution: e.institution,
    period: e.period,
    degree: t(`education.${e.id}.degree`),
    description: t(`education.${e.id}.description`, { returnObjects: true }) as string[],
    tags: [t(`education.${e.id}.city`)],
  }));
}

export interface LocalizedProject {
  id: string;
  categories: string[];
  company: string;
  technologies: string[];
  images?: string[];
  websiteUrl?: string;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
}

export function useLocalizedProjects(): LocalizedProject[] {
  const { t } = useTranslation();
  return projectsData.map((p) => ({
    id: p.id,
    categories: p.categories,
    company: p.company,
    technologies: p.technologies,
    images: p.images,
    websiteUrl: p.websiteUrl,
    title: t(`projectsData.${p.id}.title`),
    description: t(`projectsData.${p.id}.description`),
    fullDescription: t(`projectsData.${p.id}.fullDescription`),
    role: t(`projectsData.${p.id}.role`),
  }));
}

export interface LocalizedService {
  id: string;
  area: string;
  type: string;
  description: string[];
}

export function useLocalizedServices(): LocalizedService[] {
  const { t } = useTranslation();
  return servicesData.map((s) => ({
    id: s.id,
    area: t(`services.${s.id}.area`),
    type: t(`services.${s.id}.type`),
    description: t(`services.${s.id}.description`, { returnObjects: true }) as string[],
  }));
}

export interface LocalizedSkill {
  name: string;
  level: 'primary' | 'secondary';
}

export interface LocalizedSkillGroup {
  id: string;
  name: string;
  skills: LocalizedSkill[];
}

export interface LocalizedSkillCategory {
  id: string;
  category: string;
  groups: LocalizedSkillGroup[];
}

export function useLocalizedSkills(): LocalizedSkillCategory[] {
  const { t } = useTranslation();
  return skillsData.map((cat) => ({
    id: cat.id,
    category: t(`skills.categories.${cat.id}`),
    groups: cat.groups.map((group) => ({
      id: group.id,
      name: group.id ? t(`skills.groups.${group.id}`) : '',
      skills: group.skills.map((skill: Skill) => ({
        name: skill.id ? t(`skills.items.${skill.id}`) : skill.name,
        level: skill.level,
      })),
    })),
  }));
}
