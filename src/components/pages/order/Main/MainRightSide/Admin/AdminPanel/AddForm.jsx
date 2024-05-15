/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import Button from "../../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../../../theme";
import { EMPTY_PRODUCT } from "../../../../../../../enum/product";

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const inputTexts = getInputTextsConfig(newProduct);

  // affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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
  grid-column-gap: 20px;
  /* grid-row-gap: 8px; */

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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};
    }
  }
  .input-fields {
    grid-area: input-fields;
    display: grid;
    grid-row-gap: 8px;
    grid-template-rows: repeat(3, 1fr);
  }
  .submit {
    grid-area: submit-button;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    top: 8px;
    button {
      width: 50%;

      /* height: 100%; */
    }

    .success-message {
      /* border: 1px solid green;
      padding: 5px 10px; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.P0};
        color: ${theme.colors.success};
      }
    }
  }
`;
