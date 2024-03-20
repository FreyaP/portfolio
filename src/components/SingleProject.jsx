/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerStyles = styled.article`
  width: 100%;
  padding: 3rem;
  //perspective: 1000px; //creates 3d out of the screen effect, smaller number bigger effect
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  transition: transform 1s linear;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const TitleStyles = styled.h5`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const ThumbnailStyles = styled.img`
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.text};
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
  transform: rotateY(180deg);

  &:hover {
    opacity: 1;
  }
`;
const RevealedText = styled.p`
  font-weight: 200;
  color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  text-align: center;
`;

export default function SingleProject({ title, logo, text, slug }) {
  return (
    <ContainerStyles>
      <TitleStyles>{title}</TitleStyles>
      <ThumbnailContainer>
        <ThumbnailStyles src={logo} alt={title} />
        <Link to={`/projects/${slug}`}>
          <Overlay>
            <RevealedText>{text}</RevealedText>
          </Overlay>
        </Link>
      </ThumbnailContainer>
    </ContainerStyles>
  );
}
