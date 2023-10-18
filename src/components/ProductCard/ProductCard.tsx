import React from "react";
import "./ProductCard.css";
import { Button } from "../../../lib/Button";
import { useCard } from "../../providers/Card";
import { Stack } from "../../../lib/Stack";
import { Chip } from "../../../lib/Chip";
import { productCardChipColor } from "../../constants/productCardChipColor";
interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  id: number;
  style?: React.CSSProperties;
  showAction?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  imageUrl,
  id,
  style,
  showAction = true,
}) => {
  const { items, handleDeleteItem, handleAddItem } = useCard();
  const isInTheCard = items?.some((i) => i.id === id);
  const itemInThCard = items.find((item) => item.id === id);
  return (
    <div className="product-card" style={style}>
      <div className="product-image">
        <img
          src={imageUrl}
          alt={name}
          width="100%"
          style={{ borderRadius: 5 }}
        />
      </div>
      <h2 className="product-name">{name}</h2>
      <Stack style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <p className="product-price">${price.toFixed(2)}</p>
        <Chip
          color={
            productCardChipColor[!itemInThCard ? "normal" : itemInThCard.status]
          }
          label={!itemInThCard?.status ? "normal" : itemInThCard?.status}
        />
      </Stack>
      <p className="product-description">{description}</p>
      {showAction &&
        (!isInTheCard ? (
          <Button
            style={{ borderRadius: 5 }}
            onClick={() => {
              handleAddItem({
                description,
                id,
                images: [imageUrl],
                price,
                title: name,
              });
            }}
          >
            Add
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "#FF0000", borderRadius: 5 }}
            onClick={() => {
              handleDeleteItem(id);
            }}
          >
            Remove
          </Button>
        ))}
    </div>
  );
};

export default ProductCard;
