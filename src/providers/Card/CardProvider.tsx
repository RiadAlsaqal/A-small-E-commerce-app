import React, { useContext } from "react";
import { ProductModel } from "src/model/Product.model";

export type CardItem = ProductModel & { quantity: number };

type CardContextValue = {
  card: CardItem[];
  handleAddItem: (item: Omit<CardItem, "quantity">) => void;
  handleDeleteItem: (id: number) => void;
  handleIncrementItem: (id: number) => void;
  handleDecrementItem: (id: number) => void;
};

const CardContext = React.createContext<CardContextValue | null>(null);

type TProps = {
  children: React.ReactElement;
};

const CardProvider: React.FC<TProps> = ({ children }) => {
  const [card, setCard] = React.useState<CardItem[]>([]);
  const handleAddItem = (item: Omit<CardItem, "quantity">) => {
    setCard((prev) => [...prev, { ...item, quantity: 1 }]);
  };
  const handleDeleteItem = (id: number) => {
    setCard((prev) => prev.filter((i) => i.id !== id));
  };
  const handleIncrementItem = (id: number) => {
    setCard((prev) =>
      prev.map((i) => {
        if (i.id === id) return { ...i, quantity: i.quantity + 1 };
        return i;
      })
    );
  };
  const handleDecrementItem = (id: number) => {
    setCard((prev) =>
      prev.map((i) => {
        if (i.id === id) return { ...i, quantity: i.quantity - 1 };
        return i;
      })
    );
  };
  const value: CardContextValue = {
    card,
    handleAddItem,
    handleDecrementItem,
    handleDeleteItem,
    handleIncrementItem,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;

export const useCard = () => {
  const card = useContext(CardContext);
  return card as CardContextValue;
};
