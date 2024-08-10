import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FRIENDSHIP_TITLE_FIELD } from "../friendship/FriendshipTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { SETTING_TITLE_FIELD } from "../setting/SettingTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accessToken" source="accessToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <ReferenceField
          label="Friendship"
          source="friendship.id"
          reference="Friendship"
        >
          <TextField source={FRIENDSHIP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="instagramId" source="instagramId" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="profilePictureUrl" source="profilePictureUrl" />
        <TextField label="refreshToken" source="refreshToken" />
        <TextField label="Roles" source="roles" />
        <ReferenceField label="Search" source="search.id" reference="Search">
          <TextField source={SEARCH_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Setting" source="setting.id" reference="Setting">
          <TextField source={SETTING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
