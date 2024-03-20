import styled from "styled-components";
import SingleProject from "./SingleProject";
import gbLogo from "../assets/images/projects/gbLogo.png";
import s2sLogo from "../assets/images/projects/s2sLogo.svg";
import seLogo from "../assets/images/projects/seLogo.png";

const ContainerStyles = styled.section`
  margin-top: 5rem;
  padding: 0 1rem;
`;
const LabelStyles = styled.h4`
  font-weight: 400;
  margin-top: 3rem;
  text-align: center;
  display: none;
`;

export default function ProjectList() {
  return (
    <ContainerStyles>
      <LabelStyles>_myWork</LabelStyles>
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
