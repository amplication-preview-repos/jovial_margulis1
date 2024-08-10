import { UserCreateNestedManyWithoutFriendshipsInput } from "./UserCreateNestedManyWithoutFriendshipsInput";

export type FriendshipCreateInput = {
  friendId?: number | null;
  userId?: number | null;
  users?: UserCreateNestedManyWithoutFriendshipsInput;
};
