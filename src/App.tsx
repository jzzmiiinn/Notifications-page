import { useState } from "react";
import { Header } from "./components/Header";
import NotificationList from "./components/NotificationList";
import { notifications as initialNotifications } from "./data/notifications";
import type { Notification } from "./types/notification";

function App() {
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

  return (
    <div
      id="app"
      className="max-w-[700px] mx-auto bg-white min-h-screen p-6 mt-15"
    >
      <Header unreadCount={unreadCount} onMarkAsRead={markAsRead} />

      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;
