import { Paper } from "../../../../lib/Papper";
import React from "react";
import ProductCardControler from "./PruductCardControler";
import { useCard } from "../../../providers/Card";
import { Stack } from "../../../../lib/Stack";
import { CardItem } from "../../../model/cart.model";

type TProps = {
  onSelectCard: (item: CardItem) => void;
};

const ProductListControler: React.FC<TProps> = ({ onSelectCard }) => {
  const { items, handleDecrementItem, handleDeleteItem, handleIncrementItem } =
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
        {items
          ?.filter((item) => item.status !== "bought")
          .map((item) => (
            <ProductCardControler
              key={item.id}
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
