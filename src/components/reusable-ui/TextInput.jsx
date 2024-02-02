/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { theme } from "../../theme";
// eslint-disable-next-line react/prop-types
export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};

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

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  input {
    color: ${theme.colors.dark};
    &:placeholder {
      color: ${theme.colors.white};
    }
  }
`;
const extraStyleMinimal = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};
  input {
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimal: extraStyleMinimal,
};
