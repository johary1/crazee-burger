import { useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../../fakeData/fakeMenu";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";

export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  /* box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset; */
  overflow-y: scroll;
  border-bottom-right-radius: 15px;
`;
