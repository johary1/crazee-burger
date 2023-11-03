import styled from "styled-components";
import LogoBurger from "../../reusable-ui/LogoBurger";
export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <LogoBurger />
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  /* transform: scale(0.4);
  margin-left: -10%;
  margin-bottom: 15px; */
`;
