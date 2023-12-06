import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return <AdminStyled>Admin area</AdminStyled>;
}

const AdminStyled = styled.div`
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-right-radius: 15px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
