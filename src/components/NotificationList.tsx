import NotificationItem from "./NotificationItem";

function NotificationList() {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem notification={notification} />
      ))}
    </div>
  );
}
