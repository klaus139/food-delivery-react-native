import React from 'react';

import {StyleSheet, StatusBar} from 'react-native';

import {colors} from './src/global/Styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SigninScreen from './src/screens/authScreens/SigninScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <SigninScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
