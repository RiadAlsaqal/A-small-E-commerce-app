import { Stack } from "../../../lib/Stack";
import { Paper } from "../../../lib/Papper";
import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { useCard, CardItem } from "../../providers/Card";
import { Button } from "../../../lib/Button";
import ProductListControler from "./components/ProductListControler";
import EmptyCartView from "./components/EmptyCartView/EmptyCartIcon";

const CartPage = () => {
  const { card } = useCard();
  const [selectedCart, setSelectedCart] = useState<CardItem>(card[0]);
  return (
    <Stack style={{ justifyContent: "center" }}>
      <Paper style={{ height: "80vh", width: "50%", alignSelf: "center" }}>
        {card?.length === 0 ? (
          <EmptyCartView />
        ) : (
          <Stack
            style={{
              flexDirection: "row",
              height: "90%",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Stack>
              <ProductCard
                description={selectedCart.description}
                id={selectedCart.id}
                imageUrl={selectedCart.images[0]}
                name={selectedCart.title}
                price={selectedCart.price}
                style={{ height: "60vh", width: "20vw" }}
                showAction={false}
              />
              <Button onClick={() => {}} circleButton>
                Buy
              </Button>
            </Stack>
            <ProductListControler onSelectCard={setSelectedCart} />
          </Stack>
        )}
      </Paper>
    </Stack>
  );
};

export default CartPage;
