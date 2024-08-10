import { Search as TSearch } from "../api/search/Search";

export const SEARCH_TITLE_FIELD = "imageUrl";

export const SearchTitle = (record: TSearch): string => {
  return record.imageUrl?.toString() || String(record.id);
};
