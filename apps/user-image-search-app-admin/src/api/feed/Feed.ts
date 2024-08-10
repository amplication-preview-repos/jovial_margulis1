import { Search } from "../search/Search";

export type Feed = {
  createdAt: Date;
  id: string;
  search?: Search | null;
  searchId: number | null;
  updatedAt: Date;
};
