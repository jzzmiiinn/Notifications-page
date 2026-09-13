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
    <div className="min-h-screen bg-gray-100 py-0 sm:py-10">
      <div
        id="app"
        className="mx-auto min-h-screen w-full bg-white px-4 py-6 sm:min-h-0 sm:max-w-[700px] sm:rounded-lg sm:px-8 sm:py-7 sm:shadow-sm"
      >
        <Header unreadCount={unreadCount} onMarkAsRead={markAsRead} />

        <NotificationList notifications={notifications} />
      </div>
    </div>
  );
}

export default App;
