import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { PiUserCircleFill } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export default function NavbarRightSide({ firstName }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Activer le mode admin</div> */}
      <NavProfileStyled>
        <h1>
          Hey, <span>{firstName}</span>
        </h1>
        <Link to="/">
          <small>Se déconnecter</small>
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

const NavProfileStyled = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 300;
    color: ${theme.colors.greySemiDark};
    span {
      color: ${theme.colors.primary};
      font-weight: 600;
    }
  }

  small {
    text-decoration: none;
    font-size: ${theme.fonts.XXS};
    color: ${theme.colors.greyBlue};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }
`;

const NavProfileIconStyled = styled.div`
  font-size: 35px;
  color: ${theme.colors.greySemiDark};
  padding: 10px 0px 0px 5px;
`;
