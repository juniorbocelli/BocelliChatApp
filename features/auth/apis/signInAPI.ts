import { auth } from '../../database/firebase';

export default function signIn(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
};