import { Stack } from "lib/Stack";
import { EmptyCartIcon } from "..";
import { Button } from "../../../../../lib/Button";
import { useNavigate } from "react-router-dom";

const EmptyCartView = () => {
  const navigate = useNavigate();
  return (
    <Stack style={{ justifyContent: "space-between", height: "100%" }}>
      <EmptyCartIcon />
      <Button
        style={{ width: "fit-content", alignSelf: "center" }}
        onClick={() => navigate("/Products")}
      >
        Back to Products
      </Button>
    </Stack>
  );
};

export default EmptyCartView;
