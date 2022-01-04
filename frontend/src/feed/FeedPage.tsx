import useSWR from "swr";
import { FC, useEffect, useState } from "react";
import FeedCard from "./FeedCard";

const API = "http://localhost:5000/projects";

const getData = async () => {
  const response = await fetch(API);
  return await response.json();
};

export interface IProject {
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
    <div className="flex flex-col sm:flex-row justify-evenly">
      {projects &&
        projects.map((project) => (
          <FeedCard
            projectId={project.projectId}
            title={project.title}
            category={project.category}
            description={project.description}
            tags={project.tags}
            files={project.files}
          ></FeedCard>
        ))}
    </div>
  );
};

export default FeedPage;
