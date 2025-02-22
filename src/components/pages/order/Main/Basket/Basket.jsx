import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer>Footer</Footer>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
`;
