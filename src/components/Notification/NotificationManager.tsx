import { Stack } from "../../../lib/Stack";
import { useNotification } from "../../providers/Notification";
import Notification from "./Notification";

const NotificationManager = () => {
  const { notifications } = useNotification();

  return (
    <Stack
      style={{
        position: "fixed",
        top: "70px",
        right: "100px",
        minWidth: "300px",
      }}
    >
      {notifications.map(({ id, message, variant }) => (
        <Notification key={id} id={id} message={message} variant={variant} />
      ))}
    </Stack>
  );
};

export default NotificationManager;
