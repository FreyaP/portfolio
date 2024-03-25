import styled from "styled-components";
import ContactIcons from "./ContactIcons";
import { desktop } from "../styles/breakpoints";

const DividerStyles = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  margin: 3rem 1rem;
  @media (min-width: ${desktop}) {
    margin: 3rem;
  }
`;
const ContactHeader = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`;
const FooterHeader = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
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
      <ContactHeader>Chat with me!</ContactHeader>
      <ContactIcons />
      <DividerStyles />
      <FooterHeader>Freya Pearse</FooterHeader>
      <CopyrightStyles>
        &#169; Copyright {`${new Date().getFullYear()}`} | All Rights Reserved{" "}
      </CopyrightStyles>
    </>
  );
}
