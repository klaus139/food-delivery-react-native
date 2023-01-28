import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
//rimport {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SigninScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
const AuthStack = createStackNavigator();

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
      <AuthStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </AuthStack.Navigator>
  );
}
