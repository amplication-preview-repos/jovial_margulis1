import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { FriendshipTitle } from "../friendship/FriendshipTitle";
import { SearchTitle } from "../search/SearchTitle";
import { SettingTitle } from "../setting/SettingTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="friendship.id"
          reference="Friendship"
          label="Friendship"
        >
          <SelectInput optionText={FriendshipTitle} />
        </ReferenceInput>
        <TextInput label="fullName" source="fullName" />
        <TextInput label="instagramId" source="instagramId" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="profilePictureUrl" source="profilePictureUrl" />
        <TextInput label="refreshToken" source="refreshToken" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="searches"
          reference="Search"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SearchTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="setting.id" reference="Setting" label="Setting">
          <SelectInput optionText={SettingTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
