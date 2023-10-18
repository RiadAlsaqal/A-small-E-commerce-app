import React from "react";
import "./Paper.css";

type PaperProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Paper: React.FC<PaperProps> = ({ children, style }) => {
  return (
    <div className="paper" style={style}>
      {children}
    </div>
  );
};

export default Paper;
