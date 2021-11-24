import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/Login';
import RegisterScreen from '../../screens/Register';
import ChatScreen from '../../screens/Chat';

import { auth } from '../database/firebase';

import { RootStackParamList } from './types';

const Route = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLogged(!!auth.currentUser);
    console.log("BOSTA", auth.currentUser)
  }, [auth.currentUser]);

  return (
    <Stack.Navigator>
      {
        isLogged ?
          <Stack.Screen name="Chat" component={ChatScreen} />
          :
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
      }
    </Stack.Navigator>
  );
};

export default Route;