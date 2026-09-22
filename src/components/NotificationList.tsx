import NotificationItem from "./NotificationItem";
import type { Notification } from "../types/notification";

interface NotificationListProps {
  notifications: Notification[];
  markOneAsRead: (id: number) => void;
}

function NotificationList({
  notifications,
  markOneAsRead,
}: NotificationListProps) {
  return (
    <div className="flex flex-col gap-2">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          markOneAsRead={markOneAsRead}
        />
      ))}
    </div>
  );
}

export default NotificationList;
