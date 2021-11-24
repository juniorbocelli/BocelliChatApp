import React from 'react';

import {
  MessageState,
} from './type';

export interface IUseStates {
  messages: MessageState;
  setMessages: React.Dispatch<React.SetStateAction<MessageState>>;
};

export default function useStates(): IUseStates {
  const [messages, setMessages] = React.useState<MessageState>([]);

  return {
    messages: messages,
    setMessages: setMessages,
  };
};