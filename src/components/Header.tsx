interface HeaderProps {
  unreadCount: number;
  onMarkAsRead: () => void;
}

export const Header = ({ unreadCount, onMarkAsRead }: HeaderProps) => {
  return (
    <div id="header" className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">
        Notifications
        <span className="ml-2 rounded-md bg-blue-600 px-2 py-1 text-sm text-white">
          {unreadCount}
        </span>
      </h1>

      <button
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        onClick={onMarkAsRead}
      >
        Mark all as read
      </button>
    </div>
  );
};
