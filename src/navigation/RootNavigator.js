import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
