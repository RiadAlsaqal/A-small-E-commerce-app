import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";

const Routs = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={"asd"} />

        <Route path="/card" element={"asd"} />
        <Route path="/Products" element={"aaaaaaaa"} />
      </Route>
    </Routes>
  );
};

export default Routs;
