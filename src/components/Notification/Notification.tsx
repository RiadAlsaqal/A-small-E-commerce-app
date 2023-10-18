import React from "react";
import { useNotification } from "../../providers/Notification";

const Notification: React.FC<{ id: number; message: string }> = ({
  id,
  message,
}) => {
  const { removeNotification } = useNotification();

  const handleClose = () => {
    removeNotification(id);
  };

  return (
    <div className="notification">
      {message}
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default Notification;
