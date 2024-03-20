import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <IconContainerStyles>
        <Link to="https://github.com/FreyaP/" target="_blank">
          <FaGithub />{" "}
        </Link>
        <Link to="mailto:freyapearse@gmail.com" target="_blank">
          <IoIosMail />{" "}
        </Link>
        <Link to="https://www.linkedin.com/in/freyapearse/" target="_blank">
          <FaLinkedin />
        </Link>
      </IconContainerStyles>
      <DividerStyles />
      <TaglineStyles>ABOUT ME TAGLINE... MAYBE A SENTENCE.</TaglineStyles>
      <LabelStyles>_aboutMe</LabelStyles>
      <DividerStyles />
    </Container>
  );
}
