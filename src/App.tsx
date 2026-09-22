import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import NotificationList from "./components/NotificationList";
import { notifications as initialNotifications } from "./data/notifications";
import type { Notification } from "./types/notification";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const savedNotifications = localStorage.getItem("notifications");

    return savedNotifications
      ? JSON.parse(savedNotifications)
      : initialNotifications;
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  function markOneAsRead(id: number) {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-100 py-0 sm:py-10">
      <div
        id="app"
        className="mx-auto min-h-screen w-full bg-white px-4 py-6 sm:min-h-0 sm:max-w-[700px] sm:rounded-lg sm:px-8 sm:py-7 sm:shadow-sm"
      >
        <Header unreadCount={unreadCount} onMarkAsRead={markAsRead} />

        <NotificationList
          notifications={notifications}
          markOneAsRead={markOneAsRead}
        />
      </div>
    </div>
  );
}

export default App;
