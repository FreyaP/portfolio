import styled from "styled-components";
import ContactIcons from "./ContactIcons";
import { desktop } from "../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  @media (min-width: ${desktop}) {
    margin: 0 3rem;
  }
`;

const TaglineStyles = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  text-transform: uppercase;
  line-height: 2.5rem;
  padding: 1.5rem 0;
`;
const NameStyles = styled.span`
  font-weight: 500;
  font-size: 2.5rem;
`;

const LabelStyles = styled.h4`
  font-weight: 400;
  margin-top: 3rem;
  text-align: center;
  display: none;
`;
const DividerStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.text};
`;

export default function About() {
  return (
    <Container>
      <LabelStyles>_aboutMe</LabelStyles>
      <ContactIcons />
      <DividerStyles />
      <TaglineStyles>
        Hey there! I'm <NameStyles>Freya</NameStyles>, your go-to full-stack web
        developer based in the beautiful Sea To Sky, BC. Let me take you on a
        whimsical journey through my world of coding!
      </TaglineStyles>
      <DividerStyles />
    </Container>
  );
}
