import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AuthStackParams} from "@types";

const {Navigator, Screen} = createStackNavigator<AuthStackParams>();

function AuthNavigator() {
  return (
    <Navigator headerMode="none" initialRouteName={"Onboarding"}>
      {/* <Screen
        name="Onboarding"
        component={Onboarding}
        options={{animationEnabled: false}}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{animationEnabled: false}}
      />
      <Screen name="SignUp" component={SignUp} /> */}
    </Navigator>
  );
}

export default AuthNavigator;
