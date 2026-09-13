import type { Notification } from "../types/notification";

interface NotificationItemProps {
  notification: Notification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div
      className={`flex gap-3 rounded-lg p-3 sm:gap-4 sm:p-4 ${
        notification.read ? "bg-white" : "bg-blue-50"
      }`}
    >
      <img
        src={notification.avatar}
        alt={notification.user}
        className="h-10 w-10 shrink-0 rounded-full sm:h-11 sm:w-11"
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm leading-5 text-gray-600 sm:text-base sm:leading-6">
          <span className="font-bold text-gray-900">{notification.user}</span>{" "}
          <span>{notification.action}</span>{" "}
          {notification.target && (
            <span className="font-bold text-blue-700 hover:underline">
              {notification.target}
            </span>
          )}
          {!notification.read && (
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-red-500" />
          )}
        </p>

        <p className="mt-1 text-xs text-gray-400 sm:text-sm">
          {notification.time}
        </p>
      </div>
    </div>
  );
}

export default NotificationItem;
