import styled from "styled-components";
import ContactIcons from "./ContactIcons";
import { desktop } from "../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${desktop}) {
    margin: 0 3rem;
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
      <ContactIcons />
      <DividerStyles />
      <TaglineStyles>ABOUT ME TAGLINE... MAYBE A SENTENCE.</TaglineStyles>
      <DividerStyles />
    </Container>
  );
}
