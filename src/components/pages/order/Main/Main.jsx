import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket area</div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  padding: 20px;
  flex: 1;
  z-index: 20;
  height: 80%;
  display: grid;
  grid-template-columns: 20% 1fr;
  .basket {
    background: green;
  }
`;
