import styled from "styled-components";
import SingleProject from "./SingleProject";
import gbLogo from "../assets/images/projects/gbLogo.png";
import s2sLogo from "../assets/images/projects/s2sLogo.svg";
import seLogo from "../assets/images/projects/seLogo.png";
import { desktop, tablet } from "../styles/breakpoints";

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
  font-weight: 300;
  font-size: 3rem;
  margin-top: 3rem;
  text-align: center;
  text-transform: capitalize;
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
      <LabelStyles>Some of my work...</LabelStyles>
      <SingleProject
        title="G&B Contracting"
        logo={gbLogo}
        text="Full stack custom website for a Whistler based Contracting company."
        slug="g-and-b-contracting"
      />
      <SingleProject
        title="Sea To Sky Hotel"
        logo={s2sLogo}
        text="Brought a Squamish based hotel back online with a full stack website."
        slug="sea-to-sky-hotel"
      />
      <SingleProject
        title="Squamish Events Hub"
        logo={seLogo}
        text="Full stack passion project with database for an events platform."
        slug="squamish-events-hub"
      />
    </ContainerStyles>
  );
}
