import { CardItem } from "../../../model/cart.model";

const calculatePrice = (items: CardItem[]) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedTotalPrice;
};

export default calculatePrice;
