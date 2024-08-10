import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Setting = {
  createdAt: Date;
  id: string;
  notificationPreferences: JsonValue;
  privacySettings: JsonValue;
  updatedAt: Date;
  userId: number | null;
  users?: Array<User>;
};
