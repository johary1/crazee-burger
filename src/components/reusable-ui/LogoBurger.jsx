import styled from "styled-components";
import { theme } from "../../theme/index";
const LogoBurger = () => {
  return (
    <LogoBurgerStyled>
      CRAZEE
      <img src="/assets/img/logo-orange.png" alt="logo Crazee burger" />
      BURGER
    </LogoBurgerStyled>
  );
};

const LogoBurgerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${theme.colors.primary};
  font-size: 72px;
  font-family: ${theme.fontFamilies.regularFont}, cursive;
  letter-spacing: 1.5px;
  > img {
    width: 120px;
  }
`;

export default LogoBurger;
