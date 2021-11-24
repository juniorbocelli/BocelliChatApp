import { auth } from '../../features/database/firebase';

import { IUseStates } from './states';

export interface IUseAPIs {
  register: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const register = () => {
    const {
      email,
      password,
      avatar,
      name,
    } = states;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        user.updateProfile({
          displayName: name,
          photoURL: avatar ? avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
        })
          .catch((error) => {
            alert(error.message)
          })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };

  return {
    register,
  };
};