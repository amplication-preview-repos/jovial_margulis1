import { UserUpdateManyWithoutFriendshipsInput } from "./UserUpdateManyWithoutFriendshipsInput";

export type FriendshipUpdateInput = {
  friendId?: number | null;
  userId?: number | null;
  users?: UserUpdateManyWithoutFriendshipsInput;
};
