import { SortOrder } from "../../util/SortOrder";

export type FriendshipOrderByInput = {
  createdAt?: SortOrder;
  friendId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
