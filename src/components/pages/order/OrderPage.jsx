import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { MdNfc } from "react-icons/md";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  // comportements

  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };
  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu];
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
  };

  //affichage
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
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: ${theme.colors.white};
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
