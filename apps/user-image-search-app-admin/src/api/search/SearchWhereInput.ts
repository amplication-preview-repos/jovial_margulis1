import { FeedListRelationFilter } from "../feed/FeedListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SearchWhereInput = {
  feeds?: FeedListRelationFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  isPrivate?: BooleanNullableFilter;
  response?: JsonFilter;
  searchParameters?: JsonFilter;
  user?: UserWhereUniqueInput;
  userId?: IntNullableFilter;
  users?: UserListRelationFilter;
};
