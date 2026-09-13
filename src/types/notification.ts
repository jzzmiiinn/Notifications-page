export interface Notification {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target?: string;
  time: string;
  read: boolean;
}
