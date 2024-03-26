/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Footer from "../../components/Footer";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { desktop } from "../../styles/breakpoints";

const PageMargin = styled.div`
  margin: 3rem 1rem;
  @media (min-width: ${desktop}) {
    margin: 3rem 4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  align-items: center;
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
  margin: 3rem 0;
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

const LinkStyles = styled(Link)`
  font-weight: 600;
  padding: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.background};
  transition: border-bottom 1s ease;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.text};
    cursor: pointer;
  }
  ${(props) =>
    props.disabled &&
    css`
      color: grey;
      font-weight: 200;
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.background};
        cursor: not-allowed;
      }
    `}
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

const ProjectNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export default function ProjectPage() {
  const { slug } = useParams();
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [index, setIndex] = useState(undefined);

  window.scrollTo({
    top: 450,
    behavior: "smooth",
  });

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug === slug);
    setIndex(projects.indexOf(foundProject)); //Used for the prev/next project
    setSelectedProject(foundProject);
  }, [slug]);

  if (selectedProject !== undefined && index !== undefined) {
    return (
      <>
        <PageMargin>
          <Link to="/">
            <FaArrowLeft />
          </Link>
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
            <LinkStyles to={`${selectedProject.url}`}>Check it out!</LinkStyles>
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
          <ProjectNavContainer>
            <LinkContainerStyles>
              <FaArrowLeft />
              <LinkStyles
                disabled={
                  `${projects[index - 1]?.slug}` === "undefined" ? true : false
                }
                to={
                  `${projects[index - 1]?.slug}` === "undefined"
                    ? "/"
                    : `/projects/${projects[index - 1]?.slug}`
                }
              >
                Previous project{" "}
              </LinkStyles>
            </LinkContainerStyles>
            <LinkContainerStyles>
              <LinkStyles
                disabled={
                  `${projects[index + 1]?.slug}` === "undefined" ? true : false
                }
                to={
                  `${projects[index + 1]?.slug}` === "undefined"
                    ? "/"
                    : `/projects/${projects[index + 1]?.slug}`
                }
              >
                Next project
              </LinkStyles>
              <FaArrowRight />
            </LinkContainerStyles>
          </ProjectNavContainer>
        </PageMargin>
        <Footer />
      </>
    );
  }
  if (selectedProject === undefined || index === undefined) {
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
