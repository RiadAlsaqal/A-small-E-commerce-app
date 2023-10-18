import React from "react";
import { useNotification } from "../../providers/Notification";
import "./Notification.css";

type Variant = "success" | "danger" | "info";

const Notification: React.FC<{
  id: number;
  message: string;
  variant: Variant;
}> = ({ id, message, variant }) => {
  const { removeNotification } = useNotification();

  const handleClose = () => {
    removeNotification(id);
  };

  return (
    <div className={`notification ${variant}`}>
      <p style={{ textAlign: "center", width: "100%" }}> {message}</p>
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Notification;
