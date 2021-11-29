import { db } from '../../../features/database/firebase';

export default function fetchMessagesAPI() {
  return db.collection('chats').orderBy('createdAt', 'desc');
};