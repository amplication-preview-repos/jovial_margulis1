import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutSettingsInput } from "./UserCreateNestedManyWithoutSettingsInput";

export type SettingCreateInput = {
  notificationPreferences?: InputJsonValue;
  privacySettings?: InputJsonValue;
  userId?: number | null;
  users?: UserCreateNestedManyWithoutSettingsInput;
};
