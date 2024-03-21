/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

import projects from "../../data/projects.json";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PageMargin = styled.div`
  margin: 3rem 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const TitleStyles = styled.h2`
  font-weight: 600;
`;

const IconStyles = styled.img`
  width: 4rem;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const ImageStyles = styled.img`
  width: 100%;
  height: auto;
  grid-column: span ${(props) => (props.width === "desktop" ? "2" : "1")};
`;

export default function ProjectPage() {
  const { slug } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setSelectedProject(projects.find((project) => project.slug === slug));
  }, [slug]);

  if (selectedProject !== null) {
    return (
      <PageMargin>
        <TitleContainer>
          <TitleStyles>{selectedProject.title}</TitleStyles>
          <IconStyles src={selectedProject.logo} alt="Website logo" />
        </TitleContainer>
        <p>{selectedProject.description}</p>
        <p>{selectedProject.work}</p>
        <p>Tech: </p>
        <ul>
          {selectedProject.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <a href={`${selectedProject.url}`}>Check it out!</a>

        <ImageContainer>
          {selectedProject.images.map((image, index) => (
            <ImageStyles
              key={index}
              width={index === 0 || index === 1 ? "mobile" : "desktop"}
              src={`/src/assets/images${image}`}
            />
          ))}
        </ImageContainer>
      </PageMargin>
    );
  }
}
