import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0cDBMd8K0zI6IaVeROpaJpa1LR13gQcc",
    authDomain: "bocellichatapp.firebaseapp.com",
    projectId: "bocellichatapp",
    storageBucket: "bocellichatapp.appspot.com",
    messagingSenderId: "323949393212",
    appId: "1:323949393212:web:f780c64e1ec0aece2ada39",
    measurementId: "G-YW6Y446SJ4"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };