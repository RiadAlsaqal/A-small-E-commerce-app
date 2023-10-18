import React from "react";
import "./Checkbox.css";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      <p style={{ color: "black" }}> {label}</p>
    </label>
  );
};

export default Checkbox;
