import { auth } from '../../features/database/firebase';

import { IUseStates } from './states';

export interface IUseAPIs {
  signIn: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const signIn = () => {
    const {
      email,
      password,
    } = states;

    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage)
      });
  };

  return {
    signIn,
  };
};