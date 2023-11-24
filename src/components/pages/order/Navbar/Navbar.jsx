/* eslint-disable react/prop-types */
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import LogoBurger from "../../../reusable-ui/LogoBurger";

export default function Navbar({ firstName }) {
  return (
    <NavbarStyled>
      <LogoBurger
        className="logo-order-page"
        onClick={() => {
          window.location.reload();
        }}
      />
      <NavbarRightSide firstName={firstName} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 15px 20px;
  .logo-order-page {
    cursor: pointer;
  }
`;
