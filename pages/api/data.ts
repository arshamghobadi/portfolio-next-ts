interface Data {
  id: number;
  name: string;
  progress: number;
}

export const fetchData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data: Data[] = await res.json();
  return data;
};
