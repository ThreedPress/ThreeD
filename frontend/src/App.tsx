import useSWR from "swr";
import { Header } from "./components/layout/Header";
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

const App: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { data } = useSWR(API, getData);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <div className="App" data-testid="app-root">
      <Header />
      {projects &&
        projects.map(
          ({ projectId, title, category, description, tags, files }) => (
            <div key={projectId}>
              {title} - {category} - {description} - {tags} - {files}
            </div>
          )
        )}
    </div>
  );
};

export default App;
