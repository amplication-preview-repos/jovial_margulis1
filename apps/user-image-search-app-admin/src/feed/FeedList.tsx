import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SEARCH_TITLE_FIELD } from "../search/SearchTitle";

export const FeedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feeds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Search" source="search.id" reference="Search">
          <TextField source={SEARCH_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="searchId" source="searchId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
