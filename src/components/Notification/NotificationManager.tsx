import { Stack } from "../../../lib/Stack";
import { useNotification } from "../../providers/Notification";
import Notification from "./Notification";

const NotificationManager = () => {
  const { notifications } = useNotification();

  return (
    <Stack>
      {notifications.map(({ id, message }) => (
        <Notification id={id} message={message} />
      ))}
    </Stack>
  );
};

export default NotificationManager;
