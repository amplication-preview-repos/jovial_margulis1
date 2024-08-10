import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { SearchTitle } from "../search/SearchTitle";

export const FeedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="searchId" source="searchId" />
      </SimpleForm>
    </Create>
  );
};
