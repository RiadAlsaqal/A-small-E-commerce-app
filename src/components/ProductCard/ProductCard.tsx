import React from "react";
import "./ProductCard.css";
import { Button } from "../../../lib/Button";
import { useCard } from "../../providers/Card";
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
  const card = useCard();
  const isInTheCard = card?.card.some((i) => i.id === id);
  console.log("card", card);
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
      <p className="product-price">${price.toFixed(2)}</p>
      <p className="product-description">{description}</p>
      {showAction &&
        (!isInTheCard ? (
          <Button
            style={{ borderRadius: 5 }}
            onClick={() => {
              card?.handleAddItem({
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
              card?.handleDeleteItem(id);
            }}
          >
            Remove
          </Button>
        ))}
    </div>
  );
};

export default ProductCard;
