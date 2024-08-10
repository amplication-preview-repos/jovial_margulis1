import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { SearchTitle } from "../search/SearchTitle";

export const FeedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="search.id" reference="Search" label="Search">
          <SelectInput optionText={SearchTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="searchId" source="searchId" />
      </SimpleForm>
    </Edit>
  );
};
