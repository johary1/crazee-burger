/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon }) {
  return (
    <TabStyled>
      <div className="icon">{Icon}</div>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  left: 5%;
  top: 1px;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greyLight};
  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
`;
