import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParams} from '@types';
import {FormScreen, NextScreen} from '@scenes';

const {Navigator, Screen} = createStackNavigator<AppStackParams>();

function AppNavigator() {
  return (
    <Navigator initialRouteName='FormScreen' screenOptions={{headerBackTitle: 'Back'}}>
      <Screen
        component={FormScreen}
        name='FormScreen'
      />
      <Screen
        component={NextScreen}
        name='NextScreen'
      />
    </Navigator>
  );
}


export default AppNavigator;