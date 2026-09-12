import type { Notification } from "../types/notification";

interface NotificationItemProps {
  notification: Notification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div className="notification-content flex flex-row gap-4">
      <img
        className="h-10 w-10 rounded-full"
        src={notification.avatar}
        alt={notification.user}
      />

      <div className="notification-content-text">
        <div className="notification-content-text-user flex flex-row gap-1">
          <p className="text-sm leading-6">
            <span className="font-bold text-gray-900">{notification.user}</span>

            <span className="text-gray-600">{notification.action}</span>

            {notification.target && (
              <span className="font-semibold text-blue-700">
                {notification.target}
              </span>
            )}

            {!notification.read && (
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </p>
        </div>

        <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
      </div>
    </div>
  );
}

export default NotificationItem;
