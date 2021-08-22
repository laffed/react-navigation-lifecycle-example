import React, {useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useFocusEffect} from "@react-navigation/core";
import {AppStackParams} from '@types';
import {Button, TextInput, Title} from 'react-native-paper';
import {useAppState, useActions} from '@state';

type NavProps = StackNavigationProp<AppStackParams, 'FormScreen'>;

export function FormScreen({navigation}: {navigation: NavProps}) {
  const {globalStateCount} = useAppState().app;
  const {incrementGlobalCount} = useActions().app
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!mounted) setMounted(true);
    console.log('FormScreen Mounted');
    return () => console.log('FormScreen Unmounted');
  }, []);

  //Global State Changes
  // useEffect(() => {
  //   if (mounted)  {
  //     console.log('FormScreen Re-rendered due to changing global state');
  //   }
  // }, [globalStateCount])

  useFocusEffect(
    useCallback(
      () => {
        console.log('FormScreen Focused')
        // console.log(`FromScreen Focused, GlobalState is: ${globalStateCount}`)
      },
      [],
    )
  )

  const updateGlobalState = () => {
    incrementGlobalCount();
  }

  const handleNav = () => {
    navigation.navigate('NextScreen');
  }

  const handleInputChange = (text: string) => {
    setName(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Title>FormScreen Form</Title>
        <TextInput
          label='Name'
          value={name}
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
          Next Screen
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

