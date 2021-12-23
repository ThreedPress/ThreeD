import useSWR from "swr";
import { Header } from "./components/layout/Header";

const projectsEndpoint = "http://localhost:5000/projects";
const getData = async () => {
  const response = await fetch(projectsEndpoint);
  return await response.json();
};
const TodoApp = () => {
  const { data: projects } = useSWR(projectsEndpoint, getData);

  return (
    <div className="App">
          <Header/>
      {projects &&
        projects.map((project) => (
          <div key={project.projectId}>
            {project.title} - {project.category} - {project.description} -{" "}
            {project.tags} - {project.files}{" "}
          </div>
        ))}
    </div>
  );
};
export default TodoApp;
