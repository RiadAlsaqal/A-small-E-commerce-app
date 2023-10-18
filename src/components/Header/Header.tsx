import React, { useId } from "react";
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
  const id = useId();
  return (
    <header className="header">
      <div className="header-tabs">
        {tabs.map((tab, index) => {
          const Badge = tab.Badge;
          if (Badge) {
            return (
              <Badge key={index}>
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
              key={id}
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
