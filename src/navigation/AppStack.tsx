import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParams} from '@types';
import {Home} from '@scenes';

const {Navigator, Screen} = createStackNavigator<AppStackParams>();

function AppNavigator() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen
        component={Home}
        name="Home"
      />
    </Navigator>
  );
}


export default AppNavigator;