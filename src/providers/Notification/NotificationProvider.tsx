// NotificationProvider.tsx
import React, { createContext, useContext, useState } from "react";
type Variant = "success" | "danger" | "info";
type Notification = {
  id: number;
  message: string;
  variant: Variant;
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string, variant: Variant) => void;
  removeNotification: (id: number) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

const NotificationProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const idCounter = React.useRef(0);

  const addNotification = (message: string, variant: Variant) => {
    const id = idCounter.current++;
    const newNotification = { id, message, variant };

    setNotifications((prevNotifications) => [
      newNotification,
      ...prevNotifications,
    ]);

    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }

  return context;
};

export default NotificationProvider;
