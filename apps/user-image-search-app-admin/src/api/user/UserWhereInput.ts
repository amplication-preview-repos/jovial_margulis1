import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FriendshipWhereUniqueInput } from "../friendship/FriendshipWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SearchWhereUniqueInput } from "../search/SearchWhereUniqueInput";
import { SearchListRelationFilter } from "../search/SearchListRelationFilter";
import { SettingWhereUniqueInput } from "../setting/SettingWhereUniqueInput";

export type UserWhereInput = {
  accessToken?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  friendship?: FriendshipWhereUniqueInput;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  instagramId?: StringNullableFilter;
  lastName?: StringNullableFilter;
  profilePictureUrl?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  search?: SearchWhereUniqueInput;
  searches?: SearchListRelationFilter;
  setting?: SettingWhereUniqueInput;
  username?: StringFilter;
};
