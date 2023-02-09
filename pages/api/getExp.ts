// import type { NextApiRequest, NextApiResponse } from 'next';
// import { ExperienceData } from '../../typings';
// interface Data {
//   id: number;
//   name: string;
//   progress: number;
// }

// type Data = {
//   experiences: ExperienceData[];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const response = await fetch(`process.env.BASE_URL/data-exp`);
//   const json = await response.json();
//   const experiences: ExperienceData[] = json.data;
//   // const data: SkillData[] = await fetch(`process.env.BASE_URL/data`);
//   res.status(200).json({ experiences });
// }

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: string[];
}

export const fetchDataExp = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data-exp`);
  const dataExp: WorkExperience[] = await res.json();
  return dataExp;
};
