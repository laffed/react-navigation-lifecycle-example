import React, {useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useFocusEffect} from "@react-navigation/core";
import {AppStackParams} from '@types';
import {Button, TextInput, Title} from 'react-native-paper';
import {useAppState, useActions} from '@state';

type NavProps = StackNavigationProp<AppStackParams, 'NextScreen'>;

export function NextScreen({navigation}: {navigation: NavProps}) {
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState('');
  const {globalStateCount} = useAppState().app;
  const {incrementGlobalCount} = useActions().app;

  useEffect(() => {
    if (!mounted) setMounted(true);
    console.log('NextScreen Mounted');
    return () => console.log('NextScreen Unmounted');
  }, []);

  //Global State Changes
  // useEffect(() => {
  //   if (mounted)  {
  //     console.log('NextScreen Re-rendered due to changing global state');
  //   }
  // }, [globalStateCount])

  useFocusEffect(
    useCallback(
      () => {
        console.log('NextScreen Focused');
        // console.log(`NextScreen Focused, GlobalState is: ${globalStateCount}`)
      },
      [],
    )
  )

  const updateGlobalState = () => {
    incrementGlobalCount();
  }

  const handleNav = () => {
    navigation.pop();
    // navigation.navigate('FormScreen');
  }

  const handleInputChange = (text: string) => {
    setColor(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Title>NextScreen Form</Title>
        <TextInput
          label='Favorite Color'
          value={color}
          onChangeText={handleInputChange}
        />
      </View>
      <View style={styles.globalStateContainer}>
        <Text style={styles.title}>
          {`Global State Count: ${globalStateCount}`}
        </Text>
        <Button
          mode='outlined'
          onPress={updateGlobalState}
        >
          Increment Global State
        </Button>
      </View>
      <View style={{flex: 1}}>
        <Button
          mode='contained'
          onPress={handleNav}
        >
          Go Back
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  globalStateContainer: {
    flex: 1
  }
});
