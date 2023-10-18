import React from "react";
import "./Chip.css";

type ChipProps = {
  label: string;
  color: string;
  onDelete?: () => void;
  style?: React.CSSProperties;
};

const Chip: React.FC<ChipProps> = ({ label, color, onDelete, style }) => {
  return (
    <div className="chip" style={{ backgroundColor: color, ...style }}>
      <span className="chip-label">{label}</span>
      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          X
        </button>
      )}
    </div>
  );
};

export default Chip;
