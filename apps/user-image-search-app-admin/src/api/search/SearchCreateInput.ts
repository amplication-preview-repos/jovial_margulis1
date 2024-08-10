import { FeedCreateNestedManyWithoutSearchesInput } from "./FeedCreateNestedManyWithoutSearchesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutSearchesInput } from "./UserCreateNestedManyWithoutSearchesInput";

export type SearchCreateInput = {
  feeds?: FeedCreateNestedManyWithoutSearchesInput;
  imageUrl?: string | null;
  isPrivate?: boolean | null;
  response?: InputJsonValue;
  searchParameters?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  userId?: number | null;
  users?: UserCreateNestedManyWithoutSearchesInput;
};
