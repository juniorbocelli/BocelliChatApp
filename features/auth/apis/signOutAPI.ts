import { auth } from '../../database/firebase';

export default function signOutAPI() {
  return auth.signOut();
};