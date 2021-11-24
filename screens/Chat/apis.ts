import { auth } from '../../features/database/firebase';

import { IUseStates } from './states';

export interface IUseAPIs {
  signOut: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  return {
    signOut,
  };
};