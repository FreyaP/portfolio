import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      <TaglineStyles>ABOUT ME TAGLINE... MAYBE A SENTENCE.</TaglineStyles>
      <LabelStyles>_aboutMe</LabelStyles>
      <DividerStyles />
    </Container>
  );
}
