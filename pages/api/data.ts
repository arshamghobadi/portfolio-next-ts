// import type { NextApiRequest, NextApiResponse } from 'next';
// import { SkillData } from '../../typings';
interface Data {
  id: number;
  name: string;
  progress: number;
}

// type Data = {
//   data: SkillData[];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const response = await fetch(`${process.env.BASE_URL}/data`);
//   console.log(response);

//   const json = await response.json();
//   const data: SkillData[] = json.data;
//   // const data: SkillData[] = await fetch(`${process.env.BASE_URL}/data`);
//   res.status(200).json({ data });
// }

export const fetchData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data: Data[] = await res.json();
  return data;
};
