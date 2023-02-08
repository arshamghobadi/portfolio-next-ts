interface Data {
  id: number;
  name: string;
  progress: number;
}

export const fetchData = async () => {
  const res = await fetch('http://localhost:4000/data');
  const data: Data[] = await res.json();
  return data;
};
