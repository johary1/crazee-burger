import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Menu() {
  return (
    <MenuWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
      <MenuItemWrapperStyled>
        <img src="/images/burger1.png" alt="burger" />
        <h3>TITLE ITEM</h3>
        <div className="item-cart">
          <small>PRICE ITEM</small>
          <button>Ajouter</button>
        </div>
      </MenuItemWrapperStyled>
    </MenuWrapperStyled>
  );
}

const MenuWrapperStyled = styled.div`
  background-color: azure;
  display: grid;
  ${theme.devices(
    "mobile-xs",
    "grid-template-columns: repeat(1, 1fr); gap: 10px;"
  )}
  ${theme.devices(
    "mobile",
    "grid-template-columns: repeat(2, 1fr); gap: 10px;"
  )}
  ${theme.devices(
    "tablet",
    "grid-template-columns: repeat(3, 1fr); gap: 20px;"
  )}
  ${theme.devices(
    "desktop",
    "grid-template-columns: repeat(4, 1fr); gap: 50px;"
  )}
  
  place-items: center;
  z-index: 23;
  max-height: 80vh;
  overflow-y: scroll;
`;

const MenuItemWrapperStyled = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  width: 240px;
  height: 330px;
  h3 {
    text-align: left;
    margin-left: 20px;
  }
  img {
    object-fit: cover;
    width: 200px;
    height: 145px;
    margin: 0 auto;
  }
  .item-cart {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    small {
      font-weight: bold;
    }
  }
`;
