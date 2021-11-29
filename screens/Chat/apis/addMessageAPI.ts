import { IMessage } from 'react-native-gifted-chat';

import { db } from '../../../features/database/firebase';

export default function addMessage(message: IMessage) {
  const {
    _id,
    createdAt,
    text,
    user,
  } = message;

  return db.collection('chats').add({ _id, createdAt, text, user });
};