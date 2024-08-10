import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FriendshipWhereInput = {
  friendId?: IntNullableFilter;
  id?: StringFilter;
  userId?: IntNullableFilter;
  users?: UserListRelationFilter;
};
