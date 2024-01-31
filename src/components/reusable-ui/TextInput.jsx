/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";
// eslint-disable-next-line react/prop-types
export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.P2};
    margin-right: 15px;
  }
  input {
    border: none;
    width: 80%;
    &:placeholder {
      color: ${theme.colors.greyMedium};
      background: ${theme.colors.white};
    }
  }
`;
