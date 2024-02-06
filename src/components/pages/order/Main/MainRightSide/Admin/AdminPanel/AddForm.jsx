import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from "../../../../../../reusable-ui/TextInput";
import Button from "../../../../../../reusable-ui/Button";
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
    setisSubmitted(true);
    displaySuccesMessage();
    setnewProduct(EMPTY_PRODUCT);
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
        <TextInput
          value={newProduct.title}
          type="text"
          name="title"
          placeholder=" Nom du produit (ex: Burger)"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimal"
        />
        <TextInput
          value={newProduct.imageSource}
          type="text"
          name="imageSource"
          placeholder=" Lien URL d'une image"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimal"
        />
        <TextInput
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          name="price"
          placeholder=" Prix"
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimal"
        />
      </div>
      <div className="submit-button">
        <Button
          type="submit"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && (
          <div className="success-message">
            <FiCheck className="icon" />
            <span className="message">Ajouter avec succès !</span>
          </div>
        )}
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
  .submit-button {
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
