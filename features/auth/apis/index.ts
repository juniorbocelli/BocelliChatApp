import registerAPI from './registerAPI';
import signInAPI from './signInAPI';
import signOutAPI from './signOutAPI';

import { IAuthState } from '../states';

export interface IUseAPIs {
  register: (email: string, password: string, name: string, avatar: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export default function useAPIs(states: IAuthState): IUseAPIs {
  const register = (email: string, password: string, name: string, avatar: string) => {
    states.setIsQueryingAPI(true);

    registerAPI(email, password).then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
      user.updateProfile({
        displayName: name,
        photoURL: avatar ? avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
      }).catch((error) => {
        alert(error.message)
      });

      states.setIsSignedIn(true);

      states.setUser({
        _id: user.uid,
        name: user.displayName,
        avatar: user.photoURL,
      });
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    }).finally(() => {
      states.setIsQueryingAPI(false);
    });
  };

  const signIn = (email: string, password: string) => {
    states.setIsQueryingAPI(true);

    signInAPI(email, password).then((userCredential) => {
      var user = userCredential.user;

      states.setIsSignedIn(true);

      states.setUser({
        _id: user.uid,
        name: user.displayName,
        avatar: user.photoURL,
      });
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    }).finally(() => {
      states.setIsQueryingAPI(false);
    });
  };

  const signOut = () => {
    states.setIsQueryingAPI(true);

    signOutAPI().then(() => {
      states.setIsSignedIn(false);
      states.setUser(undefined);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    }).finally(() => {
      states.setIsQueryingAPI(false);
    });
  };

  return {
    register,
    signIn,
    signOut,
  };
};