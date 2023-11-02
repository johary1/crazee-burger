import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { PiUserCircleFill } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export default function NavbarRightSide({ firstName }) {
  return (
    <NavbarRightSideStyled>
      <NavProfileStyled>
        <h1>
          Hey <span>{firstName}</span>
        </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </NavProfileStyled>
      <NavProfileIconStyled>
        <PiUserCircleFill />
      </NavProfileIconStyled>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
  padding-top: 5px;
`;

const NavProfileStyled = styled.div`
  padding: 0px 0px 10px;
  h1 {
    font-size: 24px;
    color: ${theme.colors.primary};
    span {
      color: ${theme.colors.greySemiDark};
    }
  }

  button {
    border: none;
    background-color: white;
    color: ${theme.colors.greyMedium};
    cursor: pointer;
  }
`;

const NavProfileIconStyled = styled.div`
  font-size: 35px;
  color: ${theme.colors.greySemiDark};
`;
