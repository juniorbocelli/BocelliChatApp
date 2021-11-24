import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat, Message } from 'react-native-gifted-chat';
import { StackScreenProps } from '@react-navigation/stack';

import { auth } from '../../features/database/firebase';
import { RootStackParamList } from '../../features/navigation/types';

import useStates from './states';
import useAPIs from './apis';

type Props = StackScreenProps<RootStackParamList, "Chat">;

const Chat = ({ navigation }: Props) => {
  const states = useStates();
  const apis = useAPIs(states);

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
          onPress={apis.signOut}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: auth?.currentUser?.photoURL
      }}
    />
  );
};

const styles = StyleSheet.create({
});

export default Chat;