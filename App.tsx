import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from "react-native-screens";
import {config} from "@state";
import {Provider as OvermindProvider} from "overmind-react";
import {Provider as PaperProvider} from 'react-native-paper';
import {createOvermind} from "overmind";
import {theme} from '@styles';
import RootNav from "./src/navigation"
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context"

//React Navigation optimization
//https://reactnavigation.org/docs/react-native-screens/
enableScreens();

const overmind = createOvermind(config, {
  devtools: '<your_ip>:3031',
  logProxies: true,
});

export default function App() {
  return (
    <OvermindProvider value={overmind}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PaperProvider theme={theme}>
          <RootNav />
        </PaperProvider>
      </SafeAreaProvider>
    </OvermindProvider>
  );
}

