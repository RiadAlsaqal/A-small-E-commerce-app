import React from "react";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../lib/Button";
import Stack from "../../lib/Stack/Stack";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mainLayout">
      <Header
        tabs={[
          { label: "Products", onClick: () => navigate("Products") },
          { label: "My card", onClick: () => navigate("card") },
        ]}
        actions={
          <Stack style={{ flexDirection: "row", gap: 5 }}>
            <Button circuleButton onClick={() => console.log("hhh")}>
              settings
            </Button>
            <Button circuleButton onClick={() => console.log("hi")}>
              {" "}
              dark mode{" "}
            </Button>
          </Stack>
        }
      />
      <Outlet />
    </div>
  );
};

export default MainLayout;
