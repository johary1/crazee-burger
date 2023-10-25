/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled type="submit">
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.weights.semiBold};
  border: none;
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.greyLight};
  margin: ${theme.spacing.md} auto;
  min-width: 400px;
  min-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
`;
