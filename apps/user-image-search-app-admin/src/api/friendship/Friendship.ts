import { User } from "../user/User";

export type Friendship = {
  createdAt: Date;
  friendId: number | null;
  id: string;
  updatedAt: Date;
  userId: number | null;
  users?: Array<User>;
};
