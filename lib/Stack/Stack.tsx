import React from "react";
import "./Stack.css";
type TProps = {
  children: React.ReactElement[];
  style?: React.CSSProperties;
};
const Stack: React.FC<TProps> = ({ children, style }) => {
  return (
    <div className="stack" style={style}>
      {children}
    </div>
  );
};

export default Stack;
