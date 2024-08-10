import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";

export type FeedUpdateInput = {
  search?: SearchWhereUniqueInput | null;
  searchId?: number | null;
};
