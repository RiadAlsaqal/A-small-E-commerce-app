import React, { forwardRef } from "react";
import "./Stack.css";

type TProps = {
  children: React.ReactElement[] | React.ReactElement;
  style?: React.CSSProperties;
  onCLick?: React.DOMAttributes<HTMLDivElement>["onClick"];
};

const Stack = forwardRef<HTMLDivElement, TProps>(
  ({ children, style, onCLick }, ref) => {
    return (
      <div onClick={onCLick} className="stack" style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Stack;
