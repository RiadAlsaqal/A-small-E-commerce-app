import { Paper } from "../../../../lib/Papper";
import React from "react";
import ProductCardControler from "./PruductCardControler";
import { useCard, CardItem } from "../../../providers/Card";
import { Stack } from "../../../../lib/Stack";

type TProps = {
  onSelectCard: (item: CardItem) => void;
};

const ProductListControler: React.FC<TProps> = ({ onSelectCard }) => {
  const { card, handleDecrementItem, handleDeleteItem, handleIncrementItem } =
    useCard();
  return (
    <Paper
      style={{
        height: "100%",
        width: "20vw",
        backgroundColor: "whitesmoke",
        overflowY: "auto",
      }}
    >
      <Stack style={{ rowGap: 10 }}>
        {card.map((item) => (
          <ProductCardControler
            item={item}
            onDecrement={() => handleDecrementItem(item.id)}
            onDelete={() => handleDeleteItem(item.id)}
            onIncrement={() => handleIncrementItem(item.id)}
            onSelectCard={() => onSelectCard(item)}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default ProductListControler;
