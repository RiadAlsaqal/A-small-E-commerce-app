import { Stack } from "../../../lib/Stack";
import { Paper } from "../../../lib/Papper";
import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { useCard } from "../../providers/Card";
import { Button } from "../../../lib/Button";
import ProductListControler from "./components/ProductListControler";
import EmptyCartView from "./components/EmptyCartView/EmptyCartIcon";
import { CardItem } from "../../model/cart.model";
import useBuyItemsMutation from "./hooks/useBuyItemsMutation";
import { useNavigate } from "react-router-dom";
import calculatePrice from "./utils/calculatePrice";
import { Chip } from "../../../lib/Chip";
import { useNotification } from "../../providers/Notification";

const CartPage = () => {
  const { items, handleBuy } = useCard();
  const itemsNotBought = items?.filter((item) => item.status !== "bought");
  const [selectedCart, setSelectedCart] = useState<CardItem>(itemsNotBought[0]);
  const { isLoading, mutateAsync } = useBuyItemsMutation();
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  return (
    <Stack style={{ justifyContent: "center" }}>
      <Paper style={{ height: "80vh", width: "50%", alignSelf: "center" }}>
        {itemsNotBought?.length === 0 ? (
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
              <Chip
                color="#B0BEC5"
                label={`final price : ${calculatePrice(itemsNotBought)}`}
                style={{ width: "fit-content" }}
              />
              <Button
                loading={isLoading}
                onClick={() => {
                  mutateAsync(items).then((e) => {
                    if (e) {
                      handleBuy();
                      addNotification("done", "success");
                      navigate("/Products");
                    }
                  });
                }}
                circleButton
              >
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
