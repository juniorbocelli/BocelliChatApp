import React from 'react';

import {
  EmailState,
  PasswordState,
} from './types';

export interface IUseStates {
  email: EmailState;
  setEmail: React.Dispatch<React.SetStateAction<EmailState>>;

  password: PasswordState;
  setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
};

export default function useStates(): IUseStates {
  const [email, setEmail] = React.useState<EmailState>(undefined);
  const [password, setPassword] = React.useState<PasswordState>(undefined);

  return {
    email: email,
    setEmail: setEmail,

    password: password,
    setPassword: setPassword,
  };
};