/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme/index";
const LogoBurger = ({ className }) => {
  return (
    <LogoBurgerStyled className={className}>
      CRAZEE
      <img src="/assets/img/logo-orange.png" alt="logo Crazee burger" />
      BURGER
    </LogoBurgerStyled>
  );
};

const LogoBurgerStyled = styled.div`
  display: inline-flex;
  align-items: center;
  /* justify-content: center;
  align-content: center; */
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P4};
  font-family: ${theme.fontFamilies.regularFont}, cursive;
  letter-spacing: 1.5px;
  > img {
    height: 60px;
  }
`;

export default LogoBurger;
