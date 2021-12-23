import useSWR from "swr";
import { FC, useEffect, useState } from "react";

const API = "http://localhost:5000/projects";

const getData = async () => {
  const response = await fetch(API);
  return await response.json();
};

interface IProject {
  projectId: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  files: string[];
}

const FeedPage: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { data } = useSWR(API, getData);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <div>
      {projects &&
        projects.map(({ projectId, title, category, description, tags }) => (
          <div key={projectId}>
            {title} - {category} - {description} - {tags}
          </div>
        ))}
    </div>
  );
};

export default FeedPage;
