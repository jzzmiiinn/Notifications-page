interface HeaderProps {
  unreadCount: number;
  onMarkAsRead: () => void;
}

export const Header = ({ unreadCount, onMarkAsRead }: HeaderProps) => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
        Notifications
        <span className="rounded-md bg-blue-700 px-2.5 py-0.5 text-sm font-bold text-white">
          {unreadCount}
        </span>
      </h1>

      <button
        type="button"
        onClick={onMarkAsRead}
        className="text-sm text-gray-600 transition-colors hover:text-blue-700"
      >
        Mark all as read
      </button>
    </header>
  );
};
