import React, { useContext } from "react";
import { CardItem } from "../../model/cart.model";

type CardContextValue = {
  items: CardItem[];
  handleAddItem: (item: Omit<CardItem, "quantity" | "status">) => void;
  handleDeleteItem: (id: number) => void;
  handleIncrementItem: (id: number) => void;
  handleDecrementItem: (id: number) => void;
  handleBuy: () => void;
};

const CardContext = React.createContext<CardContextValue | null>(null);

type TProps = {
  children: React.ReactElement;
};

const CardProvider: React.FC<TProps> = ({ children }) => {
  const [items, setItems] = React.useState<CardItem[]>([]);
  const handleAddItem = React.useCallback(
    (item: Omit<CardItem, "quantity" | "status">) => {
      setItems((prev) => [...prev, { ...item, quantity: 1, status: "added" }]);
    },
    []
  );
  const handleDeleteItem = React.useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);
  const handleIncrementItem = React.useCallback((id: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === id) return { ...i, quantity: i.quantity + 1 };
        return i;
      })
    );
  }, []);
  const handleDecrementItem = React.useCallback((id: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === id) return { ...i, quantity: i.quantity - 1 };
        return i;
      })
    );
  }, []);
  const handleBuy = React.useCallback(() => {
    setItems((prev) => prev.map((item) => ({ ...item, status: "bought" })));
  }, []);
  const value: CardContextValue = {
    items,
    handleAddItem,
    handleDecrementItem,
    handleDeleteItem,
    handleIncrementItem,
    handleBuy,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;

export const useCard = () => {
  const card = useContext(CardContext);
  return card as CardContextValue;
};
