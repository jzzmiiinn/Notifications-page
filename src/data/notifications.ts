interface Notification {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target?: string;
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  {
    id: 1,
    user: "Mark Webber",
    avatar: "/avatar-mark-webber.webp",
    action: "reacted to your post",
    target: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    id: 2,
    user: "Angela Gray",
    avatar: "/avatar-angela-gray.webp",
    action: "followed you",
    time: "5m ago",
    read: false,
  },
  {
    id: 3,
    user: "Jacob Thompson",
    avatar: "/avatar-jacob-thompson.webp",
    action: "has joined your group",
    target: "Chess Club",
    time: "1 day ago",
    read: false,
  },
  {
    id: 4,
    user: "Rizky Hasanuddin",
    avatar: "/avatar-rizky-hasanuddin.webp",
    action: "sent you a private message",
    time: "5 days ago",
    read: true,
  },
  {
    id: 5,
    user: "Kimberly Smith",
    avatar: "/avatar-kimberly-smith.webp",
    action: "commented on your picture",
    time: "1 week ago",
    read: true,
  },
  {
    id: 6,
    user: "Nathan Peterson",
    avatar: "/avatar-nathan-peterson.webp",
    action: "reacted to your recent post",
    target: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    id: 7,
    user: "Anna Kim",
    avatar: "/avatar-anna-kim.webp",
    action: "left the group",
    target: "Chess Club",
    time: "2 weeks ago",
    read: true,
  },
];
