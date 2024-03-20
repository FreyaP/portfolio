/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import projects from "../../data/projects.json";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const { slug } = useParams();
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    setSelectedProject(projects.find((project) => project.slug === slug));
  }, [slug]);

  return (
    <>
      <Header />
      <h2>{selectedProject.title}</h2>
      <p>{selectedProject.description}</p>
    </>
  );
}
