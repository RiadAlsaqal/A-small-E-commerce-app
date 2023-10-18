import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";

type Tabs = {
  onClick: () => void;
  label: string;
  Badge?: ({ children }: { children: React.ReactElement }) => JSX.Element;
};

type TProps = {
  tabs: Tabs[];
  actions?: React.ReactElement;
};

const Header: React.FC<TProps> = ({ actions, tabs }) => {
  const location = useLocation();
  console.log("location", location);
  return (
    <header className="header">
      <div className="header-tabs">
        {tabs.map((tab) => {
          const Badge = tab.Badge;
          if (Badge) {
            return (
              <Badge>
                <button
                  className={`header-tab ${
                    location.pathname.includes(tab.label) ||
                    tab.label.includes(location.pathname.replace(/^\/+/, ""))
                      ? "active-tab"
                      : ""
                  }`}
                  onClick={() => {
                    tab.onClick();
                  }}
                >
                  {tab.label}
                </button>
              </Badge>
            );
          }
          return (
            <button
              className={`header-tab ${
                location.pathname.includes(tab.label) ||
                tab.label.includes(location.pathname.replace(/^\/+/, ""))
                  ? "active-tab"
                  : ""
              }`}
              onClick={() => {
                tab.onClick();
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div>{actions}</div>
    </header>
  );
};

export default Header;
