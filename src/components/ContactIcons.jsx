import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";
import { desktop } from "../styles/breakpoints";

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

export default function ContactIcons() {
  return (
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
  );
}
