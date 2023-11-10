import styled from "styled-components";
import { useParams } from "react-router-dom";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

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
