import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};
export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setnewProduct] = useState(EMPTY_PRODUCT);

  const newProductToAdd = {
    ...newProduct,
    id: new Date().getTime(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setnewProduct({ ...newProduct, [name]: newValue });
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview"> Image preview</div>
      <div className="input-fields">
        <input
          value={newProduct.title}
          type="text"
          name="title"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          value={newProduct.imageSource}
          type="text"
          name="imageSource"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          name="price"
          placeholder="Prix"
          onChange={handleChange}
        />
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
