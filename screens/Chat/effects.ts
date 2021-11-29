import React from 'react';
import { UserState } from '../../features/auth/types';

import { IUseAPIs } from './apis';
import { IUseStates } from './states';

export interface IUseEffects {
  useComponentDidMount: () => void;
  useSendAdminMessageComponentDidMount: (user: UserState, setMessages: IUseStates["setMessages"]) => void;
};

export default function useEffects(apis: IUseAPIs): IUseEffects {
  const useComponentDidMount = () => {
    React.useLayoutEffect(() => {
      apis.fetchMessages();
    });
  };

  const useSendAdminMessageComponentDidMount = (user: UserState, setMessages: IUseStates["setMessages"]) => {
    React.useEffect(() => {
      if (typeof(user) !== "undefined")
      setMessages([
        {
          _id: user._id,
          text: 'Seja bem vindo ao chat!',
          createdAt: new Date(),
          user: {
            _id: -1,
            name: 'Administrador',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);
    }, [user]);
  };

  return {
    useComponentDidMount,
    useSendAdminMessageComponentDidMount,
  };
};