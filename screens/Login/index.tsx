import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../features/navigation/types';

import useStates from './states';
import useAPIs from './apis';

type Props = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const states = useStates();
  const apis = useAPIs(states);

  const {
    email,
    setEmail,

    password,
    setPassword,
  } = states;

  return (
    <View style={styles.container}>
      <Input
        autoCompleteType
        placeholder='Digite seu e-mail'
        label='E-mail'
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        autoCompleteType
        placeholder='Digite sua senha'
        label='Senha'
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button
        title="Fazer Login"
        buttonStyle={styles.button}

        onPress={apis.signIn}
      />
      <Button
        title="Cadastro"
        buttonStyle={styles.button}

        onPress={() => navigation.navigate("Register")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
  },
  button: {
    width: 370,
    marginTop: 10
  }
});

export default Login;