import { FriendshipWhereUniqueInput } from "../friendship/FriendshipWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SearchUpdateManyWithoutUsersInput } from "./SearchUpdateManyWithoutUsersInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type UserUpdateInput = {
  accessToken?: string | null;
  email?: string | null;
  firstName?: string | null;
  friendship?: FriendshipWhereUniqueInput | null;
  fullName?: string | null;
  instagramId?: string | null;
  lastName?: string | null;
  password?: string;
  profilePictureUrl?: string | null;
  refreshToken?: string | null;
  roles?: InputJsonValue;
  search?: SearchWhereUniqueInput | null;
  searches?: SearchUpdateManyWithoutUsersInput;
  setting?: SettingWhereUniqueInput | null;
  username?: string;
};
