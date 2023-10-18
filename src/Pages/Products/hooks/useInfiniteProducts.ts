import { useInfiniteQuery } from "../../../../lib/useInfiniteQuery";
import { getProducts } from "../../../Services/ProductServices";

const useInfiniteProducts = () => {
  const query = useInfiniteQuery(getProducts);

  return query;
};

export default useInfiniteProducts;
