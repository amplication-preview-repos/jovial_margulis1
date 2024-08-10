import { Friendship } from "../friendship/Friendship";
import { JsonValue } from "type-fest";
import { Search } from "../search/Search";
import { Setting } from "../setting/Setting";

export type User = {
  accessToken: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  friendship?: Friendship | null;
  fullName: string | null;
  id: string;
  instagramId: string | null;
  lastName: string | null;
  profilePictureUrl: string | null;
  refreshToken: string | null;
  roles: JsonValue;
  search?: Search | null;
  searches?: Array<Search>;
  setting?: Setting | null;
  updatedAt: Date;
  username: string;
};
