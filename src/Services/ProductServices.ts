import { ProductModel } from "src/model/Product.model";
import client from "../client/client";

const PRODUCTS_ENDPONT = "products";
export const getProducts = async (offest: number) => {
  const responce = client.get<ProductModel[]>(
    `${PRODUCTS_ENDPONT}?offset=${offest.toString()}&limit=30`
  );

  return responce;
};
