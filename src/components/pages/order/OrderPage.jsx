import styled from "styled-components";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Main from "./Main";
import { theme } from "../../../theme";

const OrderPage = () => {
  const { firstName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar firstName={firstName} />
        <Main />
      </div>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .container {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    height: 95vh;
    width: 1400px;
    margin: auto 50px;
    display: flex;
    flex-direction: column;
  }
`;

export default OrderPage;
