import styled from "styled-components";
import { theme } from "../../theme";
// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  font-family: ${theme.fontFamilies.stylish};
  padding: 0 16px;
`;
