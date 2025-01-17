import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  display: flex;
  justify-content: center;
  align-items: center;
  .empty-message {
    text-transform: uppercase;
    text-align: center;
    font-family: ${theme.fontFamilies.stylish};
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.greyBlue};
  }
`;
