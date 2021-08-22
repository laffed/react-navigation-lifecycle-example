import React from "react";
import {useAppState} from "@state";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./AuthStack";
import AppNavigator from "./AppStack";

function RootNav() {
  const {loggedIn} = useAppState().user;

  return (
    <NavigationContainer>
      {!loggedIn && <AuthNavigator />}
      {loggedIn && <AppNavigator />}
    </NavigationContainer>
  );
}

export default RootNav;
