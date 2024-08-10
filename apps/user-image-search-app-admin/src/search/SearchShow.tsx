import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SEARCH_TITLE_FIELD } from "./SearchTitle";
import { FRIENDSHIP_TITLE_FIELD } from "../friendship/FriendshipTitle";
import { SETTING_TITLE_FIELD } from "../setting/SettingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SearchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <BooleanField label="isPrivate" source="isPrivate" />
        <TextField label="response" source="response" />
        <TextField label="searchParameters" source="searchParameters" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="userId" source="userId" />
        <ReferenceManyField reference="Feed" target="searchId" label="Feeds">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Search"
              source="search.id"
              reference="Search"
            >
              <TextField source={SEARCH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="searchId" source="searchId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="searchId" label="Users">
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
