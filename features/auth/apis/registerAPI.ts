import { auth } from '../../database/firebase';

export default function register(email: string, password: string) {
  return auth.createUserWithEmailAndPassword(email, password);
};