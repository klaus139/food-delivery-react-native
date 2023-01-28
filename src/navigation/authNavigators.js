import React from 'react';

import {TransitionPresets} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SigninScreen from '../screens/authScreens/SigninScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SigninWelcomeScreen"
        component={SigninWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStack.Navigator>
  );
}
