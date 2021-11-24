import { auth } from '../../features/database/firebase';

import { IUseStates } from './states';

export interface IUseAPIs {
  signOut: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const signOut = () => {
    const {
      setUser,
    } = states;

    auth.signOut().then(() => {
      // Sign-out successful.
      setUser(undefined);
      // navigation.replace("Login");
    }).catch((error) => {
      // An error happened.
    });
  };

  return {
    signOut,
  };
};