import React, { useState } from "react";
import "./Header.css";

type Tabs = {
  onClick: () => void;
  label: string;
};

type TProps = {
  tabs: Tabs[];
  actions?: React.ReactElement;
};

const Header: React.FC<TProps> = ({ actions, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="header">
      <div className="header-tabs">
        {tabs.map((tab, index) => (
          <button
            className={`header-tab ${activeTab === index ? "active-tab" : ""}`}
            onClick={() => {
              tab.onClick();
              setActiveTab(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{actions}</div>
    </header>
  );
};

export default Header;
