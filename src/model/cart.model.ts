import { ProductModel } from "./Product.model";

export type productStatus = "added" | "normal" | "bought";

export type CardItem = ProductModel & {
  quantity: number;
  status: productStatus;
};
