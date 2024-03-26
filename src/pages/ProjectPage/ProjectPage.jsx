/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import { desktop } from "../../styles/breakpoints";

const PageMargin = styled.div`
  margin: 3rem 1rem;
  @media (min-width: ${desktop}) {
    margin: 3rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const TitleStyles = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
`;

const IconStyles = styled.img`
  width: 4rem;
`;
const DividerStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  margin: 3rem 1rem;
  @media (min-width: ${desktop}) {
    margin: 3rem 0;
  }
`;

const DescriptionContainer = styled.div`
  @media (min-width: ${desktop}) {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
`;
const TechStyles = styled.div`
  @media (min-width: ${desktop}) {
    padding-left: 8rem;
  }
`;

const LinkContainerStyles = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem 0;
`;

const LinkStyles = styled.a`
  padding: 0.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.background};
  transition: border-bottom 1s ease;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  @media (min-width: ${desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageStyles = styled.img`
  width: 100%;
  height: auto;
  grid-column: span ${(props) => (props.width === "desktop" ? "2" : "1")};
`;

export default function ProjectPage() {
  const { slug } = useParams();
  const [selectedProject, setSelectedProject] = useState(undefined);

  useEffect(() => {
    setSelectedProject(projects.find((project) => project.slug === slug));
  }, [slug]);

  if (selectedProject !== undefined) {
    return (
      <>
        <PageMargin>
          <TitleContainer>
            <TitleStyles>{selectedProject.title}</TitleStyles>
            <IconStyles src={selectedProject.logo} alt="Website logo" />
          </TitleContainer>
          <DividerStyles />
          <DescriptionContainer>
            <div>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.work}</p>
            </div>
            <TechStyles>
              <p>Tech: </p>
              <ul>
                {selectedProject.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </TechStyles>
          </DescriptionContainer>
          <LinkContainerStyles>
            <FaArrowRight />
            <LinkStyles href={`${selectedProject.url}`}>
              Check it out!
            </LinkStyles>
          </LinkContainerStyles>

          <ImageContainer>
            {selectedProject.images.map((image, index) => (
              <ImageStyles
                key={index}
                width={index === 0 || index === 1 ? "mobile" : "desktop"}
                src={`${image}`}
              />
            ))}
          </ImageContainer>
        </PageMargin>
        <Footer />
      </>
    );
  }
  if (selectedProject === undefined) {
    return (
      <>
        <PageMargin>
          <TitleStyles>Project not found</TitleStyles>
          <LinkStyles onClick={() => setSelectedProject(projects[0])}>
            Check out another project
          </LinkStyles>
        </PageMargin>
        <Footer />
      </>
    );
  }
}
