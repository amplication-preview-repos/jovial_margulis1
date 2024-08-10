import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutSettingsInput } from "./UserUpdateManyWithoutSettingsInput";

export type SettingUpdateInput = {
  notificationPreferences?: InputJsonValue;
  privacySettings?: InputJsonValue;
  userId?: number | null;
  users?: UserUpdateManyWithoutSettingsInput;
};
