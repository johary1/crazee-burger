import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket area</div>
      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 15px;

  flex: 1;
  height: calc(95vh - 10vh);
  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    background: green;
    border-bottom-left-radius: 15px;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
