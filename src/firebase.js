// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// This import loads the firebase namespace.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// These imports load individual services into the firebase namespace.


const firebaseConfig = {
  apiKey: 'AIzaSyCS1P3HiR3qb3IRz8R-lVmFVVoHqN44Shc',
  authDomain: 'challenge-2ddf6.firebaseapp.com',
  projectId: 'challenge-2ddf6',
  storageBucket: 'challenge-2ddf6.appspot.com',
  messagingSenderId: '831881509569',
  appId: '1:831881509569:web:3d05de95eb6057b7203240',
  measurementId: 'G-0N0VL7DX1N',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
