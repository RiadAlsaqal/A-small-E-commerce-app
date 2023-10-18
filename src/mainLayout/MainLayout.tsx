import React, { useEffect } from "react";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../lib/Button";
import { Stack } from "../../lib/Stack";
import { Badge } from "../../lib/Badge";
import { useCard } from "../providers/Card";
import { NotificationManager } from "../components/Notification";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const card = useCard();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/Products");
    }
  }, [pathname]);

  return (
    <div className="mainLayout">
      <Header
        tabs={[
          {
            label: "Products",
            onClick: () => navigate("Products"),
          },
          {
            label: "My card",
            onClick: () => navigate("card"),
            Badge: !card?.card.length
              ? undefined
              : ({ children }: { children: React.ReactElement }) => (
                  <Badge color="#FF0000" label={card?.card.length}>
                    {children}
                  </Badge>
                ),
          },
        ]}
        actions={
          <Stack style={{ flexDirection: "row", gap: 5 }}>
            <Button
              circleButton
              onClick={() => console.log("hhh")}
              style={{ backgroundColor: ` rgb(165, 164, 164)` }}
            >
              settings
            </Button>
            <Button
              circleButton
              onClick={() => console.log("hi")}
              style={{ backgroundColor: ` rgb(165, 164, 164)` }}
            >
              dark mode
            </Button>
          </Stack>
        }
      />
      <Outlet />
      <NotificationManager />
    </div>
  );
};

export default MainLayout;
