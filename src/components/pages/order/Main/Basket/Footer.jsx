import { FaReact } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <FooterStyled>
      REACT <FaReact className="icon-react" /> PROJECT
    </FooterStyled>
  );
}

const FooterStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamilies.stylish};

  .icon-react {
    color: ${theme.colors.white};
    margin: auto 5px;
  }
`;
