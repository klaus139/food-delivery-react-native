import React from 'react';

import {StyleSheet, StatusBar} from 'react-native';

import {colors} from './src/global/Styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//aimport SigninScreen from './src/screens/authScreens/SigninScreen';
import SigninWelcomeScreen from './src/screens/authScreens/SinginWelcomeScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      {/* <SigninScreen /> */}
      <SigninWelcomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
