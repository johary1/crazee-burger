import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">Header</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: salmon;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;

  .head {
    background: ${theme.colors.background_dark};
  }
  .body {
    background: ${theme.colors.background_white};
  }
  .footer {
    background: ${theme.colors.background_dark};
  }
`;
