/* eslint-disable react/prop-types */
import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ firstName }) {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide firstName={firstName} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
