import { IMessage } from 'react-native-gifted-chat';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import addMessageAPI from './addMessageAPI';
import fetchMessagesAPI from './fetchMessagesAPI';

import { IUseStates } from '../states';

export interface IUseAPIs {
  addMessage: (message: IMessage) => void;
  fetchMessages: () => void;
};

export default function useAPIs(states: IUseStates): IUseAPIs {
  const addMessage = (message: IMessage) => {
    const {
      setIsQueryingAPI,
    } = states;

    setIsQueryingAPI(true);

    addMessageAPI(message).then((documentReference) => {

    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    }).finally(() => {
      states.setIsQueryingAPI(false);
    });
  };

  const fetchMessages = () => {
    const {
      setIsQueryingAPI,

      setMessages,
    } = states;

    const onResult = (snapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>) => {
      setMessages(
        snapshot.docs.map((doc) => {
          return {
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }
        })
      );
    };

    const onError = (error: Error) => {
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    };

    setIsQueryingAPI(true);

    // See doc https://rnfirebase.io/firestore/usage
    fetchMessagesAPI().onSnapshot(onResult, onError, () => setIsQueryingAPI(false));
  };

  return {
    addMessage,
    fetchMessages,
  };
};