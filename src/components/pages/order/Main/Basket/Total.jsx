import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

// eslint-disable-next-line react/prop-types
export default function Total({ amountToPay }) {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{amountToPay}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ${theme.fontFamilies.stylish};
  letter-spacing: 2px;
  margin: 20px auto;
`;
