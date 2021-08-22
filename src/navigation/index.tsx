import React from "react";
import {useAppState} from "@state";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./AppStack";

function RootNav() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default RootNav;
