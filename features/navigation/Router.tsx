import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/Login';
import RegisterScreen from '../../screens/Register';
import ChatScreen from '../../screens/Chat';
import { NavigationContainer } from '@react-navigation/native';

import { auth } from '../database/firebase';

import { RootStackParamList } from './types';
import { useAuth } from '../auth/context';

const LoggedRoute = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const NotLoggedRoute = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const authContext = useAuth();

  const {
    isLoggedIn
  } = authContext;

  return (
    <NavigationContainer>
      {
        isLoggedIn ?
          <LoggedRoute />
          :
          <NotLoggedRoute />
      }
    </NavigationContainer>
  );
};

export default Router;