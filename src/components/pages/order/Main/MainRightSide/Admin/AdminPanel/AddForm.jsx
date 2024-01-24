import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource:
      "https://img.freepik.com/photos-gratuite/burger-savoureux-isole-fond-blanc-restauration-rapide-hamburger-frais-du-boeuf-du-fromage_90220-1063.jpg?w=150&t=st=1704981819~exp=1704982419~hmac=0930ec4a78f64d6b4a9d780f01f6e8dfc5584c648b017215a2a3d54d74c15b00",
    price: 2.5,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview"> Image preview</div>
      <div className="input-fields">
        <input type="text" name="nom" placeholder="Nom" />
        <input type="text" name="image-url" placeholder="Image URL" />
        <input type="text" name="prix" placeholder="Prix" />
      </div>
      <button className="submit-button"> Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   input-fields"
    "image-preview   input-fields"
    "image-preview   input-fields"
    ".               submit-button";
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: image-preview;
  }
  .input-fields {
    background: blue;
    grid-area: input-fields;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  .submit-button {
    background: green;
    grid-area: submit-button;
    width: 50%;
  }
`;
