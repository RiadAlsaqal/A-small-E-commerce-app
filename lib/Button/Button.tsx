import React from "react";
import "./Button.css";

type TProps = {
  children: React.ReactNode;
  onClick: () => void;
  circleButton?: boolean;
  loading?: boolean;
  disabled?: boolean; // Add a 'disabled' prop
  style?: React.CSSProperties;
};

const Button: React.FC<TProps> = ({
  children,
  onClick,
  circleButton,
  loading,
  disabled, // Receive the 'disabled' prop
  style,
}) => {
  const buttonClass = `button mui-button ${
    circleButton ? "circle-button" : ""
  }`;

  return (
    <button
      className={`${buttonClass} ${loading ? "loading" : ""} ${
        disabled ? "disabled" : ""
      }`}
      style={{ ...style }}
      onClick={loading || disabled ? () => {} : onClick}
      disabled={disabled} // Apply the 'disabled' prop
    >
      {loading ? <div className="loader"></div> : children}
    </button>
  );
};

export default Button;
