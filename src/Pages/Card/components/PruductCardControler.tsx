import { CardItem } from "../../../providers/Card";
import { Button } from "../../../../lib/Button";
import { Stack } from "../../../../lib/Stack";
import React from "react";

type TProps = {
  item: CardItem;
  onSelectCard: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
};

const ProductCardControler: React.FC<TProps> = ({
  item,
  onSelectCard,
  onDecrement,
  onDelete,
  onIncrement,
}) => {
  return (
    <Stack
      onCLick={() => onSelectCard()}
      style={{
        height: "15vh",
        backgroundColor: "lavender",
      }}
    >
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>
          <span style={{ fontWeight: "bold", fontFamily: "arial" }}>name</span>:{" "}
          {item.title}
        </p>
        <span
          style={{
            fontFamily: "arial",
            color: "whitesmoke",
            backgroundColor: "gray",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.quantity}
        </span>
      </Stack>
      <Stack
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Button onClick={() => onIncrement()}>+</Button>
        <Button disabled={item.quantity < 1} onClick={() => onDecrement()}>
          -
        </Button>
        <Button onClick={() => onDelete()} style={{ backgroundColor: "red" }}>
          delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductCardControler;
