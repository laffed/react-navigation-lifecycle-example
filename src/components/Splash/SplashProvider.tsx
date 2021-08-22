import React from 'react';
import {StyleProp, ViewStyle, View, StyleSheet} from 'react-native';
import Splash from './Splash';
import {useAppState} from '@state';

type Props = {
  children: React.ReactNode;
  stylesProp?: StyleProp<ViewStyle>;
}

/**
 * Conditional renderer of Splash and Children based on global state showSplash. 
 * Width and Height are set to 100%
 */
export function SplashProvider({children, stylesProp = null}: Props) {
  const {showSplash} = useAppState().app

  return (
    <>
      {showSplash
        ?
        <Splash />
        :
        <View style={[styles.container, stylesProp]}>
          {children}
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})


