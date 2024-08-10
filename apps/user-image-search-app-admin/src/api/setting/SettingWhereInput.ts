import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  notificationPreferences?: JsonFilter;
  privacySettings?: JsonFilter;
  userId?: IntNullableFilter;
  users?: UserListRelationFilter;
};
