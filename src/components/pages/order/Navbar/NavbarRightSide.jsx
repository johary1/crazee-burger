import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

// eslint-disable-next-line react/prop-types
export default function NavbarRightSide({ firstName }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
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
`;
