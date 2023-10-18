// NotificationProvider.tsx
import React, { createContext, useContext, useState } from "react";

type Notification = {
  id: number;
  message: string;
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string) => void;
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

  const addNotification = (message: string) => {
    const id = idCounter.current++;
    const newNotification = { id, message };

    setNotifications((prevNotifications) => [
      newNotification,
      ...prevNotifications,
    ]);

    // Close the notification after 5 seconds
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
