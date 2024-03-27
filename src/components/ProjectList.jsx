import styled from "styled-components";
import SingleProject from "./SingleProject";
import { desktop, tablet } from "../styles/breakpoints";
import projects from "../data/projects.json";

const ContainerStyles = styled.section`
  margin-top: 5rem;
  padding: 0 1rem;
  @media (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  @media (min-width: ${desktop}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 5rem 3rem;
  }
`;
const LabelStyles = styled.h4`
  font-weight: 600;
  font-size: 3rem;
  margin-top: 3rem;
  text-align: center;

  @media (min-width: ${tablet}) {
    grid-column: span 2;
  }
  @media (min-width: ${desktop}) {
    grid-column: span 3;
  }
`;

export default function ProjectList() {
  return (
    <ContainerStyles>
      <LabelStyles>Explore some projects</LabelStyles>
      {projects.map((project, index) => {
        return (
          <SingleProject
            key={index}
            title={project.title}
            logo={project.logo}
            text={project.text}
            slug={project.slug}
          />
        );
      })}
    </ContainerStyles>
  );
}
