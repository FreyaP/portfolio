import styled from "styled-components";
import ContactIcons from "./ContactIcons";
import { desktop, tablet } from "../styles/breakpoints";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const DividerStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  margin: 3rem 1rem;
  @media (min-width: ${desktop}) {
    margin: 3rem;
  }
`;
const ContactHeader = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;
const FooterHeader = styled(Link)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
  @media (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1.5rem;
  margin: 0 3rem;
  @media (min-width: ${tablet}) {
    width: 40%;
  }
`;
const CopyrightStyles = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 200;
`;

export default function Footer() {
  return (
    <>
      <DividerStyles />
      <FooterContainer>
        <ChatContainer>
          <ContactHeader>Let's chat!</ContactHeader>
          <p>
            Drop me a line and let's get this web party started! Exciting
            projects await - together we'll create digital magic that shines
            brighter than the Sea To Sky on a Sunday afternoon. Ready to elevate
            your online presence?
          </p>

          <ContactIcons />
        </ChatContainer>
        <ContactForm />
      </FooterContainer>
      <DividerStyles />
      <FooterHeader to="/">Freya Pearse</FooterHeader>
      <CopyrightStyles>
        &#169; Copyright {`${new Date().getFullYear()}`} | All Rights Reserved{" "}
      </CopyrightStyles>
    </>
  );
}
