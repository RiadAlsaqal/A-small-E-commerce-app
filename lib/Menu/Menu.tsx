import React, { useState, ReactElement, CSSProperties } from "react";
import "./Menu.css";

interface MenuProps {
  children: ReactElement;
  items: React.ReactElement[];
}

const Menu: React.FC<MenuProps> = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const menuStyle: CSSProperties = {};

  return (
    <div className="menu-container">
      {React.cloneElement(children, {
        onClick: handleClick,
        className: "menu-trigger",
      })}
      {isOpen && (
        <div className="menu-items" style={menuStyle}>
          <div className="close-button" onClick={handleClose}>
            X
          </div>
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
