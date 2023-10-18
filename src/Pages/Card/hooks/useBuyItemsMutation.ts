import { buyProducts } from "../../../Services/ProductServices";
import { useMutation } from "../../../../lib/useMutation";

const useBuyItemsMutation = () => {
  const mutation = useMutation(() => buyProducts({ message: "done" }, 4000));
  return mutation;
};

export default useBuyItemsMutation;
