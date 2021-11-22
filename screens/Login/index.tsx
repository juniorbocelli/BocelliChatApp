import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

import useStates from './states';

const Login = () => {
  const states = useStates();
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
      <Button title="Login" buttonStyle={styles.button} />
      <Button title="Cadastro" buttonStyle={styles.button} />
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