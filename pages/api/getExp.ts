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
  const res = await fetch('http://localhost:4000/data-exp');
  const dataExp: WorkExperience[] = await res.json();
  return dataExp;
};
