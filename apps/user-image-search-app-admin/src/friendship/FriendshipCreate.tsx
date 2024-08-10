import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const FriendshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="friendId" source="friendId" />
        <NumberInput step={1} label="userId" source="userId" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
