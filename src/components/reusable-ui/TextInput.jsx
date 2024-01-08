import styled from "styled-components";
import { theme } from "../../theme";
// eslint-disable-next-line react/prop-types
export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  min-width: 400px;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px, 30px, 18px, 30px;
  border-radius: ${theme.borderRadius.round};
  gap: 12.8px;
  input {
    border: none;
    width: 324px;
  }
`;
