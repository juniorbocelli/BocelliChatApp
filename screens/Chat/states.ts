import React from 'react';
import { IMessage } from 'react-native-gifted-chat';

import {
  UserState,
} from './type';

export interface IUseStates {
  messages: Array<IMessage>;
  setMessages: React.Dispatch<React.SetStateAction<Array<IMessage>>>;

  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
};

export default function useStates(): IUseStates {
  const [messages, setMessages] = React.useState<Array<IMessage>>([]);
  const [user, setUser] = React.useState<UserState>(undefined);

  return {
    messages: messages,
    setMessages: setMessages,

    user: user,
    setUser: setUser,
  };
};