import React from 'react';
import useAPIs from './apis';
import useStates from './states';
import { IAuthContext } from './types';

const AuthContext = React.createContext({} as IAuthContext);

interface IAuthContextProviderProps {
  children?: React.ReactNode;
};

export const AuthContextProvider: React.FC<IAuthContextProviderProps> = ({ children }) => {
  const states = useStates();
  const apis = useAPIs(states);

  return (
    <AuthContext.Provider
      value={
        {
          isLoggedIn: states.isSignedIn,
          isQueryingAPI: states.isQueryingAPI,
          user: states.user,

          register: apis.register,
          signIn: apis.signIn,
          signOut: apis.signOut,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
};