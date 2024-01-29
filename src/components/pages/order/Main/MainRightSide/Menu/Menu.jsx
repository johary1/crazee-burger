import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";
export default function Menu() {
  // eslint-disable-next-line no-unused-vars
  const { menu, isModeAdmin, handleDelete, resetMenu } =
    useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) {
      return <EmptyMenuClient />;
    }
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
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
