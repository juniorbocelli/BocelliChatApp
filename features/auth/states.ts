import React from 'react';

import {
  IsQueryingAPIState,
  IsSignedIn,
  UserState,
} from './types';

export interface IAuthState {
  isQueryingAPI: IsQueryingAPIState;
  setIsQueryingAPI: React.Dispatch<React.SetStateAction<IsQueryingAPIState>>;

  isSignedIn: IsSignedIn;
  setIsSignedIn: React.Dispatch<React.SetStateAction<IsSignedIn>>;

  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
};

export default function useStates(): IAuthState {
  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);
  const [isSignedIn, setIsSignedIn] = React.useState<IsSignedIn>(false);
  const [user, setUser] = React.useState<UserState>(undefined);

  return {
    isQueryingAPI: isQueryingAPI,
    setIsQueryingAPI: setIsQueryingAPI,

    isSignedIn: isSignedIn,
    setIsSignedIn: setIsSignedIn,

    user: user,
    setUser: setUser,
  };
};