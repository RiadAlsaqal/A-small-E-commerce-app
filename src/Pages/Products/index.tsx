import { Paper } from "../../../lib/Papper";
import { CircleLoader } from "../../../lib/CircleLoader";
import ProductsList from "./Components/ProductsList";
import useInfiniteProducts from "./hooks/useInfiniteProducts";
import { Stack } from "../../../lib/Stack";
import { useCard } from "../../providers/Card";

const ProductsPage = () => {
  const { data, fetchData, hasMore, isLoading } = useInfiniteProducts();
  const { items } = useCard();
  const boughtItems = items?.filter((item) => item.status === "bought");

  const freshItems = data.filter((item) => {
    const matchingItem = items.find((i) => i.id === item.id);

    return !matchingItem || matchingItem.status !== "bought";
  });

  return (
    <Stack
      style={{
        height: "100%",
        justifyContent: "flex-start",
        gap: 10,
      }}
    >
      {isLoading ? <CircleLoader /> : <></>}
      {boughtItems.length ? (
        <div style={{ height: "525px" }}>
          <h2> Bought Products</h2>
          <Paper style={{ height: "90%" }}>
            <ProductsList
              data={boughtItems}
              containerStyle={{ flexDirection: "row" }}
              showAction={false}
              subContainerStyle={{
                flexWrap: "nowrap",
                overflowX: "auto",
                overflowY: "hidden",
              }}
              cardStyle={{ width: "200px" }}
            />
          </Paper>
        </div>
      ) : (
        <></>
      )}
      <br />
      <br />

      {freshItems.length ? (
        <div>
          <h2>Products</h2>
          <Paper style={{ height: "700px" }}>
            <ProductsList
              data={freshItems}
              onScrollEnd={() => {
                hasMore && fetchData();
              }}
            />
          </Paper>
        </div>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default ProductsPage;
