import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import { StackScreenProps } from '@react-navigation/stack';

import { auth } from '../../features/database/firebase';
import { RootStackParamList } from '../../features/navigation/types';

import useStates from './states';
import useAPIs from './apis';
import { useAuth } from '../../features/auth/context';

type Props = StackScreenProps<RootStackParamList, "Chat">;

const Chat = ({ navigation }: Props) => {
  const states = useStates();
  const apis = useAPIs(states);
  const context = useAuth();

  const {
    messages,
    setMessages,
  } = states;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={{
          marginRight: 10
        }}
          onPress={context.signOut}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  React.useEffect(() => {
    if (typeof (context.user) !== "undefined")
      setMessages([
        {
          _id: context.user._id,
          text: 'Olá, gostoso! Bengudo!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
  }, [context.user]);

  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    typeof (context.user) !== "undefined" ?
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: context.user._id,
          name: context.user.name,
          avatar: context.user.avatar,
        }}
      />
      :
      null
  );
};

const styles = StyleSheet.create({
});

export default Chat;