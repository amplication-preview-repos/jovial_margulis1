import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SearchList } from "./search/SearchList";
import { SearchCreate } from "./search/SearchCreate";
import { SearchEdit } from "./search/SearchEdit";
import { SearchShow } from "./search/SearchShow";
import { FriendshipList } from "./friendship/FriendshipList";
import { FriendshipCreate } from "./friendship/FriendshipCreate";
import { FriendshipEdit } from "./friendship/FriendshipEdit";
import { FriendshipShow } from "./friendship/FriendshipShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { FeedList } from "./feed/FeedList";
import { FeedCreate } from "./feed/FeedCreate";
import { FeedEdit } from "./feed/FeedEdit";
import { FeedShow } from "./feed/FeedShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserImageSearchApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Search"
          list={SearchList}
          edit={SearchEdit}
          create={SearchCreate}
          show={SearchShow}
        />
        <Resource
          name="Friendship"
          list={FriendshipList}
          edit={FriendshipEdit}
          create={FriendshipCreate}
          show={FriendshipShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="Feed"
          list={FeedList}
          edit={FeedEdit}
          create={FeedCreate}
          show={FeedShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
