import NotificationItem from "./NotificationItem";
import type { Notification } from "../types/notification";

interface NotificationListProps {
  notifications: Notification[];
}

function NotificationList({ notifications }: NotificationListProps) {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;
