interface Db {
  id: number;
}
export interface SkillData extends Db {
  name: string;
  progress: number;
}
export interface ExperienceData extends Db {
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: string[];
}
export interface ProjectsData extends Db {
  title: string;
  demo: string;
  sourceCode: string;
  discription: string;
}
