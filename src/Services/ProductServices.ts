import { ProductModel } from "src/model/Product.model";
import client from "../client/client";

const simulateEndpoint = <T>(
  responseData: T,
  delay = 1000,
  simulateError = false
): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error("Simulated API error"));
      } else {
        resolve(responseData);
      }
    }, delay);
  });
};

const PRODUCTS_ENDPONT = "products";
export const getProducts = async (offest: number) => {
  const response = client.get<ProductModel[]>(
    `${PRODUCTS_ENDPONT}?offset=${offest.toString()}&limit=30`
  );

  return response;
};
export const buyProducts = simulateEndpoint;
