import { Header } from "./components/Header";
import notifications from "./data/notifications";

const [notifications, setNotifications] =
  useState<Notification[]>(initialNotifications);

function markAsRead() {
  setNotifications(
    notifications.map((notification) => ({
      ...notification,
      read: true,
    })),
  );
}

const unreadCount = notifications.filter(
  (notification) => !notification.read,
).length;

function App() {
  return (
    <>
      <div
        id="app"
        class="max-w-[700px] mx-auto bg-white min-h-screen p-6 mt-15"
      >
        <Header unreadCount={unreadCount} onMarkAsRead={markAsRead} />
      </div>
    </>
  );
}
