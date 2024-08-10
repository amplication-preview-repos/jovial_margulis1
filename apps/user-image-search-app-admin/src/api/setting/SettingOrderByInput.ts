import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notificationPreferences?: SortOrder;
  privacySettings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
