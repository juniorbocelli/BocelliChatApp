import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

import useStates from './states';
import { useAuth } from '../../features/auth/context';

const Register = () => {
  const states = useStates();
  const context = useAuth();

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
        placeholder='Digite seu nome'
        label='Nome'
        leftIcon={{ type: 'material', name: 'badge' }}

        value={name}
        onChangeText={text => setName(text)}

        autoFocus={true}
      />
      <Input
        autoCompleteType
        placeholder='Digite seu e-mail'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}

        value={email}
        onChangeText={text => setEmail(text)}

        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        autoCompleteType
        placeholder='Digite sua senha'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}

        value={password} onChangeText={text => setPassword(text)}
        secureTextEntry

        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        autoCompleteType
        placeholder='Digite a URL da sua imagem de avatar'
        label='Profile Picture'
        leftIcon={{ type: 'material', name: 'face' }}

        value={avatar}
        onChangeText={text => setAvatar(text)}

        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Cadastrar" style={styles.button}

        onPress={() => context.register(email.trim(), password.trim(), name.trim(), avatar.trim())}
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