import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import { ProductsPage, CartPage } from "./Pages";
const Routs = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/card" element={<CartPage />} />
        <Route path="/Products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};

export default Routs;
