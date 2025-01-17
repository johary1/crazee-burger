import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">Body</div>
      <Footer>Footer</Footer>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: salmon;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
