import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview"> Image preview</div>
      <div className="input-fields">
        <input type="text" name="" placeholder="Nom" />
        <input type="text" name="" placeholder="Image URL" />
        <input type="text" name="" placeholder="Prix" />
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
