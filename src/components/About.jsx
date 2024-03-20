import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconContainerStyles = styled.section`
  display: flex;
  padding: 2rem;
  width: 100%;
  justify-content: space-around;
  font-size: 2rem;
`;
const IconLinkStyles = styled.a`
  color: ${(props) => props.theme.text};
  transition: transform 1s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    cursor: pointer;
  }
`;
const TaglineStyles = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  padding-left: 1rem;
`;

const LabelStyles = styled.h4`
  font-weight: 400;
  margin-top: 3rem;
  text-align: center;
  display: none;
`;
const DividerStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default function About() {
  return (
    <Container>
      <LabelStyles>_aboutMe</LabelStyles>
      <IconContainerStyles>
        <IconLinkStyles
          href="https://github.com/FreyaP/"
          target="_blank"
          rel="noopener nnoreferrer"
        >
          <FaGithub />{" "}
        </IconLinkStyles>
        <IconLinkStyles
          href="mailto:freyapearse@gmail.com"
          target="_blank"
          rel="noopener nnoreferrer"
        >
          <IoIosMail />{" "}
        </IconLinkStyles>
        <IconLinkStyles
          href="https://www.linkedin.com/in/freyapearse/"
          target="_blank"
          rel="noopener nnoreferrer"
        >
          <FaLinkedin />
        </IconLinkStyles>
      </IconContainerStyles>
      <DividerStyles />
      <TaglineStyles>ABOUT ME TAGLINE... MAYBE A SENTENCE.</TaglineStyles>
      <DividerStyles />
    </Container>
  );
}
