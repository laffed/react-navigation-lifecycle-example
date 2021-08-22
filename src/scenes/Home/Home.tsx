import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {AppStackParams} from '@types';

type NavProps = StackNavigationProp<AppStackParams, 'Home'>;

export function Home({navigation}: {navigation: NavProps}) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
});

