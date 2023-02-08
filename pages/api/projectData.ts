interface projectsData {
  id: string;
  title: string;
  demo: string;
  SourceCode: string;
  discription: string;
}

export const fetchProjectsData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/projectsData`);
  const projects: projectsData[] = await res.json();
  return projects;
};
