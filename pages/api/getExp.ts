interface WorkExperience {
  id: number;
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: { [key: string]: string };
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/data-exp');
  const data: WorkExperience[] = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
};
