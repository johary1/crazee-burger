import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setnewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setisSubmitted] = useState(false);
  const displaySuccesMessage = () => {
    setTimeout(() => {
      setisSubmitted(false);
    }, 2000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setnewProduct(EMPTY_PRODUCT);
    setisSubmitted(true);
    displaySuccesMessage();
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setnewProduct({ ...newProduct, [name]: newValue });
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="newProduct.title" />
        ) : (
          <div className="no-image">Aucune image</div>
        )}
      </div>

      <div className="input-fields">
        <input
          value={newProduct.title}
          type="text"
          name="title"
          placeholder=" Nom du produit (ex: Burger)"
          onChange={handleChange}
        />
        <input
          value={newProduct.imageSource}
          type="text"
          name="imageSource"
          placeholder=" Lien URL d'une image"
          onChange={handleChange}
        />
        <input
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          name="price"
          placeholder=" Prix"
          onChange={handleChange}
        />
      </div>
      <div className="submit-button">
        <button type="submit">Ajouter</button>
        {isSubmitted && (
          <div className="success-message">
            <FiCheck />
            <span>Ajouter avec succès !</span>
          </div>
        )}
      </div>
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
    grid-area: image-preview;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    .no-image {
      text-align: center;
      transform: translate(0%, 40%);
    }
  }
  .input-fields {
    background: blue;
    grid-area: input-fields;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  .submit-button {
    /* background: green; */
    grid-area: submit-button;
    display: flex;
    align-items: center;
    width: 100%;
    button {
      width: 50%;
      height: 100%;
    }

    .success-message {
      border: 1px solid green;
      padding: 5px 10px;
    }
  }
`;
