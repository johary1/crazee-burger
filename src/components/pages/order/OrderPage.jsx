import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0 20px 0;

  .container {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    width: 1400px;
    margin: auto 50px;
    display: flex;
    flex-direction: column;
  }
`;

export default OrderPage;
