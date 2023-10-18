import { useInfiniteQuery } from "../../../lib/useInfiniteQuery";
import { Paper } from "../../../lib/Papper";
import { getProducts } from "../../Services/ProductServices";
import { CircleLoader } from "../../../lib/CircleLoader";
import ProductsList from "./Components/ProductsList";

const ProductsPage = () => {
  const { data, isLoading, fetchData, hasMore } = useInfiniteQuery(getProducts);

  return (
    <Paper style={{ height: "100%" }}>
      {isLoading && <CircleLoader />}
      <ProductsList
        data={data}
        onScrollEnd={() => {
          hasMore && fetchData();
        }}
      />
    </Paper>
  );
};

export default ProductsPage;
