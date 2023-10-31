import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function NavbarRightSide({ firstName }) {
  return (
    <NavbarRightSideStyled>
      <h1>Bonjour {firstName}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
`;
