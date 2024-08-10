import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FRIENDSHIP_TITLE_FIELD } from "./FriendshipTitle";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";
import { SETTING_TITLE_FIELD } from "../setting/SettingTitle";

export const FriendshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="friendId" source="friendId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <ReferenceManyField
          reference="User"
          target="friendshipId"
          label="Users"
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
            <ReferenceField
              label="Search"
              source="search.id"
              reference="Search"
            >
              <TextField source={SEARCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Setting"
              source="setting.id"
              reference="Setting"
            >
              <TextField source={SETTING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
