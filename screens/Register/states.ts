import React from 'react';

import {
  AvatarState,
  EmailState,
  NameState,
  PasswordState
} from './types';

export interface IUseStates {
  avatar: AvatarState;
  setAvatar: React.Dispatch<React.SetStateAction<AvatarState>>;

  email: EmailState;
  setEmail: React.Dispatch<React.SetStateAction<EmailState>>;

  name: NameState;
  setName: React.Dispatch<React.SetStateAction<NameState>>;

  password: PasswordState;
  setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
};

export default function useStates(): IUseStates {
  const [avatar, setAvatar] = React.useState<AvatarState>(undefined);
  const [email, setEmail] = React.useState<EmailState>(undefined);
  const [name, setName] = React.useState<NameState>(undefined);
  const [password, setPassword] = React.useState<PasswordState>(undefined);

  return {
    avatar: avatar,
    setAvatar: setAvatar,

    email: email,
    setEmail: setEmail,

    name: name,
    setName: setName,

    password: password,
    setPassword: setPassword,
  };
};