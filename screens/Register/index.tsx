import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

import useStates from './states';

const Register = () => {
  const states = useStates();
  const {
    name,
    setName,

    email,
    setEmail,

    password,
    setPassword,

    avatar,
    setAvatar,
  } = states;

  return (
    <View style={styles.container}>
      <Input
        autoCompleteType
        placeholder='Enter your name'
        label='Name'
        leftIcon={{ type: 'material', name: 'badge' }}

        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        autoCompleteType
        placeholder='Enter your email'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}

        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        autoCompleteType
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}

        value={password} onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Input
        autoCompleteType
        placeholder='Enter your image url'
        label='Profile Picture'
        leftIcon={{ type: 'material', name: 'face' }}

        value={avatar}
        onChangeText={text => setAvatar(text)}
      />
      <Button
        title="Cadastrar" style={styles.button}
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
})
export default Register;