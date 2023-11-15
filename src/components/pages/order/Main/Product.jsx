/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Product({ title, imageSource, price }) {
  return (
    <MenuItemWrapperStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="item-cart">
        <small>{price}</small>
        <button>Ajouter</button>
      </div>
    </MenuItemWrapperStyled>
  );
}

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
