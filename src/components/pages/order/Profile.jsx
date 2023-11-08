/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../theme";
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Profile({ firstName }) {
  return (
    <>
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
    </>
  );
}

const NavProfileStyled = styled.div`
  h1 {
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.light};
    color: ${theme.colors.greySemiDark};
    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.semiBold};
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
  font-size: ${theme.fonts.P4};
  color: ${theme.colors.greySemiDark};
  padding: 10px 0px 0px 5px;
`;
