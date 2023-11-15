import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuWrapperStyled>
      {menu.map((produit, index) => {
        return (
          <Product
            key={index}
            title={produit.title}
            imageSource={produit.imageSource}
            price={produit.price}
          />
        );
      })}
    </MenuWrapperStyled>
  );
}

const MenuWrapperStyled = styled.div`
  background-color: azure;
  display: grid;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  ${theme.devices(
    "mobile-xs",
    "grid-template-columns: repeat(1, 1fr); gap: 10px;"
  )}
  ${theme.devices(
    "mobile",
    "grid-template-columns: repeat(1, 1fr); gap: 10px;"
  )}
  ${theme.devices(
    "tablet",
    "grid-template-columns: repeat(3, 1fr); gap: 20px;"
  )}
  ${theme.devices(
    "desktop",
    "grid-template-columns: repeat(4, 1fr); gap: 10px;"
  )}
  
  place-items: center;
  z-index: 23;
  max-height: 80vh;
  overflow-y: scroll;
`;
