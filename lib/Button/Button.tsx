import React from "react";
import "./Button.css";

type TProps = {
  children: React.ReactNode;
  onClick: () => void;
  circuleButton?: boolean;
};

const Button: React.FC<TProps> = ({ children, onClick, circuleButton }) => {
  return (
    <button
      className="button"
      style={{ borderRadius: circuleButton ? 30 : "initial" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
