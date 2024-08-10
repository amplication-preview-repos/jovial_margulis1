import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";

export type FeedCreateInput = {
  search?: SearchWhereUniqueInput | null;
  searchId?: number | null;
};
