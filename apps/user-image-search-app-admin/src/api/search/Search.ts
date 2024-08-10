import { Feed } from "../feed/Feed";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Search = {
  createdAt: Date;
  feeds?: Array<Feed>;
  id: string;
  imageUrl: string | null;
  isPrivate: boolean | null;
  response: JsonValue;
  searchParameters: JsonValue;
  updatedAt: Date;
  user?: User | null;
  userId: number | null;
  users?: Array<User>;
};
