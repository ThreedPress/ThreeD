import React from "react";
import useSWR from "swr";
const projectsEndpoint = "http://localhost:3000/projects";
const getData = async () => {
  const response = await fetch(projectsEndpoint);
  return await response.json();
};
const ProjectFeed = () => {
  const { data: projects } = useSWR(projectsEndpoint, getData);
  console.log(projects);

  return (
    <div className="App">
      {projects.map((projects) => (
        <div key={projects.projectId}>{projects.title}</div>
      ))}
    </div>
  );
};
export default ProjectFeed;
