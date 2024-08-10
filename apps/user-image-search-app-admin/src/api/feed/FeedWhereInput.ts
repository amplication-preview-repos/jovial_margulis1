import { StringFilter } from "../../util/StringFilter";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedWhereInput = {
  id?: StringFilter;
  search?: SearchWhereUniqueInput;
  searchId?: IntNullableFilter;
};
