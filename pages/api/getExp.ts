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
