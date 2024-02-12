import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return <BasketStyled>Basket</BasketStyled>;
}

const BasketStyled = styled.div`
  background: salmon;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
