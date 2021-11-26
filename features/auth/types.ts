import { User } from 'react-native-gifted-chat';

export type IsSignedIn = boolean;
export type IsQueryingAPIState = boolean;
export type UserState = undefined | User;

export interface IAuthContext {
  isLoggedIn: IsSignedIn;
  isQueryingAPI: IsQueryingAPIState;
  user: UserState;

  register: (email: string, password: string, name: string, avatar: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};