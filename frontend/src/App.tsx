import useSWR from "swr";

const projectsEndpoint = "http://localhost:5000/projects";
const getData = async () => {
  const response = await fetch(projectsEndpoint);
  return await response.json();
};
const TodoApp = () => {
  const { data: projects } = useSWR(projectsEndpoint, getData);

  return (
    <div>
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
