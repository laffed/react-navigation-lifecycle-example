import React from 'react'
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

type Props = {
  children: React.ReactNode;
}
/**
 * TouchableOpacity that dismisses keyboard on blur of any input.
 * Styles should be passed to a single child comp, not this component
 */
export function DismissKeyboardProvider({children}: Props) {

  const onPress = () => {
    console.log('pressed kb');
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress()}
      accessible={false}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}
