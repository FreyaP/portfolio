import styled from "styled-components";
import heroImage from "../assets/images/hero.jpg";

const TitleStyles = styled.h1`
  text-transform: uppercase;
  width: 80%;
  font-size: 2.5rem;
  margin: 0;
  padding-left: 1rem;
  padding-top: 1rem;
`;

const SubTitleStyles = styled.h2`
  text-transform: uppercase;
  font-weight: 100;
  margin: 0;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

export default function Header() {
  return (
    <>
      <TitleStyles>Freya Pearse</TitleStyles>
      <SubTitleStyles>Web Developer</SubTitleStyles>
      <img src={heroImage} alt="Person sitting at laptop" />
    </>
  );
}
