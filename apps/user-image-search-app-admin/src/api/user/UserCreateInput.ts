import { FriendshipWhereUniqueInput } from "../friendship/FriendshipWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SearchCreateNestedManyWithoutUsersInput } from "./SearchCreateNestedManyWithoutUsersInput";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type UserCreateInput = {
  accessToken?: string | null;
  email?: string | null;
  firstName?: string | null;
  friendship?: FriendshipWhereUniqueInput | null;
  fullName?: string | null;
  instagramId?: string | null;
  lastName?: string | null;
  password: string;
  profilePictureUrl?: string | null;
  refreshToken?: string | null;
  roles: InputJsonValue;
  search?: SearchWhereUniqueInput | null;
  searches?: SearchCreateNestedManyWithoutUsersInput;
  setting?: SettingWhereUniqueInput | null;
  username: string;
};
