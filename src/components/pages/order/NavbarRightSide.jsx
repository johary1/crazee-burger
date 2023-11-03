import styled from "styled-components";
import { theme } from "../../../theme";
import Profile from "./Profile";

// eslint-disable-next-line react/prop-types
export default function NavbarRightSide({ firstName }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Activer le mode admin</div> */}
      <Profile firstName={firstName} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  /* .admin-button {
    background-color: orange;
    border-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.primary};
    font-size: 12px;
    padding: 8px;
    width: 170px;
  } */
`;
