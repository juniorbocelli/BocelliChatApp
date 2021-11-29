import React from 'react';

import {
  IsQueryingAPIState,

  MessageState,
} from './type';

export interface IUseStates {
  isQueryingAPI: IsQueryingAPIState,
  setIsQueryingAPI: React.Dispatch<React.SetStateAction<IsQueryingAPIState>>;

  messages: MessageState;
  setMessages: React.Dispatch<React.SetStateAction<MessageState>>;
};

export default function useStates(): IUseStates {
  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);

  const [messages, setMessages] = React.useState<MessageState>([]);

  return {
    isQueryingAPI: isQueryingAPI,
    setIsQueryingAPI: setIsQueryingAPI,

    messages: messages,
    setMessages: setMessages,
  };
};