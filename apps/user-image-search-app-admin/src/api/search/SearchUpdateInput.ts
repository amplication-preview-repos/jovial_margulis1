import { FeedUpdateManyWithoutSearchesInput } from "./FeedUpdateManyWithoutSearchesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutSearchesInput } from "./UserUpdateManyWithoutSearchesInput";

export type SearchUpdateInput = {
  feeds?: FeedUpdateManyWithoutSearchesInput;
  imageUrl?: string | null;
  isPrivate?: boolean | null;
  response?: InputJsonValue;
  searchParameters?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  userId?: number | null;
  users?: UserUpdateManyWithoutSearchesInput;
};
