import React, { useEffect } from "react";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../lib/Button";
import { Stack } from "../../lib/Stack";
import { Badge } from "../../lib/Badge";
import { useCard } from "../providers/Card";
import { NotificationManager } from "../components/Notification";
import { Menu } from "../../lib/Menu";
import { useSettings } from "../providers/Settings";
import { Checkbox } from "../../lib/Checkbox";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { items } = useCard();
  const { handleError, error } = useSettings();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/Products");
    }
  }, [pathname]);

  const BadgeCount = items.filter((item) => item.status !== "bought");

  return (
    <div className="Layout">
      <div className="mainLayout" style={{ marginTop: 5 }}>
        <Header
          tabs={[
            {
              label: "Products",
              onClick: () => navigate("Products"),
            },
            {
              label: "My card",
              onClick: () => navigate("card"),
              Badge:
                BadgeCount?.length === 0
                  ? undefined
                  : ({ children }: { children: React.ReactElement }) => (
                      <Badge color="#FF0000" label={BadgeCount?.length}>
                        {children}
                      </Badge>
                    ),
            },
          ]}
          actions={
            <Stack style={{ flexDirection: "row", gap: 5 }}>
              <Menu
                items={[
                  <Checkbox
                    checked={error}
                    label="make api error"
                    onChange={() => handleError(!error)}
                  />,
                ]}
              >
                <Button
                  circleButton
                  onClick={() => {}}
                  style={{ backgroundColor: ` rgb(165, 164, 164)` }}
                >
                  settings
                </Button>
              </Menu>
            </Stack>
          }
        />
        <Outlet />
        <NotificationManager />
      </div>
    </div>
  );
};

export default MainLayout;
